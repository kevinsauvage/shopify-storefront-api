import ShopifyStorefrontApi from '../ShopifyStorefrontApi';
declare class Product extends ShopifyStorefrontApi {
    getProductByHandle: (variables: {
        handle: string;
        identifiers?: unknown[];
        language?: string;
    }) => Promise<ProductType>;
    productRecommendations: (variables: {
        productId: string;
        identifiers?: unknown[];
        language?: string;
    }) => Promise<Array<ProductType>>;
    getProducts: (variables: {
        sortKey: string;
        first?: number;
        after?: string;
        query?: string;
        language?: string;
        identifiers?: unknown[];
        before?: string;
    }) => Promise<{
        products: Array<ProductType>;
        pageInfo: PageInfoType;
    }>;
}
export default Product;
