import ShopifyStorefrontApi from '../ShopifyStorefrontApi';
declare class Product extends ShopifyStorefrontApi {
    getProductByHandle: (variables: {
        handle: string;
        identifiers?: unknown[];
        language?: string;
    }) => Promise<PRODUCT_TYPE>;
    productRecommendations: (variables: {
        productId: string;
        identifiers?: unknown[];
        language?: string;
    }) => Promise<Array<PRODUCT_TYPE>>;
    getProducts: (variables: {
        sortKey: string;
        first?: number;
        after?: string;
        query?: string;
        language?: string;
        identifiers?: unknown[];
        before?: string;
    }) => Promise<{
        products: Array<PRODUCT_TYPE>;
        pageInfo: PAGE_INFO_TYPE;
    }>;
}
export default Product;
