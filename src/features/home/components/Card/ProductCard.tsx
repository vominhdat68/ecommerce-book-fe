import React from 'react';
import { Link } from 'react-router-dom';

import ico_trending from '@/assets/images/section/ico_trending.svg';
import ico_hot from '@/assets/images/section/ico_best_seller.svg';
import ico_new from '@/assets/images/section/ico_new_arrival.svg';

import type { Product, ProgressBarItem } from '@/features/home/types/home.props';

import { formatCurrencyVND, formatNumberCompact } from '@/shared/utils/helper';
import { buildProductDetailLink } from '@/shared/routes/navigation';

import Rating from '@/shared/components/Rating';
import ProgressBar from '@/features/home/components/Card/ProgressBar';

type CardType = 'personalization' | 'default';

/**
 * CardT component - hiển thị thông tin chi tiết sản phẩm dạng thẻ (card).
 *
 * @component
 * @example
 * <CardProduct
 *   product={productData}
 *   progressBar={progressBarData}
 *   cardType="personalization"
 * />
 * @param {ProductCardProps} props - Props của component.
 * @returns {JSX.Element} - Phần tử React hiển thị thẻ sản phẩm.
 */
const ProductCard: React.FC<ProductCardProps> = ({
    cardType = 'default',
    product,
    progressBar,
}) => {
    if (!product) return null;

    const showDivider = !progressBar && product.sold_qty >= 1;

    const iconLabelBadge: Record<string, string> = {
        trending: ico_trending,
        new_arrival: ico_new,
        best_seller: ico_hot,
    };

    const FONT_SIZES: Record<CardType, ProductConfigUIProps> = {
        personalization: {
            sizeName: 'text-[15px]',
            sizeFinal_price: 'text-base',
            sizeDiscount_percent: 'text-sm',
            sizeOriginal_price: 'text-[15px]',
            sizeSold_qty: 'text-[13px]',
            opacityEpisode: 'opacity-80',
        },
        default: {
            sizeName: 'text-sm',
            sizeFinal_price: 'text-base',
            sizeDiscount_percent: 'text-[13px]',
            sizeOriginal_price: 'text-sm',
            sizeSold_qty: 'text-xs',
        },
    };

    const renderFrameImages = () => {
        if (!product.frame_images?.length) return null;

        return product.frame_images.map((frame) => (
            <img
                key={frame.key}
                src={frame.url}
                alt={frame.value || `Frame ${frame.key}`}
                loading="lazy"
                className="absolute top-0 object-cover max-h-[190px] rounded-lg cursor-pointer"
            />
        ));
    };

    const renderProductBadge = () => {
        if (!product.label || !iconLabelBadge[product.label]) return null;

        return (
            <img
                className='max-h-[17px] mr-1 inline'
                src={iconLabelBadge[product.label]}
                alt={`${product.label} badge`}
            />
        );
    };

    const renderPriceSection = () => {
        if (product.discount_percent) {
            return (
                <>
                    <div className='flex items-center'>
                        <span className={`${FONT_SIZES[cardType].sizeFinal_price} text-[#C92127] font-bold mr-2`}>
                            {formatCurrencyVND(product.final_price)} đ
                        </span>
                        <span className={`${FONT_SIZES[cardType].sizeDiscount_percent} text-white font-semibold bg-[#C92127] p-1 rounded-sm`}>
                            -{product.discount_percent}%
                        </span>
                    </div>
                    <span className={`${FONT_SIZES[cardType].sizeOriginal_price} text-[#888888] line-through`}>
                        {formatCurrencyVND(product.original_price)}đ
                    </span>
                </>
            );
        }

        return (
            <span className={`text-base text-[#C92127] font-bold`}>
                {formatCurrencyVND(product.original_price)} đ
            </span>
        );
    };

    const renderRatingSection = () => {
        if (!product.rating) return null;

        return (
            <div className='flex items-center'>
                <Rating
                    rating={{
                        rating_summary: product.rating.rating_summary,
                        reviews_count: product.rating.reviews_count
                    }}
                    configUI={{ showDivider }}
                />
            </div>
        );
    };

    const renderSoldQuantity = () => {
        if (!showDivider) return null;

        return (
            <span className={`${FONT_SIZES[cardType].sizeSold_qty}`}>
                Đã bán {formatNumberCompact(product.sold_qty)}
            </span>
        );
    };

    const { path, state } = buildProductDetailLink(product.product_url, Number(product.product_id));

    return (
        <div className="card p-2 m-1 mt-2 bg-white rounded-lg overflow-hidden
        hover:drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] transition
        hover:-translate-y-1 transition-all duration-300 ease-in-out 
        hover:scale-101">

            {/* group ảnh sản phẩm */}
            <div className='flex justify-center'>
                <Link to={path} state={state}>
                    <div className="relative">
                        <img
                            src={product.image_src}
                            alt={product.image_label}
                            loading="lazy"
                            className="object-cover max-h-[190px] rounded-lg
                        hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer"
                        />

                        {renderFrameImages()}

                        {product.soon_release === 1 && (
                            <div className='absolute top-0 left-0 z-51'>
                                <span
                                    className='block max-w-[86px] bg-[#C9F0FF] rounded px-2 py-1 
                                    text-center text-[10px] text-[#2489F4] font-bold
                                    overflow-hidden text-ellipsis whitespace-nowrap'
                                    title="Sắp có hàng"
                                >
                                    Sắp có hàng
                                </span>
                            </div>
                        )}

                        {product.episode && (
                            <div className="absolute bottom-0 right-0 z-49">
                                <span
                                    className={`block w-[66px] text-center text-xs text-white bg-[#0D0E0F] rounded px-2 py-1 font-bold 
                                    overflow-hidden text-ellipsis whitespace-nowrap 
                                    ${FONT_SIZES[cardType].opacityEpisode || ''}`}
                                    title={product.episode}
                                >
                                    {product.episode}
                                </span>
                            </div>
                        )}
                    </div>
                </Link>
            </div>

            {/* group tên sản phẩm*/}
            <div className='mt-4'>
                <Link to={path} state={state} className='line-clamp-2 h-[50px]'>
                    {renderProductBadge()}
                    <span
                        className={`${FONT_SIZES[cardType].sizeName} text-[#333333 leading-relaxed`}
                        title={product.product_name}
                    >
                        {product.product_name}
                    </span>
                </Link>
            </div>

            {/* group giá sản phẩm */}
            <div className='mt-1 h-[45px]'>
                {renderPriceSection()}
            </div>

            {/* group nhóm sao,số lượng bán,processbar số lượng bán */}
            <div className='mt-1'>
                <div className='flex items-center text-xs text-[#888888] h-[20px]'>
                    {renderRatingSection()}
                    {renderSoldQuantity()}
                </div>

                {/* processbar */}
                {progressBar && (
                    <ProgressBar
                        product_id={progressBar.product_id}
                        qty_sold={progressBar.qty_sold}
                        percent={progressBar.percent}
                    />
                )}
            </div>
        </div>
    );
};

export default ProductCard;

export interface ProductCardProps {
    cardType?: CardType;
    product: Product;
    progressBar?: ProgressBarItem;
}
export interface ProductConfigUIProps {
    sizeName: string;
    sizeOriginal_price: string;
    sizeDiscount_percent: string;
    sizeFinal_price: string;
    sizeSold_qty: string;

    opacityEpisode?: string;
}