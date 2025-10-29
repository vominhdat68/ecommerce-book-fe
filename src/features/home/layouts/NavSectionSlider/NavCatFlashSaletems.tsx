import { useMemo } from "react";

import SectionContainer from "@/shared/components/SectionContainer";
import SliderWrapperItems from "@/shared/components/SliderWrapperItems";
import { EventSkeleton } from "@/shared/components/skeleton-screen/HomeSkeleton";

import ProductCard from "@/features/home/components/Card/ProductCard";
import { useGetEventsQuery, useGetProgressBarQuery } from "@/features/home/service/homeService";
import { mapFlashSaleList } from "@/features/home/map_data/product.map";
import FlashsaleCountdown from "@/features/home/components/FlashsaleCountdown";
import type { EventProducts, Product, ProgressBarItem, TypeEvent } from "@/features/home/types/home.props";

import bg_img from '/cfhs/image/bg_image/flash_sale_background_image.jpg'
import bg_flashsale from '@/assets/images/flashsale/label-flashsale.svg'

interface Props {
    type: TypeEvent;
}

const NavCatFlashSaletems: React.FC<Props> = ({
    type
}) => {
    const { data, isLoading } = useGetEventsQuery({ type: type });
    const event: EventProducts = data?.data?.event || {} as EventProducts;
    const products: Product[] = mapFlashSaleList(data?.data?.products || []);
    const { data: progress } = useGetProgressBarQuery(undefined, {
        // pollingInterval: 10000, // refresh mỗi 10 giây
    });
    const progressList: ProgressBarItem[] = progress?.data || [];
    // 🔹 Tối ưu: convert list → map để tra cứu nhanh (O(1))

    const progressMap = useMemo(() => {
        return Object.fromEntries(
            progressList.map((p) => [p.product_id, p])
        );
    }, [progressList]);

    if (isLoading) return <EventSkeleton />;

    return (
        <div className="bg-no-repeat bg-cover py-1 "
            style={{ backgroundImage: `url(${bg_img})` }}>
            <SectionContainer bgColor="none">
                {/* header  */}
                <div className="
                flex
                bg-white p-5 rounded-lg">
                    <img src={bg_flashsale} loading="lazy" />

                    {/* count downt */}
                    <div className="ml-5">
                        {
                            !isLoading && <FlashsaleCountdown flashsale={event} />

                        }
                    </div>
                </div>
                <SliderWrapperItems
                    items={products}
                    renderItem={
                        (item) =>
                            <ProductCard key={item.id} product={item} progressBar={progressMap[item.product_id]} />
                    }
                    configUI={{
                        enabelPadXSwiper: false,
                    }}
                />
            </SectionContainer>
        </div>
    );
};

export default NavCatFlashSaletems;