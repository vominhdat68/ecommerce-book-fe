export const buildProductDetailLink = (product_url: string, product_id: number) => ({
    path: `/${product_url}`,
    state: {
        product_id: product_id,
        product_url: product_url,
        // category_url: product.category_url,
    },
});


