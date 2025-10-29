import React from 'react';
import type { SuggestionListProps } from '@/features/search/types/search.props';

// Danh sách gợi ý khi gõ / Keyword suggestion list
const SuggestionList: React.FC<SuggestionListProps> = ({ items, onSelect }) => {

  return (
    <div className="">
      {/* EN: Header | VI: Tiêu đề */}
      <div className="flex justify-between items-center">
        <div className='flex items-center gap-1 '>
          <i className='ico_history_gray !size-[16px]' />
          <h3 className="text-sm font-semibold text-gray-800">Gợi ý</h3>
        </div>
      </div>

      <ul className="flex flex-wrap gap-2 my-3 pb-5">
        {items.slice(0,10).map((item) => (
          <li
            key={item}
            onClick={() => onSelect(item)}
            className="bg-gray-100 px-2 py-1 rounded-[5px] text-xs cursor-pointer hover:underline">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SuggestionList;
