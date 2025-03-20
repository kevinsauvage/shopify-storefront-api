class ShopifyApi {
    accessToken;
    delegateToken;
    buyerIp;
    domain;
    apiVersion;
    constructor({ accessToken, delegateToken, buyerIp, domain, apiVersion }) {
        this.accessToken = accessToken;
        this.delegateToken = delegateToken;
        this.buyerIp = buyerIp;
        this.domain = domain;
        this.apiVersion = apiVersion;
    }
}
export default ShopifyApi;
