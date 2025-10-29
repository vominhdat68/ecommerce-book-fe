import React from 'react';
import type { FeaturedCategoriesProps } from '@/features/search/types/search.props';
import SearchSection from '@/features/search/components/SearchSection';

// Danh mục nổi bật / Featured categories list
const FeaturedCategories: React.FC<FeaturedCategoriesProps> = ({ items, onSelect }) => {

  return (

    <SearchSection
      title='Danh mục nổi bật'
      headerIconClass='icon_menu !size-6'
      refreshIconClass='ico_refresh_gray'
      gridAxisContent='grid-cols-4'
      flexAxisItem='flex-col'
      sizeImage='h-20'
      items={items || []}
      onReload={() => console.log('reload categories')}
      onClickItem={onSelect}
    />

  );
};

export default FeaturedCategories;