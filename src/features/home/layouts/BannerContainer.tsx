import React from 'react';

import MainBanner from '@/features/home/components/Banner/MainBanner';
import SideBanner from '@/features/home/components/Banner/SideBanner';
import { useGetBannersQuery } from '@/features/home/service/homeService';
import PromotionalBanners from '@/features/home/components/Banner/PromotionalBanners';

import SectionContainer from '@/shared/components/SectionContainer';
import { BannerSkeleton } from '@/shared/components/skeleton-screen/HomeSkeleton';

const BannerContainer: React.FC = () => {
  const { data, isLoading, isFetching } = useGetBannersQuery();

  const showSkeleton = isLoading || isFetching;
  if (showSkeleton) return <BannerSkeleton />;

  return (
    <>
      <SectionContainer bgColor='none'>
        <div className='flex flex-col'>
          <div className="flex flex-row justify-center h-[320px]">
            <MainBanner banners={data?.mainBanners ?? []} />
            <SideBanner baners={data?.sideBanners ?? []} />
          </div>
        </div>
      </SectionContainer>
      <SectionContainer bgColor='none'>
        <PromotionalBanners banners={data?.promotionalBanners ?? []} />
      </SectionContainer>
    </>
  );
};

export default BannerContainer;