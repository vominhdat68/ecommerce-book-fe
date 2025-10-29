import SectionContainer from "@/shared/components/SectionContainer";
import SliderWrapperItems, { type SliderConfigProps } from "@/shared/components/SliderWrapperItems";
import { ActionButton } from "@/shared/components/Button";
import { EventSkeleton } from "@/shared/components/skeleton-screen/HomeSkeleton";

import ProductCard from "@/features/home/components/Card/ProductCard";
import type { EventProducts, Product, TypeEvent } from "@/features/home/types/home.props";
import { useGetEventsQuery } from "@/features/home/service/homeService";


type Props = {
    type: TypeEvent;
    sliderConfig?: SliderConfigProps;
};

const NavCatEventSectionSlider: React.FC<Props> = ({ type, sliderConfig
}) => {
    const { data, isLoading } = useGetEventsQuery({ type: type });
    const event: EventProducts = data?.data?.event || {} as EventProducts;
    const products: Product[] = data?.data?.products || [];

    if (isLoading) return <EventSkeleton />

    return (
        <SectionContainer>
            <div className="bg-no-repeat bg-cover rounded-lg" style={
                event
                    ? { backgroundImage: `url(${event.bg_image})` }
                    : { backgroundColor: "#FFF0F6" }
            }>
                <div className="h-[100px] w-full" />
                <SliderWrapperItems
                    items={products}
                    renderItem={
                        (item) =>
                            <ProductCard key={item.id} product={item} />
                    }
                    configUI={sliderConfig}
                />
                <div className="text-center mt-5 pb-5">
                    <ActionButton
                        variant="navigation"
                        label="Xem thêm"
                        onClick={() => alert('Xem them')}
                    />
                </div>
            </div>
        </SectionContainer>
    );
};

export default NavCatEventSectionSlider;