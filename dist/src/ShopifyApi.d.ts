interface ShopifyApiParams {
    accessToken?: string;
    delegateToken?: string;
    buyerIp?: string;
    domain: string;
    apiVersion: string;
}
declare class ShopifyApi {
    accessToken?: string;
    delegateToken?: string;
    buyerIp?: string;
    domain: string;
    apiVersion: string;
    constructor({ accessToken, delegateToken, buyerIp, domain, apiVersion }: ShopifyApiParams);
}
export default ShopifyApi;
