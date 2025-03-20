import ShopifyApi from '../ShopifyApi';
interface GraphQLResponse<T = any> {
    data?: T;
    errors?: Array<{
        message: string;
    }>;
}
interface ShopifyAdminApiParams {
    adminToken: string | undefined;
    domain: string;
    apiVersion: string;
}
declare class ShopifyAdminApi extends ShopifyApi {
    private adminToken;
    constructor({ adminToken, domain, apiVersion }: ShopifyAdminApiParams);
    call<T>(query: string, variables?: Record<string, unknown>): Promise<GraphQLResponse<T>>;
}
export default ShopifyAdminApi;
