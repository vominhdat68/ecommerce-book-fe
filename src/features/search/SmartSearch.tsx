import { useCallback, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import LoaderBars from "@/shared/components/skeleton-screen/LoadingDot";
import { useDebounce } from '@/features/search/hooks/useDebounce';

import {
  SearchInput,
  SearchHistory,
  HotKeywords,
  FeaturedCategories,
  SuggestionList,
  ProductList,

} from './index';
import {
  useInitDropdownQuery,
  useSuggestionsQuery,
  useSaveHistoryMutation,
  useDeleteHistoryMutation,
} from './services/searchService';

// logic đóng panel search 
// click ngoài input search thì đóng panel search
// dựa trên onBlur của inputSearch khi click ra thì đóng panelSearch
// và sử dụng e.preventDefault();(chặn blur ) cho panelSearach ko đóng khi click vào nó

const SmartSearch: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const debouncedTerm = useDebounce(searchValue);
  const navigateClientSide = useNavigate();
  // chỉ gọi init dropdown khi focus
  const {
    data: initData,
    isLoading: isInitLoading,
  } = useInitDropdownQuery(undefined, { skip: !isOpen });

  // gọi gợi ý khi có term
  const {
    data: suggestionData,
    isFetching: isSuggestingLoading,
  } = useSuggestionsQuery(debouncedTerm, { skip: !debouncedTerm });

  // gọi khi đóng form tìm kiếm
  const [addHistory] = useSaveHistoryMutation();
  const [deleteHistory] = useDeleteHistoryMutation();

  const handleSelectKeyword = useCallback((keyword: string) => {
    addHistory(keyword);
    navigateClientSide(`/search?q=${encodeURIComponent(keyword)}`);
    setIsOpen(false) // tat panel search 
  }, [addHistory]);

  const handleFocus = useCallback(() => {
    setIsOpen(true);
  }, []);

  const hasSuggestions = useMemo(
    () => !!debouncedTerm && !!suggestionData,
    [debouncedTerm, suggestionData]
  );

  return (
    <div className="relative w-[570px]">
      <SearchInput
        value={searchValue}
        onChange={setSearchValue}
        onSubmit={handleSelectKeyword}
        onFocus={handleFocus} // trigger init
        onBlur={() => setIsOpen(false)}
      />

      {isOpen && (
        <>
          {/* <div className="absolute -left-full -right-full h-screen bottom- bg-black/50"/> */}
          <div className="absolute left-0 right-0 bg-white shadow-lg rounded-md p-4"
            onMouseDown={(e) => {
              e.preventDefault(); // chặn blur 
            }}
          >
            {hasSuggestions ? (
              isSuggestingLoading ? (
                <LoaderBars size={20} count={3} />
              ) : (
                <>
                  <SuggestionList
                    items={suggestionData?.keywords ?? []}
                    onSelect={handleSelectKeyword}
                  />
                  <ProductList
                    items={suggestionData?.products ?? []}
                    onSelect={handleSelectKeyword}
                  />
                </>
              )
            ) : isInitLoading ? (
              <LoaderBars size={20} count={3} />
            ) : (
              <>
                <SearchHistory
                  items={initData?.history ?? []}
                  onRemoveItems={deleteHistory}
                  onSelect={handleSelectKeyword}
                />
                <HotKeywords
                  items={initData?.trending ?? []}
                  onSelect={handleSelectKeyword}
                />
                <FeaturedCategories
                  items={initData?.featuredCategories ?? []}
                  onSelect={handleSelectKeyword}
                />
              </>
            )}
          </div>
        </>
      )}
    </div>
  );

};

export default SmartSearch;
