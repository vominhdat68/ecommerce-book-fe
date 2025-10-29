import React from 'react';
import type { Banner as SideBannerType } from '@/features/home/types/home.props';
import BannerItem from '@/features/home/components/Banner/BannerItem';

interface SideBannerTypeProps {
  baners: SideBannerType[];
}

const SideBanner: React.FC<SideBannerTypeProps> = ({ baners }) => {
  if (!baners || baners.length === 0) return null;

  return (

    <div className="flex flex-col ml-2">
      {baners.slice(0, 2).map((banner, index) => (
        <div key={banner.id} className={`${index === 1 ? 'mt-2' : ''}`}>
              <BannerItem
                variant='side'
                key={banner.id}
                imageUrl={banner.image_src}
                link={banner.redirect_url}
                alt={banner.title}
              />
        </div>
      ))}
    </div>
  );
};

export default SideBanner;