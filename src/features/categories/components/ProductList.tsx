import React from "react";
import ProductCard from "@/features/home/components/Card/ProductCard";
import Pagination from "@/shared/components/Pagination";
import type { Product } from "@/features/home/types/home.props";

interface ProductListProps {
  data: any;
  page: number;
  onPageChange: (page: number) => void;
}

const ProductList: React.FC<ProductListProps> = ({ data, page, onPageChange }) => (
  <>
    <div className="grid grid-cols-4 gap-1">
      {data.product_list?.length ? (
        data.product_list.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <div className="col-span-4 text-center text-gray-500 py-8">
          Không có sản phẩm trong danh mục này.
        </div>
      )}
    </div>

    {data?.noofpages > 1 && (
      <Pagination
        currentPage={page}
        totalPages={data.noofpages}
        onPageChange={onPageChange}
      />
    )}
  </>
);

export default ProductList;