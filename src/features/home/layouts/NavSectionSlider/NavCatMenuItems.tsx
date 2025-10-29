import { Link } from "react-router-dom";

import SectionContainer from "@/shared/components/SectionContainer";
import SliderWrapperItems from "@/shared/components/SliderWrapperItems";
import { MenuCategoriesSkeleton } from "@/shared/components/skeleton-screen/HomeSkeleton";

import type { CategoryMenuItem } from "@/features/home/types/home.props";
import type { SectionHeaderProps } from "@/features/home/components/CatSectionTabs/SectionHeader";

type SectionContentProps = {
    items: CategoryMenuItem[];
    isLoading?: boolean;
};
type SectionProps = SectionHeaderProps & SectionContentProps;

const NavCatMenuItems: React.FC<SectionProps> = ({ items, isLoading }) => {

    if (isLoading) return <MenuCategoriesSkeleton />;

    return (
        <SectionContainer>
            <div className="py-3">
                <SliderWrapperItems
                    items={items}
                    renderItem={
                        (item) =>
                            <>
                                <div className="flex flex-col items-center justify-center">
                                    <Link
                                        to={item.category_url}
                                        className="flex flex-col items-center justify-center bg-white"
                                    >
                                        <img
                                            src={item.image_src}
                                            alt={item.name}
                                            loading="lazy"
                                            className="object-contain w-[46px] h-[46px]"
                                        />

                                    </Link>
                                    <p
                                        className="mt-2 mx-2 text-[14px] text-center line-clamp-2 "
                                    >
                                        {item.name}
                                    </p>
                                </div>
                            </>
                    }
                    configUI={
                        {
                            slidesPerView: items.length
                        }
                    }
                />
            </div>
        </SectionContainer>
    );
};

export default NavCatMenuItems;