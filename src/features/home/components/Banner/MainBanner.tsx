import React, { useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper as SwiperType } from 'swiper/types';
import 'swiper/swiper-bundle.css';

import type { Banner } from '@/features/home/types/home.props';
import BannerItem from '@/features/home/components/Banner/BannerItem';

interface MainBannerProps {
  banners: Banner[];
}

const MainBanner: React.FC<MainBannerProps> = ({ banners }) => {
  const swiperRef = useRef<SwiperType | null>(null);

  const uniqueId = "main-banner"; //  prefix riêng cho Swiper này

  return (
    <div className="relative">
      <div className="relative w-[812px] h-auto">
        <Swiper
          modules={[Autoplay, Navigation, Pagination, A11y]}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          speed={600}
          navigation={{
            nextEl: `.${uniqueId}-next`,
            prevEl: `.${uniqueId}-prev`,
          }}
          pagination={{
            clickable: true,
            el: `.${uniqueId}-pagination`,
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
          }}
          a11y={{
            prevSlideMessage: 'Previous slide',
            nextSlideMessage: 'Next slide',
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="overflow-hidden h-80"
        >
          {banners.map((banner) => (
            <SwiperSlide key={banner.id}>
              <BannerItem
                variant="main"
                key={banner.id}
                imageUrl={banner.image_src}
                link={banner.redirect_url}
                alt={banner.title}
              />
            </SwiperSlide>
          ))}

          {/* Pagination Container */}
          <div className={`${uniqueId}-pagination swiper-pagination !bottom-4`}></div>
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div
          className={`${uniqueId}-prev bg-white rounded-full cursor-pointer scale-65 
          !-left-5 absolute top-1/2 -translate-y-1/2 transition-all duration-200 hover:scale-90 shadow-md z-10`}
          role="button"
          aria-label="Previous slide"
        >
          <i className="block ico_arrow_gray" />
        </div>

        <div
          className={`${uniqueId}-next bg-white rounded-full cursor-pointer scale-65 
          !-right-5 absolute top-1/2 -translate-y-1/2 transition-all duration-200 hover:scale-90 shadow-md z-10`}
          role="button"
          aria-label="Next slide"
        >
          <i className="block ico_arrow_gray right" />
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
