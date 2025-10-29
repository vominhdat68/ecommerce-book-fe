
import React from "react";

import BannerContainer from "@/features/home/layouts/BannerContainer";
import NavCatMenuItems from "@/features/home/layouts/NavSectionSlider/NavCatMenuItems";
import NavCatFlashSaletems from "@/features/home/layouts/NavSectionSlider/NavCatFlashSaletems";

import { useGetMenuQuery } from "@/features/home/service/homeService";


const Home: React.FC = () => {
  const { data, isLoading: loadingMenu } = useGetMenuQuery();

  const categories = data?.data.categories || [];


  return (
    <div className="pt-1">

      <BannerContainer />
      <NavCatMenuItems items={categories} isLoading={loadingMenu} />
      <NavCatFlashSaletems type="flash-sale" />

    </div>
  );
};

export default Home;
