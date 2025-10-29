import React from 'react';
import type { HotKeywordsProps } from '@/features/search/types/search.props';
import SearchSection from '@/features/search/components/SearchSection';

const HotKeywords: React.FC<HotKeywordsProps> = ({ items, onSelect }) => {

  return (

    <SearchSection
      title='Từ khóa hot'
      headerIconClass='ico_trending_gray !size-5'
      refreshIconClass='ico_refresh_gray'
      gridAxisContent='grid-cols-3'
      flexAxisItem='flex-row'
      sizeImage='size-12'
      items={items || []}
      onReload={() => console.log('reload categories')}
      onClickItem={onSelect}
    />

  );
};

export default HotKeywords;