import ShopifyApi from '../ShopifyApi';
class ShopifyAdminApi extends ShopifyApi {
    adminToken;
    constructor({ adminToken, domain, apiVersion }) {
        super({ domain, apiVersion }); // Ensure these are passed to the parent class
        this.adminToken = adminToken || '';
        this.domain = domain;
        this.apiVersion = apiVersion;
    }
    // Ensure the function returns the expected result or throws an error
    async call(query, variables) {
        // Ensure the function is only called server-side
        if (typeof window !== 'undefined') {
            throw new Error('This function should only be called on the server side.');
        }
        if (!this.domain)
            throw new Error('Missing Domain');
        if (!this.adminToken)
            throw new Error('Missing admin token');
        if (!this.apiVersion)
            throw new Error('Missing API version');
        const url = `https://${this.domain}/admin/api/${this.apiVersion}/graphql.json`;
        const headers = {
            'Content-Type': 'application/json',
            'X-Shopify-Access-Token': this.adminToken,
        };
        const body = JSON.stringify({ query, variables });
        try {
            const response = await fetch(url, { method: 'POST', headers, body });
            // Ensure we correctly type the response as a GraphQLResponse
            const result = await response.json();
            // Handle errors if present
            if (result.errors && result.errors.length > 0) {
                throw new Error(`GraphQL errors: ${result.errors.map((e) => e.message).join(', ')}`);
            }
            if (!result.data) {
                console.error('No data returned from the GraphQL query');
                throw new Error('No data returned from the GraphQL query');
            }
            return result.data; // Return the result data
        }
        catch (error) {
            // Catch and throw any errors with more detailed messages
            throw new Error(`Shopify Admin API call error: ${error.message}`);
        }
    }
}
export default ShopifyAdminApi;
