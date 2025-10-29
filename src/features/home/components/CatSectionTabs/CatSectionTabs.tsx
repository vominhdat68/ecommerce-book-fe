import React, { useState, useEffect } from "react";
import ContainerTabs from "./ContainerTabs";
import SectionHeader, { type SectionHeaderProps } from "./SectionHeader";

import { useGetProductsQuery, useGetTabConfigQuery } from "@/features/home/service/homeService";
import ProductCard from "@/features/home/components/Card/ProductCard";
import type { Product, TabConfig, TypeProduct, TypeTab } from "@/features/home/types/home.props";
import { ProductsCardSkeleton } from "@/shared/components/skeleton-screen/HomeSkeleton";

import SectionContainer from "@/shared/components/SectionContainer";
import SliderWrapperItems, { type SliderConfigProps } from "@/shared/components/SliderWrapperItems";

type Props = {
  typeProduct: TypeProduct;
  sliderConfig?: SliderConfigProps;
};

const CatSectionTabs: React.FC<Props> = ({
  typeProduct,
  sliderConfig,
}) => {
  const { data: tabsCat } = useGetTabConfigQuery({ section: typeProduct });

  const sectionHeader: SectionHeaderProps = {
    title: tabsCat?.data.title,
    iconURL: tabsCat?.data.iconURL,
    padding: 'px-3 pt-3',
  };

  const labelTabs: TabConfig[] = tabsCat?.data.tabs || [];
  const [activeTab, setActiveTab] = useState<TypeTab>();

  // Set activeTab mặc định khi có dữ liệu tabs
  useEffect(() => {
    if (labelTabs.length > 0 && !activeTab) {
      setActiveTab(labelTabs[0].key as TypeTab);
    }
  }, [labelTabs, activeTab]);

  // Sử dụng isFetching thay vì isLoading
  const { data: products, isLoading, isFetching } = useGetProductsQuery(
    {
      type: typeProduct,
      tab: activeTab
    },
    {
      skip: !activeTab,
    }
  );

  const handleTabChange = (key: string) => {
    setActiveTab(key as TypeTab);
  };

  // Hiển thị skeleton khi đang loading hoặc fetching
  const showSkeleton = isLoading || isFetching;

  return (
    <SectionContainer>
      {tabsCat?.data.title && <SectionHeader sectionHeader={sectionHeader} />}

      <ContainerTabs
        labelTabs={labelTabs}
        activeTab={activeTab}
        onTabChange={handleTabChange}
        onActionClick={() => alert(`Load more ${activeTab}`)}
      >
        {
          showSkeleton ?
            <ProductsCardSkeleton /> :
            <SliderWrapperItems
              items={products?.data.products || []}
              renderItem={(item: Product) => (
                <ProductCard key={item.id} product={item} />
              )}
              configUI={sliderConfig}
            />
        }
      </ContainerTabs>
    </SectionContainer>
  );
};

export default CatSectionTabs;