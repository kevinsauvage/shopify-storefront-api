import { cleanGraphQLResponse } from "./src/helpers.js";
import shopifyQueries from "./src/queries/index.js";

const { checkoutQueries, queriesCollection, customerQueries, productQueries, shopQueries, cartQueries } =
  shopifyQueries;

class ShopifyClient {
  constructor({ accessToken, delegateToken, buyerIp, domain, apiVersion, adminToken }) {
    this.accessToken = accessToken;
    this.delegateToken = delegateToken;
    this.buyerIp = buyerIp;
    this.domain = domain;
    this.apiVersion = apiVersion;
    this.adminToken = adminToken;

    this.shop = {
      getShop: async () => {
        const res = await this.storefrontCall(shopQueries.getShop);
        if (res?.errors) return res;
        return res?.data?.shop;
      },
      getPrivacyPolicy: async () => {
        const res = await this.storefrontCall(shopQueries.getPrivacyPolicy);
        if (res?.errors) return res;
        return res?.data?.shop;
      },
      getRefundPolicy: async () => {
        const res = await this.storefrontCall(shopQueries.getRefundPolicy);
        if (res?.errors) return res;
        return res?.data?.shop;
      },
      getShippingPolicy: async () => {
        const res = await this.storefrontCall(shopQueries.getShippingPolicy);
        if (res?.errors) return res;
        return res?.data?.shop;
      },
      getSuscriptionPolicy: async () => {
        const res = await this.storefrontCall(shopQueries.getSuscriptionPolicy);
        if (res?.errors) return res;
        return res?.data?.shop;
      },
      getTermsOfService: async () => {
        const res = await this.storefrontCall(shopQueries.getTermsOfService);
        if (res?.errors) return res;
        return res?.data?.shop;
      },
      getMenu: async (handle) => {
        const res = await this.storefrontCall(shopQueries.getMenu, { handle });
        if (res?.errors) return res;
        return res?.data?.menu?.items;
      },
      getPage: async (handle) => {
        const res = await this.storefrontCall(shopQueries.getPage, { handle });
        if (res?.errors) return res;
        const value = res?.data?.page?.data?.value;
        return value ? JSON.parse(value) : undefined;
      },
      getMetaObject: async (handle, delegateToken, ip) => {
        const res = await this.storefrontCall(shopQueries.getMetaObject, { handle }, delegateToken, ip);
        if (res?.errors) return res;
        const value = res?.data?.metaobject?.fields?.[0].value;
        return value && JSON.parse(value);
      },
    };

    this.customer = {
      customerCreate: async (input) => {
        const res = await this.storefrontCall(customerQueries.customerCreate, { input });
        if (res?.errors) return res;
        return res?.data?.customerCreate;
      },

      customerAccessTokenCreate: async (input) => {
        const res = await this.storefrontCall(customerQueries.customerAccessTokenCreate, { input });
        if (res?.errors) return res;
        return res?.data?.customerAccessTokenCreate;
      },

      customerAccessTokenCreateWithMultipass: async (multipassToken) => {
        const res = await this.storefrontCall(customerQueries.customerAccessTokenCreateWithMultipass, {
          multipassToken,
        });
        if (res?.errors) return res;
        return res?.data?.customerAccessTokenCreateWithMultipass;
      },

      customerAccessTokenRenew: async (customerAccessToken) => {
        const res = await this.storefrontCall(customerQueries.customerAccessTokenRenew, { customerAccessToken });
        if (res?.errors) return res;
        return res?.data?.customerAccessTokenRenew;
      },

      customerAccessTokenDelete: async (customerAccessToken) => {
        const res = await this.storefrontCall(customerQueries.customerAccessTokenDelete, { customerAccessToken });
        if (res?.errors) return res;
        const response = res?.data?.customerAccessTokenDelete;
        return response;
      },

      customerActivate: async (id, input) => {
        const res = await this.storefrontCall(customerQueries.customerActivate, { id, input });
        if (res?.errors) return res;
        return cleanGraphQLResponse(res?.data?.customerActivate);
      },

      customerActivateByUrl: async (activationUrl, password) => {
        const res = await this.storefrontCall(customerQueries.customerActivateByUrl, { activationUrl, password });
        if (res?.errors) return res;
        return cleanGraphQLResponse(res?.data?.customerActivateByUrl);
      },

      customerRecover: async (email) => {
        const res = await this.storefrontCall(customerQueries.customerRecover, { email });
        if (res?.errors) return res;
        return res?.data?.customerRecover;
      },

      customerResetByUrl: async (password, resetUrl) => {
        const res = await this.storefrontCall(customerQueries.customerResetByUrl, { password, resetUrl });
        if (res?.errors) return res;
        return res?.data?.customerResetByUrl;
      },

      customerReset: async (id, input) => {
        const res = await this.storefrontCall(customerQueries.customerReset, { id, input });
        if (res?.errors) return res;
        return res?.data?.customerReset;
      },

      customerUpdate: async (customerAccessToken, customer) => {
        const res = await this.storefrontCall(customerQueries.customerUpdate, { customerAccessToken, customer });
        if (res?.errors) return res;
        return cleanGraphQLResponse(res?.data?.customerUpdate);
      },

      customerAddressCreate: async (address, customerAccessToken) => {
        const res = await this.storefrontCall(customerQueries.customerAddressCreate, { address, customerAccessToken });
        if (res?.errors) return res;
        return res?.data?.customerAddressCreate;
      },

      customerAddressDelete: async (customerAccessToken, id) => {
        const res = await this.storefrontCall(customerQueries.customerAddressDelete, { customerAccessToken, id });
        if (res?.errors) return res;
        return cleanGraphQLResponse(res?.data?.customerAddressDelete);
      },

      customerAddressUpdate: async (address, customerAccessToken, id) => {
        const res = await this.storefrontCall(customerQueries.customerAddressUpdate, {
          address,
          customerAccessToken,
          id,
        });
        if (res?.errors) return res;
        return res?.data?.customerAddressUpdate;
      },

      customerDefaultAddressUpdate: async (customerAccessToken, addressId) => {
        const res = await this.storefrontCall(customerQueries.customerDefaultAddressUpdate, {
          customerAccessToken,
          addressId,
        });
        if (res?.errors) return res;
        return cleanGraphQLResponse(res?.data?.customerDefaultAddressUpdate);
      },

      queryCustomer: async (customerAccessToken) => {
        const res = await this.storefrontCall(customerQueries.queryCustomer, { customerAccessToken });
        if (res?.errors) return res;
        const response = { response: cleanGraphQLResponse(res?.data), errors: res?.errors };
        return response;
      },

      queryOrderById: async (id) => {
        const res = await this.storefrontCall(customerQueries.queryOrderById, { id });
        if (res?.errors) return res;
        return cleanGraphQLResponse(res?.data?.node);
      },

      queryCustomerOrders: async (customerAccessToken, first = 5, after = null) => {
        const res = await this.storefrontCall(customerQueries.queryCustomerOrders, {
          customerAccessToken,
          after: after || null,
          first: Number(first),
        });

        if (res?.errors) return res;
        const pageInfo = res?.data?.customer?.orders?.pageInfo;
        return { orders: cleanGraphQLResponse(res?.data?.customer?.orders), pageInfo };
      },

      queryCustomerAddresses: async (customerAccessToken) => {
        const res = await this.storefrontCall(customerQueries.queryCustomerAddresses, { customerAccessToken });
        if (res?.errors) return res;
        return cleanGraphQLResponse(res?.data?.customer?.addresses);
      },

      queryCustomerAddressById: async (customerAccessToken, id) => {
        const res = await this.storefrontCall(customerQueries.queryCustomerAddressById, { customerAccessToken, id });
        if (res?.errors) return res;
        const response = cleanGraphQLResponse(res?.data);
        return response.node;
      },
    };

    this.product = {
      getProductRecommendation: async (productId) => {
        const res = await this.storefrontCall(productQueries.queryProductRecommendations, { productId });
        if (res?.errors) return res;
        return cleanGraphQLResponse(res.data.productRecommendations);
      },
      getProduct: async (handle) => {
        const res = await this.storefrontCall(productQueries.queryProduct, { handle });
        if (res?.errors) return res;
        return cleanGraphQLResponse(res.data.product);
      },
      getProducts: async (sortKey, first) => {
        const res = await this.storefrontCall(productQueries.queryProducts, { first, sortKey });
        if (res?.errors) return res;
        return { products: cleanGraphQLResponse(res?.data?.products) };
      },
      searchProducts: async (query = "", first = 250) => {
        const res = await this.storefrontCall(productQueries.searchProducts, {
          query: `title:${query}* OR description:${query}* OR product_type:${query}* OR tag=${query}*`,
          first,
        });
        if (res?.errors) return res;
        return cleanGraphQLResponse(res?.data?.products);
      },
    };

    this.collection = {
      filterCollectionForward: async (handle, first = null, filters, sort = "RELEVANCE", after = null) => {
        const res = await this.storefrontCall(queriesCollection.filterCollectionForward, {
          handle,
          first,
          filters,
          sort,
          after,
        });

        if (res?.errors) return res;

        const collection = res?.data?.collection;

        if (collection) {
          const products = cleanGraphQLResponse(collection?.products);
          const pageInfo = collection?.products?.pageInfo;
          const collectionFilters = collection?.products?.filters;
          return { collection: { ...collection, products }, pageInfo, collectionFilters };
        }
        return null;
      },
      getCollections: async (first) => {
        const res = await this.storefrontCall(queriesCollection.getCollections, { first });
        if (res?.errors) return res;
        return cleanGraphQLResponse(res?.data?.collections);
      },
      getSitemap: async (first) => {
        const res = await this.storefrontCall(queriesCollection.getSitemap, { first });
        if (res?.errors) return res;
        return cleanGraphQLResponse(res?.data?.collections);
      },
    };

    this.cart = {
      createCart: async (input, first = 250, after = null) => {
        const res = await this.storefrontCall(cartQueries.createCart, { input, first, after });
        if (res?.errors) return res;
        return cleanGraphQLResponse(res?.data?.cartCreate?.cart);
      },
      cartQuery: async (cartId, first = 250, after = null) => {
        const res = await this.storefrontCall(cartQueries.cartQuery, { cartId, first, after });
        if (res?.errors) return res;
        return cleanGraphQLResponse(res?.data?.cart);
      },
      updateCartLines: async (cartId, lines, first = 250, after = null) => {
        const res = await this.storefrontCall(cartQueries.updateCartLines, {
          cartId,
          lines,
          first,
          after,
        });
        if (res?.errors) return res;
        return cleanGraphQLResponse(res?.data?.cartLinesUpdate);
      },
      updateCartBuyerIdentity: async (buyerIdentity, cartId, first = 250, after = null) => {
        const res = await this.storefrontCall(cartQueries.updateCartBuyerIdentity, {
          buyerIdentity,
          cartId,
          first,
          after,
        });
        if (res?.errors) return res;
        return cleanGraphQLResponse(res?.data?.cartBuyerIdentityUpdate);
      },
      checkoutURL: async (cartId) => {
        const res = await this.storefrontCall(cartQueries.checkoutURL, { cartId });
        if (res?.errors) return res;
        return cleanGraphQLResponse(res?.data?.cart);
      },
      updateCartDiscountCodes: async (cartId, discountCodes, first = 250, after = null) => {
        const res = await this.storefrontCall(cartQueries.updateCartDiscountCodes, {
          cartId,
          discountCodes,
          first,
          after,
        });
        if (res?.errors) return res;
        return cleanGraphQLResponse(res?.data?.cartDiscountCodesUpdate);
      },
      updateCartNote: async (cartId, note, first = 250, after = null) => {
        const res = await this.storefrontCall(cartQueries.updateCartNote, {
          cartId,
          note,
          first,
          after,
        });
        if (res?.errors) return res;
        return cleanGraphQLResponse(res?.data?.cartNoteUpdate);
      },
      cartSelectedDeliveryOptionsUpdate: async (cartId, selectedDeliveryOptions, first = 250, after = null) => {
        const res = await this.storefrontCall(cartQueries.cartSelectedDeliveryOptionsUpdate, {
          cartId,
          selectedDeliveryOptions,
          first,
          after,
        });
        if (res?.errors) return res;
        return cleanGraphQLResponse(res?.data?.cartSelectedDeliveryOptionsUpdate);
      },

      removeCartLines: async (cartId, lineIds, first = 250, after = null) => {
        const res = await this.storefrontCall(cartQueries.removeCartLines, {
          cartId,
          lineIds,
          first,
          after,
        });
        if (res?.errors) return res;
        return cleanGraphQLResponse(res?.data?.cartLinesRemove);
      },

      addCartLines: async (cartId, lines, first = 250, after = null) => {
        const res = await this.storefrontCall(cartQueries.addCartLines, {
          cartId,
          lines,
          first,
          after,
        });
        if (res?.errors) return res;
        return cleanGraphQLResponse(res?.data?.cartLinesAdd);
      },
    };

    this.checkout = {
      associateCustomerToCheckout: async (checkoutId, customerAccessToken) => {
        const res = await this.storefrontCall(checkoutQueries.queryAddCustomerToCheckout, {
          checkoutId,
          customerAccessToken,
        });
        if (res?.errors) return res;
        return cleanGraphQLResponse(res?.data?.checkoutCustomerAssociateV2?.checkout);
      },
      createCheckout: async (input) => {
        const res = await this.storefrontCall(checkoutQueries.queryCreateCheckout, { input });
        if (res?.errors) return res;
        return cleanGraphQLResponse(res?.data?.checkoutCreate?.checkout);
      },
      getCheckoutById: async (id) => {
        const res = await this.storefrontCall(checkoutQueries.queryCheckoutById, { id });
        if (res?.errors) return res;
        return cleanGraphQLResponse(res?.data?.node);
      },
      addLinesToCheckout: async (checkoutId, lineItems) => {
        const res = await this.storefrontCall(checkoutQueries.queryAddLinesItem, { checkoutId, lineItems });
        if (res?.errors) return res;
        return cleanGraphQLResponse(res?.data?.checkoutLineItemsAdd?.checkout);
      },
      removeLinesFromCheckout: async (checkoutId, lineItemIds) => {
        const res = await this.storefrontCall(checkoutQueries.queryRemoveFromCheckout, { checkoutId, lineItemIds });
        if (res?.errors) return res;
        return cleanGraphQLResponse(res?.data?.checkoutLineItemsRemove?.checkout);
      },
      updateLines: async (checkoutId, lineItems) => {
        const res = await this.storefrontCall(checkoutQueries.queryUpdateLine, { checkoutId, lineItems });
        if (res?.errors) return res;
        return cleanGraphQLResponse(res?.data?.checkoutLineItemsUpdate?.checkout);
      },
      updateCheckoutShippingAddress: async (shippingAddress, checkoutId) => {
        const res = await this.storefrontCall(checkoutQueries.updateCheckoutShippingAddress, {
          shippingAddress,
          checkoutId,
        });
        if (res?.errors) return res;
        return cleanGraphQLResponse(res?.data?.checkoutShippingAddressUpdateV2?.checkout);
      },
    };

    this.admin = {
      getDelegateToken: async (input) => {
        const res = await this.adminCall(customerQueries.queryDelegateAccessToken, { input });
        if (res?.errors) return res;
        return res?.data?.delegateAccessTokenCreate;
      },
    };
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
