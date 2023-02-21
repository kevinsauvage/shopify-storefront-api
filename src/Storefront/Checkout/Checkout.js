import { cleanGraphQLResponse } from "../../helpers.js";
import ShopifyStorefrontApi from "../ShopifyStorefrontApi.js";
import checkoutQueries from "./checkoutQueries.js";

class Checkout extends ShopifyStorefrontApi {
  checkoutAttributesUpdateV2 = async ({ checkoutId, input, after = null, first = 100 }) => {
    const res = await this.call(checkoutQueries.checkoutAttributesUpdateV2, {
      checkoutId,
      input,
      after,
      first,
    });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return cleanGraphQLResponse(res?.data?.checkoutAttributesUpdateV2);
  };

  checkoutCompleteWithCreditCardV2 = async ({ checkoutId, payment, after = null, first = 100 }) => {
    const res = await this.call(checkoutQueries.checkoutCompleteWithCreditCardV2, {
      checkoutId,
      payment,
      input,
      after,
      first,
    });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return cleanGraphQLResponse(res?.data?.checkoutCompleteWithCreditCardV2);
  };

  checkoutCreate = async ({ input, after = null, first = 100 }) => {
    const res = await this.call(checkoutQueries.checkoutCreate, { input, after, first });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return cleanGraphQLResponse(res?.data?.checkoutCreate);
  };

  checkoutCustomerAssociateV2 = async ({ checkoutId, customerAccessToken, after = null, first = 100 }) => {
    const res = await this.call(checkoutQueries.checkoutCustomerAssociateV2, {
      checkoutId,
      customerAccessToken,
      after,
      first,
    });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return cleanGraphQLResponse(res?.data?.checkoutCustomerAssociateV2);
  };

  checkoutCustomerDisassociateV2 = async ({ checkoutId, after = null, first = 100 }) => {
    const res = await this.call(checkoutQueries.checkoutCustomerDisassociateV2, {
      checkoutId,
      after,
      first,
    });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return cleanGraphQLResponse(res?.data?.checkoutCustomerDisassociateV2);
  };

  checkoutDiscountCodeApplyV2 = async ({ checkoutId, discountCode, after = null, first = 100 }) => {
    const res = await this.call(checkoutQueries.checkoutDiscountCodeApplyV2, {
      checkoutId,
      discountCode,
      after,
      first,
    });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return cleanGraphQLResponse(res?.data?.checkoutDiscountCodeApplyV2);
  };

  checkoutDiscountCodeRemove = async ({ checkoutId, after = null, first = 100 }) => {
    const res = await this.call(checkoutQueries.checkoutDiscountCodeRemove, {
      checkoutId,
      after,
      first,
    });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return cleanGraphQLResponse(res?.data?.checkoutDiscountCodeRemove);
  };

  checkoutLineItemsAdd = async ({ checkoutId, lineItems, after = null, first = 100 }) => {
    const res = await this.call(checkoutQueries.checkoutLineItemsAdd, {
      checkoutId,
      lineItems,
      after,
      first,
    });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return cleanGraphQLResponse(res?.data?.checkoutLineItemsAdd);
  };

  checkoutLineItemsRemove = async ({ checkoutId, lineItems, after = null, first = 100 }) => {
    const res = await this.call(checkoutQueries.checkoutLineItemsRemove, {
      checkoutId,
      lineItems,
      after,
      first,
    });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return cleanGraphQLResponse(res?.data?.checkoutLineItemsRemove);
  };

  checkoutLineItemsUpdate = async ({ checkoutId, lineItems, after = null, first = 100 }) => {
    const res = await this.call(checkoutQueries.checkoutLineItemsUpdate, {
      checkoutId,
      lineItems,
      after,
      first,
    });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return cleanGraphQLResponse(res?.data?.checkoutLineItemsUpdate);
  };

  checkoutShippingAddressUpdateV2 = async ({ shippingAddress, checkoutId, after = null, first = 100 }) => {
    const res = await this.call(checkoutQueries.checkoutShippingAddressUpdateV2, {
      shippingAddress,
      checkoutId,
      after,
      first,
    });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return cleanGraphQLResponse(res?.data?.checkoutShippingAddressUpdateV2);
  };

  queryCheckoutById = async ({ checkoutId, after = null, first = 100 }) => {
    const res = await this.call(checkoutQueries.queryCheckoutById, { checkoutId, after, first });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return cleanGraphQLResponse(res?.data?.node);
  };
}

export default Checkout;
