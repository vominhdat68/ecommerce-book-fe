import React from 'react';
import type { Banner } from '@/features/home/types/home.props';
import BannerItem from '@/features/home/components/Banner/BannerItem';

interface Props {
    banners: Banner[];
}


const PromotionalBanners: React.FC<Props> = ({ banners }) => {
    return (
        <div className="flex flex-row justify-between ">
            {banners.slice(0, 4).map((banner) => (
                <BannerItem
                    key={banner.id}
                    variant='promotional'
                    imageUrl={banner.image_src}
                    link={banner.redirect_url}
                    alt={banner.title}
                />
            ))}
        </div>
    );
};

export default PromotionalBanners;