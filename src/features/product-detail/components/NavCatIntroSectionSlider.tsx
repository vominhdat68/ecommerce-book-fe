import React from "react";

import SectionContainer from "@/shared/components/SectionContainer";
import SliderWrapperItems from "@/shared/components/SliderWrapperItems";
import { ProductsCardSkeleton } from "@/shared/components/skeleton-screen/HomeSkeleton";

import ProductCard from "@/features/home/components/Card/ProductCard";
import SectionHeader, { type SectionHeaderProps } from "@/features/home/components/CatSectionTabs/SectionHeader";
import type { Product, TypeProduct } from "@/features/home/types/home.props";
import { useGetProductsQuery } from "@/features/home/service/homeService";

type Props = {
  typeProduct: TypeProduct;
};

const NavCatIntroSectionSlider: React.FC<Props> = ({ typeProduct }) => {
  const { data, isLoading } = useGetProductsQuery({ type: typeProduct });

  // Đảm bảo an toàn khi destructure dữ liệu từ API
  const tab_name = data?.data?.category_name || "";
  const products = data?.data?.products || [];

  const sectionHeader: SectionHeaderProps = {
    title: tab_name,
  };

  return (
    <SectionContainer>
      <SectionHeader sectionHeader={sectionHeader} />
      <div className="py-3">
        {isLoading ? (
          <ProductsCardSkeleton />
        ) : (
          <SliderWrapperItems
            items={products}
            renderItem={(item: Product) => (
              <ProductCard key={item.id} product={item} />
            )}
          />
        )}
      </div>
    </SectionContainer>
  );
};

export default NavCatIntroSectionSlider;
