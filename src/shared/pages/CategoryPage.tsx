import React, { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

import SectionContainer from "@/shared/components/SectionContainer";
import { CategorySkeleton } from "@/shared/components/skeleton-screen/CategorySkeleton";
import { OverlayLoader } from "@/shared/components/skeleton-screen/OverlayLoader ";
import NotFoundPage from "@/shared/pages/NotFoundPage";

import { useGetProductsCategoryQuery } from "@/features/categories/services/categoryService";
import type { FilterState } from "@/features/categories/types/category.type";
import SidebarFilter from "@/features/categories/components/SidebarFilter";
import CategoryBanner from "@/features/categories/components/CategoryBanner";
import SortHeader from "@/features/categories/components/SortHeader";
import ProductList from "@/features/categories/components/ProductList";

const DomesticBooksPage: React.FC = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const { category_id } = (location.state || {}) as { category_id?: string };

  // Build filters from URL
  const buildFiltersFromURL = (params: URLSearchParams): FilterState => {
    const filters: any = {
      category: params.get("category") || "",
      price_range: {
        min: Number(params.get("price_min")) || 0,
        max: Number(params.get("price_max")) || 999999999,
      },
    };

    params.forEach((value, key) => {
      if (!["category", "price_min", "price_max", "sort", "page"].includes(key)) {
        filters[key] = value;
      }
    });

    return filters;
  };

  const [selectedFilters, setSelectedFilters] = useState<FilterState>(() => buildFiltersFromURL(searchParams));
  const [selectedSort, setSelectedSort] = useState<string>(searchParams.get("sort") || "best-selling");
  const [page, setPage] = useState<number>(Number(searchParams.get("page")) || 1);
  const { data, isLoading, isFetching, isError } = useGetProductsCategoryQuery(
    { page, sort: selectedSort, filters: selectedFilters },
    { skip: !selectedFilters.category }
  );

  // Update URL
  const updateURLParams = (filters: FilterState, sort: string, pageNum: number) => {
    const newParams = new URLSearchParams();
    if (filters.category) newParams.set("category", filters.category);
    if (filters.price_range.min > 0)
      newParams.set("price_min", filters.price_range.min.toString());
    if (filters.price_range.max < 999999999)
      newParams.set("price_max", filters.price_range.max.toString());

    Object.keys(filters).forEach((key) => {
      if (!["category", "price_range"].includes(key) && filters[key]) {
        newParams.set(key, filters[key]);
      }
    });

    if (sort && sort !== "best-selling") newParams.set("sort", sort);
    if (pageNum > 1) newParams.set("page", pageNum.toString());
    setSearchParams(newParams);
  };
  // handler select attribute category select
  const handleSelect = (key: keyof FilterState, value: string) => {
    setSelectedFilters((prev) => ({
      ...prev,
      [key]: prev[key] === value ? "" : value,
    }));
    setPage(1);
  };
  const handleSelectPrice = (price: { min: number; max: number }) => {
    setSelectedFilters((prev) => ({
      ...prev,
      price_range:
        prev.price_range.min === price.min &&
          prev.price_range.max === price.max
          ? { min: 0, max: 999999999 }
          : price,
    }));
    setPage(1);
  };

  const handleSortChange = (sortValue: string) => {
    setSelectedSort(sortValue);
    setPage(1);
  };
  const handlePageChange = (newPage: number) => setPage(newPage);

  // Sync category_id
  useEffect(() => {
    if (category_id) {
      setSelectedFilters((prev) => ({ ...prev, category: category_id }));
      setPage(1);
    }
  }, [category_id]);

  // Update URL on change
  useEffect(() => {
    updateURLParams(selectedFilters, selectedSort, page);
  }, [selectedFilters, selectedSort, page]);

  // Sync on browser back/forward
  useEffect(() => {
    setSelectedFilters(buildFiltersFromURL(searchParams));
    setSelectedSort(searchParams.get("sort") || "best-selling");
    setPage(Number(searchParams.get("page")) || 1);
  }, [searchParams]);



  // Loading & error
  if (isLoading)
    return (
      <SectionContainer bgColor="none">
        <CategorySkeleton />
      </SectionContainer>
    );

  if (data?.status === 0 || !data?.category || isError) return <NotFoundPage />;

  return (
    <SectionContainer bgColor="none">
      {isFetching && <OverlayLoader />}
      <div className="pt-4 flex gap-3">
        <SidebarFilter
          data={data}
          selectedFilters={selectedFilters}
          onSelect={handleSelect}
          onSelectPrice={handleSelectPrice}
        />

        <main className="grow p-4 bg-white rounded-lg shadow-sm h-fit">
          <CategoryBanner
          // bannerImages={data.category?.banners || []}
          />
          <SortHeader
            data={data}
            selectedSort={selectedSort}
            onSortChange={handleSortChange}
          />
          <ProductList
            data={data}
            page={page}
            onPageChange={handlePageChange}
          />
        </main>
      </div>
    </SectionContainer>
  );
};

export default DomesticBooksPage;