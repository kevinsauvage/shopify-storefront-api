import ShopifyApi from '../ShopifyApi';
interface GraphQLVariables {
    [key: string]: unknown;
}
interface ShopifyResponse<T> {
    data?: {
        [key: string]: T;
    };
    errors?: Array<{
        message: string;
    }>;
}
declare class ShopifyStorefrontApi extends ShopifyApi {
    call<T>(query: string, variables?: GraphQLVariables): Promise<ShopifyResponse<T>>;
}
export default ShopifyStorefrontApi;
