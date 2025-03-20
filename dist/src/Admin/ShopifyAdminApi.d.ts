import ShopifyApi from '../ShopifyApi';
interface ShopifyAdminApiParams {
    adminToken: string | undefined;
    domain: string;
    apiVersion: string;
}
declare class ShopifyAdminApi extends ShopifyApi {
    private adminToken;
    constructor({ adminToken, domain, apiVersion }: ShopifyAdminApiParams);
    call(query: string, variables?: Record<string, unknown>): Promise<any>;
}
export default ShopifyAdminApi;
