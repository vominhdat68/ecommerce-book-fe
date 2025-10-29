import React from "react";
import SectionHeader from "@/features/product-detail/components/banner_right/shipping/SectionHeader";
import PromotionTag, { type PromotionTagProps } from "@/features/product-detail/components/banner_right/shipping/PromotionTag";

type PromotionsSectionProps = {
    promotions?: PromotionTagProps[];
    onViewMore?: () => void;
};

const PromotionsSection: React.FC<PromotionsSectionProps> = ({
    promotions,
    onViewMore,
}) => {

    promotions = [
        {
            "id": 54033,
            "title": "Mã giảm 10k - toàn sàn",
            "type": "discount",
            "popup": {
                "programTitle": "Chương trình ưu đãi",
                "expireDate": "31/10/2025",
                "details": [
                    "Mã Giảm 10K - Toàn Sàn",
                    "Đơn hàng từ 130k - Không bao gồm giá trị của các sản phẩm sau: Manga, Ngoại Văn, Phiếu Quà Tặng, Sách Giáo Khoa, Máy Tính, Giấy Photo và Một Số Loại Giấy và Bảng Khác."
                ]
            }
        },
        {
            "id": 54033,
            "title": "Mã giảm 10k - toàn sàn",
            "type": "bank",
            "popup": {
                "programTitle": "Chương trình ưu đãi",
                "expireDate": "31/10/2025",
                "details": [
                    "Mã Giảm 10K - Toàn Sàn",
                    "Đơn hàng từ 130k - Không bao gồm giá trị của các sản phẩm sau: Manga, Ngoại Văn, Phiếu Quà Tặng, Sách Giáo Khoa, Máy Tính, Giấy Photo và Một Số Loại Giấy và Bảng Khác."
                ]
            }
        },
        {
            "id": 54033,
            "title": "Mã giảm 10k - toàn sàn",
            "type": "bank",
            "popup": {
                "programTitle": "Chương trình ưu đãi",
                "expireDate": "31/10/2025",
                "details": [
                    "Mã Giảm 10K - Toàn Sàn",
                    "Đơn hàng từ 130k - Không bao gồm giá trị của các sản phẩm sau: Manga, Ngoại Văn, Phiếu Quà Tặng, Sách Giáo Khoa, Máy Tính, Giấy Photo và Một Số Loại Giấy và Bảng Khác."
                ]
            }
        },
        {
            "id": 54033,
            "title": "Mã giảm 10k - toàn sàn",
            "type": "bank",
            "popup": {
                "programTitle": "Chương trình ưu đãi",
                "expireDate": "31/10/2025",
                "details": [
                    "Mã Giảm 10K - Toàn Sàn",
                    "Đơn hàng từ 130k - Không bao gồm giá trị của các sản phẩm sau: Manga, Ngoại Văn, Phiếu Quà Tặng, Sách Giáo Khoa, Máy Tính, Giấy Photo và Một Số Loại Giấy và Bảng Khác."
                ]
            }
        },
        {
            "id": 54033,
            "title": "Mã giảm 10k - toàn sàn",
            "type": "bank",
            "popup": {
                "programTitle": "Chương trình ưu đãi",
                "expireDate": "31/10/2025",
                "details": [
                    "Mã Giảm 10K - Toàn Sàn",
                    "Đơn hàng từ 130k - Không bao gồm giá trị của các sản phẩm sau: Manga, Ngoại Văn, Phiếu Quà Tặng, Sách Giáo Khoa, Máy Tính, Giấy Photo và Một Số Loại Giấy và Bảng Khác."
                ]
            }
        },
    ]

    return (
        <div className="mt-5">
            <SectionHeader title="Ưu đãi liên quan" actionLabel="Xem thêm" onActionClick={onViewMore} />
            <div className="flex flex-wrap gap-1 mt-4 mb-1">
                {promotions.slice(0, 4).map((promo) => (
                    <PromotionTag
                        id={promo.id}
                        title={promo.title}
                        type={promo.type}
                        popup={{
                            expireDate: promo.popup.expireDate,
                            details: promo.popup.details,
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default PromotionsSection;