import React from 'react';
import type { SearchInputProps } from '@/features/search/types/search.props';

const SearchInput: React.FC<SearchInputProps> = ({ value, onChange, onSubmit, onFocus, onBlur }) => {

  return (
    <div className="flex items-center text-sm text-[#545759] border border-[#CDCFD0] rounded-[8px] focus:outline-none pr-1 pl-4 min-w-[170px] my-2">
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && onSubmit(value)}
        onFocus={onFocus}
        onBlur={onBlur}
        placeholder="Tìm kiếm sản phẩm..."
        className="roboto-regular w-full h-[37px] overflow-hidden truncate focus:outline-none"
      />

      <button
        onClick={() => onSubmit(value)}
        className="h-[30px] px-[24px]  bg-[#C92127] rounded-[8px]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          className="w-5 h-5"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="10" cy="10" r="7" />
          <line x1="21" y1="21" x2="15" y2="15" />
        </svg>
      </button>
    </div>
  );
};

export default SearchInput;