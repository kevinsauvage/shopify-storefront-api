import ShopifyApi from "../ShopifyApi.js";

class ShopifyAdminApi extends ShopifyApi {
  constructor({ adminToken, ...rest }) {
    super(rest);
    this.adminToken = adminToken;
  }

  async call(query, variables) {
    if (typeof window !== "undefined") {
      return console.error("This function should only be called on server side.");
    }
    if (!this.domain) throw new Error("Missing Domain");
    if (!this.adminToken) throw new Error("Missing admin token");
    if (!this.apiVersion) throw new Error("Missing api version");

    try {
      const response = await fetch(`https://${this.domain}/admin/api/${this.apiVersion}/graphql.json`, {
        method: "POST",

        headers: { "Content-Type": "application/json", "X-Shopify-Access-Token": this.adminToken },
        body: JSON.stringify({ query, variables }),
      });
      const res = await response.json();

      if (res.errors) {
        console.error("shopifyAdminApiCall error: ", res.errors);
      }
      return res;
    } catch (error) {
      // TODO HANDLE ERRORS
      return console.error("shopifyAdminApiCall error: ", error);
    }
  }
}

export default ShopifyAdminApi;
