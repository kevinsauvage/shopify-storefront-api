import ShopifyApi from '../ShopifyApi';

class ShopifyAdminApi extends ShopifyApi {
  constructor({ adminToken, ...rest }) {
    super(rest);
    this.adminToken = adminToken;
  }

  async call(query, variables) {
    if (typeof window !== 'undefined') {
      return console.error('This function should only be called on server side.');
    }
    if (!this.domain) throw new Error('Missing Domain');
    if (!this.adminToken) throw new Error('Missing admin token');
    if (!this.apiVersion) throw new Error('Missing api version');

    const url = `https://${this.domain}/admin/api/${this.apiVersion}/graphql.json`;

    const headers = {
      'Content-Type': 'application/json',
      'X-Shopify-Access-Token': this.adminToken,
    };

    const body = JSON.stringify({ query, variables });

    try {
      const response = await fetch(url, { method: 'POST', headers, body });
      const result = await response?.json();

      if (result?.errors) {
        console.error('shopifyAdminApiCall error:', result.errors);
      }
      return result;
    } catch (error) {
      // TODO HANDLE ERRORS
      return console.error('shopifyAdminApiCall error:', error);
    }
  }
}

export default ShopifyAdminApi;
