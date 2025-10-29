import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

import type { SectionHeaderProps, UIHeaderProps } from "./CatSectionTabs/SectionHeader";
import SectionHeader from "./CatSectionTabs/SectionHeader";
import ContainerTabs from "./CatSectionTabs/ContainerTabs";


import type { RankProduct, TabConfig, TypeProduct, TypeTab } from "@/features/home/types/home.props";
import { useGetTabConfigQuery, useGetVoteQuery } from "@/features/home/service/homeService";

import SectionContainer from "@/shared/components/SectionContainer";
import { formatCurrencyVND } from "@/shared/utils/helper";
import { TabsRankSkeleton } from "@/shared/components/skeleton-screen/HomeSkeleton";

type Props = {
    typeProduct: TypeProduct;
};

const LeftRankItem: React.FC<{
    product: RankProduct;
    activeId?: number;
    onHover: (p: RankProduct) => void;
}> = ({ product, activeId, onHover }) => {
    return (
        <div
            onMouseEnter={() => onHover(product)}
            className={`px-3 mb-4 cursor-pointer
            ${activeId === product.id ? "hover:border-r-[2px] hover:border-[#F39801]" : ""}
        `}
        >
            <Link to={product.product_url} className="flex items-center gap-3">
                <div className="text-center mr-2">
                    <div className="font-semibold text-gray-700">{product.rank}</div>
                    <i className="fa fa-arrow-up text-green-600"></i>
                </div>

                <img
                    src={product.image_url}
                    alt={product.name}
                    className="h-[100px] object-cover"
                />

                <div className="text-[13px] self-start">
                    <div className="text-sm font-[#000000]">{product.name}</div>
                    <div className="text-[#808080]">{product.author}</div>
                    <div className="text-[#2F80ED]">{product.voted}</div>
                </div>
            </Link>


        </div>
    );
};


const RightPreview: React.FC<{ product?: RankProduct }> = ({ product }) => {
    if (!product) {
        return;
    }

    return (
        <div key={product.id} className="grid grid-cols-6">
            {/* Ảnh */}
            <div className="col-span-2">
                <a href={`/product/${product.id}`}>
                    <img
                        src={product.image_url}
                        alt={product.name}
                        className="max-h-[350px] object-cover transition-transform duration-300 hover:scale-103"
                    />
                </a>
            </div>
            {/* Thông tin */}
            <div className="col-span-4 text-[14px] text-gray-700 pl-3 mx-3">
                <a href={`/product/${product.id}`} className="block">
                    <h2 className="text-[18px] font-semibold mb-1">{product.name}</h2>
                    <div className="text-gray-600">
                        Tác giả: <span className="font-medium">{product.author}</span>
                    </div>
                    <div className="text-gray-600">
                        Nhà xuất bản:{" "}
                        <span className="font-medium">{product.publisher}</span>
                    </div>
                </a>

                <div className="flex items-center mt-4 gap-6">
                    <div>
                        <div className="text-[20px] font-bold text-blue-600">
                            {formatCurrencyVND(product.discount_price)} đ
                        </div>
                        <div className="flex items-center gap-2 text-sm">
                            <div className="line-through text-gray-400">
                                {formatCurrencyVND(product.price)}
                            </div>
                            <div className="text-[#F39801] font-semibold bg-[#F7941E]/20 p-1 rounded-lg ">
                                {product.discount_percent}%
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-5 text-sm leading-relaxed "
                    dangerouslySetInnerHTML={{ __html: product.description }}
                />
            </div>
        </div>
    );
};

const CatSectionTabsRank: React.FC<Props> = ({ typeProduct }) => {
    const { data: tabsCat } = useGetTabConfigQuery({ section: typeProduct });

    const sectionHeader: SectionHeaderProps = {
        title: tabsCat?.data.title,
        iconURL: tabsCat?.data.iconURL,
        bgImage: tabsCat?.data.bg_url,
    };
    const uiHeader: UIHeaderProps = {
        colorTitle: '#FFFFFF'
    };

    const labelTabs: TabConfig[] = tabsCat?.data.tabs || [];
    const [activeLableTab, setActiveLabelTab] = useState<TypeTab>();
    const [rankProductActive, setRankProduct] = useState<RankProduct>();

    // Khi load tab config lần đầu, set tab đầu tiên làm mặc định
    useEffect(() => {
        if (labelTabs.length > 0 && !activeLableTab) {
            setActiveLabelTab(labelTabs[0].key as TypeTab);
        }
    }, [labelTabs, activeLableTab]);

    // Lấy danh sách sản phẩm theo tab hiện tại
    const { data: productsData, isLoading, isFetching } = useGetVoteQuery(
        { tab: activeLableTab },
        { skip: !activeLableTab, }
    );

    const products: RankProduct[] = productsData || [];

    // Khi dữ liệu sản phẩm thay đổi, chọn mặc định item đầu tiên
    useEffect(() => {
        if (products.length > 0) {
            setRankProduct(products[0]);
        } else {
            setRankProduct(undefined);
        }
    }, [products]);

    const handleTabChange = (key: string) => {
        setActiveLabelTab(key as TypeTab);
        setRankProduct(undefined); // Reset preview khi đổi tab
    };

    // Hiển thị skeleton khi đang loading hoặc fetching
    const showSkeleton = isLoading || isFetching;

    return (
        <SectionContainer>
            {tabsCat?.data.title && (
                <SectionHeader sectionHeader={sectionHeader} ui={uiHeader} />
            )}

            <ContainerTabs
                labelTabs={labelTabs}
                activeTab={activeLableTab}
                onTabChange={handleTabChange}
                onActionClick={() => alert(`Load more ${activeLableTab}`)}
            >
                {
                    showSkeleton ?
                        <TabsRankSkeleton /> :
                        <div className="grid grid-cols-7 bg-white rounded-lg">
                            {/* Cột trái */}
                            <div className="col-span-3 border-r-[1px] border-[#adadad]">
                                {
                                    products.map((product) => (
                                        <LeftRankItem
                                            key={product.id}
                                            product={product}
                                            activeId={rankProductActive?.id}
                                            onHover={setRankProduct}
                                        />
                                    ))
                                }
                            </div>
                            {/* Cột phải */}
                            <div className="col-span-4 px-5">
                                <RightPreview product={rankProductActive} />
                            </div>
                        </div>
                }
            </ContainerTabs>

        </SectionContainer>
    );
};

export default CatSectionTabsRank;
