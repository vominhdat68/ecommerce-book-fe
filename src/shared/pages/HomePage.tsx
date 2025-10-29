
import React from "react";
import { useGetMenuQuery } from "@/features/home/service/homeService";

import BannerContainer from "@/features/home/layouts/BannerContainer";
import NavCatMenuItems from "@/features/home/layouts/NavSectionSlider/NavCatMenuItems";
import NavCatFlashSaletems from "@/features/home/layouts/NavSectionSlider/NavCatFlashSaletems";

import NavCatProductSectionSlider from "@/features/home/layouts/NavCatProductSection";
import NavCatEventSectionSlider from "@/features/home/layouts/NavSectionSlider/NavCatEventSectionSlider";


const Home: React.FC = () => {
  const { data, isLoading: loadingMenu } = useGetMenuQuery();

  const categories = data?.data.categories || [];
  const featured_categories = data?.data.featured_categories || [];

  return (
    <div className="pt-1">

      <BannerContainer />
      <NavCatMenuItems items={categories} isLoading={loadingMenu} />
      <NavCatFlashSaletems type="flash-sale" />

      <NavCatProductSectionSlider items={featured_categories} isLoading={loadingMenu} />
      <NavCatEventSectionSlider type="festival" />
      <NavCatEventSectionSlider type="holiday" />

    </div>
  );
};

export default Home;
