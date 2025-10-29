import React, { lazy, Suspense } from "react";
import { useGetMenuQuery } from "@/features/home/service/homeService";

import BannerContainer from "@/features/home/layouts/BannerContainer";
import NavCatMenuItems from "@/features/home/layouts/NavSectionSlider/NavCatMenuItems";
import NavCatFlashSaletems from "@/features/home/layouts/NavSectionSlider/NavCatFlashSaletems";

const NavCatProductSectionSlider = lazy(() => import("@/features/home/layouts/NavCatProductSection"));
const NavCatEventSectionSlider = lazy(() => import("@/features/home/layouts/NavSectionSlider/NavCatEventSectionSlider"));
const CatSectionTabs = lazy(() => import("@/features/home/components/CatSectionTabs/CatSectionTabs"));
const NavCatPopSectionSlider = lazy(() => import("@/features/home/layouts/NavSectionSlider/NavCatPopSectionSlider"));
const CatSectionTabsRank = lazy(() => import("@/features/home/components/CatSectionTabsRank"));
const NavCatPubSectionSlider = lazy(() => import("@/features/home/layouts/NavSectionSlider/NavCatPubSectionSlider"));
const CatSuggestionsSlider = lazy(() => import("@/features/home/layouts/NavSectionSlider/CatSuggestionsSlider"));

import LazyLoadOnScroll from "@/shared/components/lazyload/LazyLoadOnScroll";
import {
  CategoryCardSkeleton,
  ProductsCardSkeleton,
  PublisherCardSkeleton,
  TabsRankSkeleton
} from "@/shared/components/skeleton-screen/HomeSkeleton";

const Home: React.FC = () => {
  const { data, isLoading: loadingMenu } = useGetMenuQuery();
  const categories = data?.data.categories || [];
  const featured_categories = data?.data.featured_categories || [];
  const tsdnb = data?.data.tsdnb || [];
  const bst_nb = data?.data.bst_nb || [];
  const ncc = data?.data.ncc || [];

  return (
    <div className="pt-1">

      <BannerContainer />
      <NavCatMenuItems items={categories} isLoading={loadingMenu} />
      <NavCatFlashSaletems type="flash-sale" />

      <LazyLoadOnScroll priority="high">
        <Suspense fallback={<CategoryCardSkeleton />}>
          <NavCatProductSectionSlider
            items={featured_categories}
            isLoading={loadingMenu}
          />
        </Suspense>
      </LazyLoadOnScroll>

      <LazyLoadOnScroll priority="high">
        <Suspense fallback={<ProductsCardSkeleton />}>
          <NavCatEventSectionSlider type="festival" />
        </Suspense>
      </LazyLoadOnScroll>

      <LazyLoadOnScroll priority="high">
        <Suspense fallback={<ProductsCardSkeleton />}>
          <CatSectionTabs
            typeProduct="trending"
            sliderConfig={{ displayItemsRow: 2 }}
          />
        </Suspense>
      </LazyLoadOnScroll>

      <LazyLoadOnScroll priority="high">
        <Suspense fallback={<ProductsCardSkeleton />}>
          <NavCatEventSectionSlider type="holiday" />
        </Suspense>
      </LazyLoadOnScroll>

      <LazyLoadOnScroll priority="high">
        <Suspense fallback={<CategoryCardSkeleton />}>
          <CatSectionTabs
            typeProduct="study"
          />
        </Suspense>
      </LazyLoadOnScroll>

      <LazyLoadOnScroll priority="medium">
        <Suspense fallback={<CategoryCardSkeleton />}>
          <NavCatPopSectionSlider
            title="Tủ sách nổi bật"
            items={tsdnb}
            isLoading={loadingMenu}
          />
        </Suspense>
      </LazyLoadOnScroll>

      <LazyLoadOnScroll priority="medium">
        <Suspense fallback={<TabsRankSkeleton />}>
          <CatSectionTabsRank typeProduct="rank" />
        </Suspense>
      </LazyLoadOnScroll>

      <LazyLoadOnScroll priority="medium">
        <Suspense fallback={<CategoryCardSkeleton />}>
          <NavCatPopSectionSlider
            title="Bộ sưu tập nổi bật"
            items={bst_nb}
            isLoading={loadingMenu}
          />
        </Suspense>
      </LazyLoadOnScroll>

      <LazyLoadOnScroll priority="high">
        <Suspense fallback={<ProductsCardSkeleton />}>
          <CatSectionTabs
            typeProduct="suppliers"
          />
        </Suspense>
      </LazyLoadOnScroll>

      <LazyLoadOnScroll priority="medium">
        <Suspense fallback={<ProductsCardSkeleton />}>
          <CatSectionTabs
            typeProduct="publisher"
          />
        </Suspense>
      </LazyLoadOnScroll>

      <LazyLoadOnScroll priority="low">
        <Suspense fallback={<PublisherCardSkeleton />}>
          <NavCatPubSectionSlider items={ncc} isLoading={loadingMenu} />
        </Suspense>
      </LazyLoadOnScroll>

      <LazyLoadOnScroll priority="low">
        <Suspense fallback={<ProductsCardSkeleton />}>
          <CatSuggestionsSlider />
        </Suspense>
      </LazyLoadOnScroll>

    </div>
  );
};

export default Home;
