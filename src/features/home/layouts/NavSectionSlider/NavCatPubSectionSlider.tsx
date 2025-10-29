import SectionContainer from "@/shared/components/SectionContainer";
import SliderWrapperItems from "@/shared/components/SliderWrapperItems";
import { PublisherCardSkeleton } from "@/shared/components/skeleton-screen/HomeSkeleton";

import type { CategoryMenuItem } from "@/features/home/types/home.props";
import BrandCard from "@/features/home/components/Card/BrandCard";

type Props = {
    items: CategoryMenuItem[];
    isLoading?: boolean;
}

const NavCatPubSectionSlider: React.FC<Props> = ({
    items,
    isLoading
}) => {

    if (isLoading) return <PublisherCardSkeleton />;

    return (
        <SectionContainer>
            <div className="py-3">
                <SliderWrapperItems
                    items={items}
                    renderItem={(item) => <BrandCard {...item} />}
                    configUI={{ slidesPerView: 9, enabelPadXSwiper: false }}
                />
            </div>
        </SectionContainer>
    );
};

export default NavCatPubSectionSlider;