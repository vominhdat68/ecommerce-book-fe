import React, { useState } from "react";

interface ShowMoreWrapperProps<T> {
    items: T[];
    threshold?: number; // số lượng item hiển thị trước khi "xem thêm"
    renderItem: (item: T, index: number) => React.ReactNode; // render từng item
}

const ShowMoreWrapper = <T,>({
    items,
    threshold = 5,
    renderItem,
}: ShowMoreWrapperProps<T>) => {
    const [showAll, setShowAll] = useState(false);

    // Chỉ hiển thị nếu vượt quá threshold
    const visibleItems = showAll ? items : items.slice(0, threshold);

    return (
        <>
            <div className='flex flex-col space-y-2 pl-3'>
                {visibleItems.map((item, index) => renderItem(item, index))}
            </div>

            {
                items.length > threshold && (
                    <div className="pl-3 mt-2">
                        <button
                            onClick={() => setShowAll(!showAll)}
                            className="text-sm font-medium cursor-pointer"
                        >
                            {showAll ? "Thu gọn ^" : "Xem thêm v"}
                        </button>
                    </div>
                )
            }
        </>
    );
};

export default ShowMoreWrapper;