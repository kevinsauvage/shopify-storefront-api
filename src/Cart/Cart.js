import { cleanGraphQLResponse } from "../helpers.js";
import cartQueries from "./cartQueries.js";

class Cart {
  constructor(parent) {
    this.parent = parent;
  }

  cartAttributesUpdate = async ({ attributes, cartId, first = 100, after = null }) => {
    const res = await this.parent.storefrontCall(cartQueries.cartAttributesUpdate, {
      attributes,
      cartId,
      first,
      after,
    });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return cleanGraphQLResponse(res?.data?.cartAttributesUpdate);
  };

  cartBuyerIdentityUpdate = async ({ buyerIdentity, cartId, first = 250, after = null }) => {
    const res = await this.parent.storefrontCall(cartQueries.cartBuyerIdentityUpdate, {
      buyerIdentity,
      cartId,
      first,
      after,
    });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return cleanGraphQLResponse(res?.data?.cartBuyerIdentityUpdate);
  };

  cartCreate = async ({ input, first = 250, after = null }) => {
    const res = await this.parent.storefrontCall(cartQueries.cartCreate, { input, first, after });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return cleanGraphQLResponse(res?.data?.cartCreate);
  };

  cartDiscountCodesUpdate = async ({ cartId, discountCodes, first = 250, after = null }) => {
    const res = await this.parent.storefrontCall(cartQueries.cartDiscountCodesUpdate, {
      cartId,
      discountCodes,
      first,
      after,
    });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return cleanGraphQLResponse(res?.data?.cartDiscountCodesUpdate);
  };

  cartLinesAdd = async ({ cartId, lines, first = 250, after = null }) => {
    const res = await this.parent.storefrontCall(cartQueries.cartLinesAdd, {
      cartId,
      lines,
      first,
      after,
    });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return cleanGraphQLResponse(res?.data?.cartLinesAdd);
  };

  cartLinesRemove = async ({ cartId, lines, first = 250, after = null }) => {
    const res = await this.parent.storefrontCall(cartQueries.cartLinesRemove, {
      cartId,
      lines,
      first,
      after,
    });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return cleanGraphQLResponse(res?.data?.cartLinesRemove);
  };

  cartLinesUpdate = async ({ cartId, lines, first = 250, after = null }) => {
    const res = await this.parent.storefrontCall(cartQueries.cartLinesUpdate, {
      cartId,
      lines,
      first,
      after,
    });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return cleanGraphQLResponse(res?.data?.cartLinesUpdate);
  };

  cartNoteUpdate = async ({ cartId, note, first = 250, after = null }) => {
    const res = await this.parent.storefrontCall(cartQueries.cartNoteUpdate, {
      cartId,
      note,
      first,
      after,
    });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return cleanGraphQLResponse(res?.data?.cartNoteUpdate);
  };

  cartQuery = async ({ cartId, first = 250, after = null }) => {
    const res = await this.parent.storefrontCall(cartQueries.cartQuery, { cartId, first, after });

    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return cleanGraphQLResponse(res?.data?.cart);
  };

  checkoutURL = async ({ cartId }) => {
    const res = await this.parent.storefrontCall(cartQueries.checkoutURL, { cartId });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return cleanGraphQLResponse(res?.data?.cart);
  };
}

export default Cart;
