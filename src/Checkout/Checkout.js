import { cleanGraphQLResponse } from "../helpers.js";
import checkoutQueries from "./checkoutQueries.js";

class Checkout {
  constructor(parent) {
    this.parent = parent;
  }

  associateCustomerToCheckout = async (checkoutId, customerAccessToken) => {
    const res = await this.parent.storefrontCall(checkoutQueries.queryAddCustomerToCheckout, {
      checkoutId,
      customerAccessToken,
    });
    if (res?.errors) return res;
    return cleanGraphQLResponse(res?.data?.checkoutCustomerAssociateV2?.checkout);
  };
  createCheckout = async (input) => {
    const res = await this.parent.storefrontCall(checkoutQueries.queryCreateCheckout, { input });
    if (res?.errors) return res;
    return cleanGraphQLResponse(res?.data?.checkoutCreate?.checkout);
  };
  getCheckoutById = async (id) => {
    const res = await this.parent.storefrontCall(checkoutQueries.queryCheckoutById, { id });
    if (res?.errors) return res;
    return cleanGraphQLResponse(res?.data?.node);
  };
  addLinesToCheckout = async (checkoutId, lineItems) => {
    const res = await this.parent.storefrontCall(checkoutQueries.queryAddLinesItem, { checkoutId, lineItems });
    if (res?.errors) return res;
    return cleanGraphQLResponse(res?.data?.checkoutLineItemsAdd?.checkout);
  };
  removeLinesFromCheckout = async (checkoutId, lineItemIds) => {
    const res = await this.parent.storefrontCall(checkoutQueries.queryRemoveFromCheckout, { checkoutId, lineItemIds });
    if (res?.errors) return res;
    return cleanGraphQLResponse(res?.data?.checkoutLineItemsRemove?.checkout);
  };
  updateLines = async (checkoutId, lineItems) => {
    const res = await this.parent.storefrontCall(checkoutQueries.queryUpdateLine, { checkoutId, lineItems });
    if (res?.errors) return res;
    return cleanGraphQLResponse(res?.data?.checkoutLineItemsUpdate?.checkout);
  };
  updateCheckoutShippingAddress = async (shippingAddress, checkoutId) => {
    const res = await this.parent.storefrontCall(checkoutQueries.updateCheckoutShippingAddress, {
      shippingAddress,
      checkoutId,
    });
    if (res?.errors) return res;
    return cleanGraphQLResponse(res?.data?.checkoutShippingAddressUpdateV2?.checkout);
  };
}

export default Checkout;
