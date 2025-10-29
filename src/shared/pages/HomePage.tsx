
import React from "react";
import { useGetMenuQuery } from "@/features/home/service/homeService";

import BannerContainer from "@/features/home/layouts/BannerContainer";
import NavCatMenuItems from "@/features/home/layouts/NavSectionSlider/NavCatMenuItems";
import NavCatFlashSaletems from "@/features/home/layouts/NavSectionSlider/NavCatFlashSaletems";

import NavCatProductSectionSlider from "@/features/home/layouts/NavCatProductSection";
import NavCatEventSectionSlider from "@/features/home/layouts/NavSectionSlider/NavCatEventSectionSlider";
import CatSectionTabs from "@/features/home/components/CatSectionTabs/CatSectionTabs";
import NavCatPopSectionSlider from "@/features/home/layouts/NavSectionSlider/NavCatPopSectionSlider";
import CatSectionTabsRank from "@/features/home/components/CatSectionTabsRank";


const Home: React.FC = () => {
  const { data, isLoading: loadingMenu } = useGetMenuQuery();

  const categories = data?.data.categories || [];
  const featured_categories = data?.data.featured_categories || [];
  const tsdnb = data?.data.tsdnb || [];
  const bst_nb = data?.data.bst_nb || [];

  return (
    <div className="pt-1">

      <BannerContainer />
      <NavCatMenuItems items={categories} isLoading={loadingMenu} />
      <NavCatFlashSaletems type="flash-sale" />

      <NavCatProductSectionSlider items={featured_categories} isLoading={loadingMenu} />
      <NavCatEventSectionSlider type="festival" />
      <NavCatEventSectionSlider type="holiday" />

      <CatSectionTabs typeProduct="trending" sliderConfig={{ displayItemsRow: 2 }} />
      <CatSectionTabs typeProduct="study" />
      <CatSectionTabs typeProduct="suppliers" />
      <CatSectionTabs typeProduct="publisher" />

      <NavCatPopSectionSlider title="Tủ sách nổi bật" items={tsdnb} isLoading={loadingMenu} />
      <NavCatPopSectionSlider title="Bộ sưu tập nổi bật" items={bst_nb} isLoading={loadingMenu} />

      <CatSectionTabsRank typeProduct="rank" />
    </div>
  );
};

export default Home;
