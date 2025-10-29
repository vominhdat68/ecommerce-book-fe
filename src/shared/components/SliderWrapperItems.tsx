import React, { useRef, useState, useId } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Grid } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";
import "swiper/swiper.css";

type Props<T> = {
    items: T[];
    renderItem: (item: T, index: number) => React.ReactNode;
    configUI?: SliderConfigProps;
};

const SliderWrapperItems = <T,>({
    items,
    renderItem,
    configUI,
}: Props<T>) => {
    const swiperRef = useRef<SwiperType | null>(null);
    const uniqueId = useId();

    const {
        slidesPerView = 5,
        spaceBetweenItems = 0, //8
        displayItemsRow,
        navigation = true,
        freeMode = false,
        enabelPadXSwiper = true,
    } = configUI || {};

    const [atBeginning, setAtBeginning] = useState(true);
    const [atEnd, setAtEnd] = useState(false);

    const showNavigation = items.length > slidesPerView;

    return (
        <div className={`relative ${enabelPadXSwiper && 'px-3'}`}>
            <Swiper
                slidesPerView={slidesPerView || "auto"}
                slidesPerGroup={slidesPerView} //-> thiet lap index tiep theo khi truot,...
                spaceBetween={spaceBetweenItems}
                modules={[Navigation, FreeMode, ...(displayItemsRow ? [Grid] : [])]}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                onSlideChange={(swiper) => {
                    setAtBeginning(swiper.isBeginning);
                    setAtEnd(swiper.isEnd);
                }}
                grid={displayItemsRow ? {
                    rows: displayItemsRow,
                    fill: 'row'
                } : undefined}
                speed={400}
                navigation={navigation && {
                    nextEl: `.${uniqueId}-next`,
                    prevEl: `.${uniqueId}-prev`,
                }}

                watchOverflow={false} // ← QUAN TRỌNG: tắt watchOverflow
                noSwiping={false} // ← Đảm bảo cho phép kéo khi slidesPerView = items

                freeMode={freeMode && {
                    momentum: true,
                    momentumBounce: true,
                    momentumBounceRatio: 0.6,
                    momentumRatio: 0.95,
                    momentumVelocityRatio: 0.6,
                    sticky: false,
                }}
            >
                {items.map((item, idx) => (
                    <SwiperSlide key={idx}>{renderItem(item, idx)}</SwiperSlide>
                ))}
            </Swiper>

            {showNavigation && (
                <>
                    <div className={`${uniqueId}-navigation group-btn`}></div>
                    <div
                        className={`navigation-prev ${uniqueId}-prev
              w-10 h-10 flex items-center justify-center
              bg-white rounded-full cursor-pointer shadow-md z-10
              absolute top-1/2 -translate-y-1/2 -left-5
              transition-all duration-200 hover:scale-110 hover:bg-gray-50
              ${atBeginning && 'hidden'}
            `}
                        role="button"
                        aria-label="Previous slide"
                    >
                        <i className="ico_arrow_gray" />
                    </div>

                    <div
                        className={`navigation-next ${uniqueId}-next
              w-10 h-10 flex items-center justify-center
              bg-white rounded-full cursor-pointer shadow-md z-10
              absolute top-1/2 -translate-y-1/2 -right-5
              transition-all duration-200 hover:scale-110 hover:bg-gray-50
              ${atEnd && 'hidden'}
            `}
                        role="button"
                        aria-label="Next slide"
                    >
                        <i className="ico_arrow_gray right" />
                    </div>
                </>
            )}
        </div>
    );
};

export default SliderWrapperItems;

export type SliderConfigProps = {
  enabelPadXSwiper?: boolean; // padding cho swiper (px-3 = 12px mỗi bên
  spaceBetweenItems?: number; // khoảng cách giữa các items
  slidesPerView?: number; // số lượng items hiển thị trên container viewport
  displayItemsRow?: number; // bat che do hien rowxcol

  navigation?: boolean;
  freeMode?: boolean;
};
