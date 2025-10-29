import React from 'react'; 
import type { ProductListProps } from '@/features/search/types/search.props';
import SearchSection from '@/features/search/components/SearchSection';

// Danh sách sản phẩm gợi ý / Suggested products list
const ProductList: React.FC<ProductListProps> = ({ items, onSelect }) => {

  return (

    <SearchSection
      title='Sản phẩm'
      headerIconClass='ico_trending_gray !size-6'
      gridAxisContent='grid-cols-3'
      flexAxisItem='flex-row'
      sizeImage='size-12'
      items={items || []}
      onReload={() => console.log('reload categories')}
      onClickItem={onSelect}
    />

  );
};

export default ProductList;
