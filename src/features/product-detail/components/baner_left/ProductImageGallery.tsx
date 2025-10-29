import React, { useRef } from "react";
import LightGallery from "lightgallery/react";

// CSS + Plugins
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-fullscreen.css";
import lgZoom from "lightgallery/plugins/zoom";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgFullscreen from "lightgallery/plugins/fullscreen";

import GalleryDisplay from "./GalleryDisplay";

type ProductImageGalleryProps = {
    images: string[];
    maxThumbnails?: number;
};

const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({
    images,
    maxThumbnails = 4,
}) => {

    const lightGalleryRef = useRef<any>(null);

    const handleImageClick = (index: number) => {
        if (lightGalleryRef.current) {
            lightGalleryRef.current.instance.openGallery(index);
        }
    };
    return (
         <div className="flex flex-col items-center">
            <GalleryDisplay
                images={images}
                maxThumbnails={maxThumbnails}
                onImageClick={handleImageClick}
            />

            {/* Hidden LightGallery instance */}
            <div className="hidden">
                <LightGallery
                    onInit={(ref) => (lightGalleryRef.current = ref)}
                    speed={500}
                    plugins={[lgZoom, lgThumbnail, lgFullscreen]}
                    dynamic
                    hideBarsDelay={300}
                    dynamicEl={images.map((src) => ({
                        src,
                        thumb: src,
                    }))}
                />
            </div>
        </div>
    );
};

export default ProductImageGallery;