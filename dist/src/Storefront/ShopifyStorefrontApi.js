import ShopifyApi from '../ShopifyApi';
class ShopifyStorefrontApi extends ShopifyApi {
    async call(query, variables) {
        try {
            if (!this.domain)
                throw new Error('Missing Domain');
            if (!this.accessToken)
                throw new Error('Missing access token');
            if (!this.apiVersion)
                throw new Error('Missing API version');
            const url = `https://${this.domain}/api/${this.apiVersion}/graphql.json`;
            const headers = { 'Content-Type': 'application/json' };
            if (this.delegateToken && this.buyerIp) {
                headers['Shopify-Storefront-Private-Token'] = this.delegateToken;
                headers['Shopify-Storefront-Buyer-IP'] = this.buyerIp;
            }
            else {
                headers['X-Shopify-Storefront-Access-Token'] = this.accessToken;
            }
            const body = JSON.stringify({ query, variables });
            const response = await fetch(url, { method: 'POST', headers, body });
            const result = await response.json();
            if (result.errors) {
                console.error(JSON.stringify(result, null, 2));
                console.log('variables', variables);
                console.log('query', query);
                throw new Error('GraphQL errors occurred');
            }
            if (!result.data) {
                console.error('No data returned from the GraphQL query');
                throw new Error('No data returned from the GraphQL query');
            }
            return result.data; // Ensuring that we return the result if no errors
        }
        catch (error) {
            console.error('Shopify storefront API call error:', error.stack);
            throw error; // Propagate the error so calling methods can handle it
        }
    }
}
export default ShopifyStorefrontApi;
