
import SectionContainer from "@/shared/components/SectionContainer";
import sgv_menu_red from '@/assets/images/section/ico_menu_red.svg'

import SectionHeader, { type SectionHeaderProps, type UIHeaderProps } from "@/features/home/components/CatSectionTabs/SectionHeader";
import type { CategoryMenuItem } from "@/features/home/types/home.props";

import CategoryCard from "@/features/home/components/Card/CategoryCard";
import { CategoryCardSkeleton } from "@/shared/components/skeleton-screen/HomeSkeleton";

type SectionContentProps = {
    items: CategoryMenuItem[];
    isLoading?: boolean;
    maxVisibleItems?: number;
};
type SectionProps = SectionHeaderProps & SectionContentProps;

const NavCatProductSectionSlider: React.FC<SectionProps> = ({ items, isLoading }) => {
    const sectionHeader: SectionHeaderProps = {
        title: 'Danh mục sản phẩm',
        iconURL: sgv_menu_red,
    };
    const uiHeader: UIHeaderProps = {
        sizeIcon: "w-[34px] h-[34px]"
    };

    if (isLoading) return <CategoryCardSkeleton />;

    return (
        <SectionContainer>
            <SectionHeader sectionHeader={sectionHeader} ui={uiHeader} />
            <hr className="w-[97%] mx-auto text-[#ededed]" />
            <div className="py-3">
                <div className="flex items-center justify-center">
                    {items.slice(0, 10).map((item) => (<CategoryCard key={item.id} item={item} hover />))}
                </div>
            </div>
        </SectionContainer>
    );
};

export default NavCatProductSectionSlider;