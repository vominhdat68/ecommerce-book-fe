
import svg_stn from '@/assets/images/category-menu/ico_sachtrongnuoc.svg'

import SectionContainer from "@/shared/components/SectionContainer";
import SliderWrapperItems from "@/shared/components/SliderWrapperItems";
import { CategoryCardSkeleton } from "@/shared/components/skeleton-screen/HomeSkeleton";

import type { CategoryMenuItem } from "@/features/home/types/home.props";
import SectionHeader, { type SectionHeaderProps, type UIHeaderProps } from "@/features/home/components/CatSectionTabs/SectionHeader";
import CategoryCard from "@/features/home/components/Card/CategoryCard";

type SectionContentProps = {
    items: CategoryMenuItem[];
    isLoading?: boolean;
    maxVisibleItems?: number;
};
type SectionProps = SectionHeaderProps & SectionContentProps;
const NavCatPopSectionSlider: React.FC<SectionProps> = ({
    title,
    items,
    isLoading,
}) => {
    const sectionHeader: SectionHeaderProps = {
        title: title,
        iconURL: svg_stn,
        uppercase: true,
        bgColor: "#FCDDEF"
    };
    const uiHeader: UIHeaderProps = {
        sizeIcon: "w-[34px] h-[34px]"
    };

    if (isLoading) return <CategoryCardSkeleton />;

    return (
        <SectionContainer>
            <SectionHeader sectionHeader={sectionHeader} ui={uiHeader} />
            <div className="py-3">
                <SliderWrapperItems
                    items={items}
                    renderItem={(item) => <CategoryCard key={item.id} item={item} />}
                    configUI={{
                        slidesPerView: 8,
                        spaceBetweenItems: 18,
                        freeMode: true,
                        enabelPadXSwiper: false
                    }}
                />
            </div>
        </SectionContainer>
    );
};

export default NavCatPopSectionSlider;