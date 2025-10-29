import React from 'react';
import type { HistoryListProps } from '@/features/search/types/search.props';

const SearchHistory: React.FC<HistoryListProps> = ({ items, onSelect, onRemoveItems, }) => {
  if (!items || items.length === 0) return null;
  return (
    <>
      <div className="">
        {/* EN: Header | VI: Tiêu đề */}
        <div className="flex justify-between items-center">
          <div className='flex items-center gap-1 '>
            <i className='ico_history_gray !size-[16px]' />
            <h3 className="text-sm font-semibold">Lịch sử tìm kiếm</h3>
          </div>
          <span
            onClick={() => onRemoveItems([])}
            className="text-xs text-red-500 cursor-pointer hover:underline"
          > Xóa tất cả
          </span>
        </div>

        {/* EN: List of history items | VI: Danh sách lịch sử */}
        <ul className="flex flex-wrap gap-2 mt-3 pb-3 ">
          {items.map((item) => (
            <div key={item} className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-md">
              <span onClick={() => onSelect(item)} className="text-xs cursor-pointer hover:underline">
                {item}
              </span>
              <i onClick={() => onRemoveItems(item)} className="!size-[16px] ico_close_gray cursor-pointer" />
            </div>
          ))}
        </ul>

      </div>
    </>
  );
};

export default SearchHistory;