interface ShopifyApiParams {
  accessToken?: string;
  delegateToken?: string;
  buyerIp?: string;
  domain: string;
  apiVersion: string;
}

class ShopifyApi {
  accessToken?: string;

  delegateToken?: string;

  buyerIp?: string;

  domain: string;

  apiVersion: string;

  constructor({ accessToken, delegateToken, buyerIp, domain, apiVersion }: ShopifyApiParams) {
    this.accessToken = accessToken;
    this.delegateToken = delegateToken;
    this.buyerIp = buyerIp;
    this.domain = domain;
    this.apiVersion = apiVersion;
  }
}

export default ShopifyApi;
