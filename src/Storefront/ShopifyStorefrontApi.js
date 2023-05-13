import ShopifyApi from '../ShopifyApi';

class ShopifyStorefrontApi extends ShopifyApi {
  async call(query, variables) {
    try {
      if (!this.domain) throw new Error('Missing Domain');
      if (!this.accessToken) throw new Error('Missing admin token');
      if (!this.apiVersion) throw new Error('Missing api version');

      const url = `https://${this.domain}/api/${this.apiVersion}/graphql.json`;

      const headers = { 'Content-Type': 'application/json' };

      if (this.delegateToken && this.buyerIp) {
        headers['Shopify-Storefront-Private-Token'] = this.delegateToken;
        headers['Shopify-Storefront-Buyer-IP'] = this.buyerIp;
      } else {
        headers['X-Shopify-Storefront-Access-Token'] = this.accessToken;
      }

      const body = JSON.stringify({ query, variables });

      const response = await fetch(url, { method: 'POST', headers, body });

      const result = response && (await response.json());

      if (result?.error) console.error(result.error);

      return result;
    } catch (error) {
      return console.error('Shopify storefront api call error:', error.stack);
    }
  }
}

export default ShopifyStorefrontApi;
