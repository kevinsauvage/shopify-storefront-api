import Shop from "./src/Shop/Shop.js";
import Customer from "./src/Customer/Customer.js";
import Product from "./src/Product/Product.js";
import Collection from "./src/Collection/Collection.js";
import Cart from "./src/Cart/Cart.js";
import Checkout from "./src/Checkout/Checkout.js";
import CustomerAdmin from "./src/Admin/Customer/Customer.js";

class ShopifyClient {
  constructor({ accessToken, delegateToken, buyerIp, domain, apiVersion, adminToken }) {
    this.accessToken = accessToken;
    this.delegateToken = delegateToken;
    this.buyerIp = buyerIp;
    this.domain = domain;
    this.apiVersion = apiVersion;
    this.adminToken = adminToken;

    this.shop = new Shop(this);
    this.customer = new Customer(this);
    this.product = new Product(this);
    this.collection = new Collection(this);
    this.cart = new Cart(this);
    this.checkout = new Checkout(this);
    this.admin = new CustomerAdmin(this);
  }

  async storefrontCall(query, variables) {
    try {
      if (!this.domain) throw new Error("Missing Domain");
      if (!this.accessToken) throw new Error("Missing admin token");
      if (!this.apiVersion) throw new Error("Missing api version");

      const url = `https://${this.domain}/api/${this.apiVersion}/graphql.json`;

      const headers = { "Content-Type": "application/json" };

      if (this.delegateToken && this.buyerIp) {
        headers["Shopify-Storefront-Private-Token"] = this.delegateToken;
        headers["Shopify-Storefront-Buyer-IP"] = this.buyerIp;
      } else {
        headers["X-Shopify-Storefront-Access-Token"] = this.accessToken;
      }

      const body = JSON.stringify({ query, variables });

      const response = await fetch(url, { method: "POST", headers, body });

      const json = response && (await response.json());

      return json;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }

  async adminCall(query, variables) {
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

export default ShopifyClient;
