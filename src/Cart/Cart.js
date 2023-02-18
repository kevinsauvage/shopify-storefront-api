import { cleanGraphQLResponse } from "../helpers.js";
import cartQueries from "./cartQueries.js";

class Cart {
  constructor(parent) {
    this.parent = parent;
  }
  createCart = async (input, first = 250, after = null) => {
    const res = await this.parent.storefrontCall(cartQueries.createCart, { input, first, after });
    if (res?.errors) return res;
    return cleanGraphQLResponse(res?.data?.cartCreate?.cart);
  };
  cartQuery = async (cartId, first = 250, after = null) => {
    const res = await this.parent.storefrontCall(cartQueries.cartQuery, { cartId, first, after });
    if (res?.errors) return res;
    return cleanGraphQLResponse(res?.data?.cart);
  };
  updateCartLines = async (cartId, lines, first = 250, after = null) => {
    const res = await this.parent.storefrontCall(cartQueries.updateCartLines, {
      cartId,
      lines,
      first,
      after,
    });
    if (res?.errors) return res;
    return cleanGraphQLResponse(res?.data?.cartLinesUpdate);
  };
  updateCartBuyerIdentity = async (buyerIdentity, cartId, first = 250, after = null) => {
    const res = await this.parent.storefrontCall(cartQueries.updateCartBuyerIdentity, {
      buyerIdentity,
      cartId,
      first,
      after,
    });
    if (res?.errors) return res;
    return cleanGraphQLResponse(res?.data?.cartBuyerIdentityUpdate);
  };
  checkoutURL = async (cartId) => {
    const res = await this.parent.storefrontCall(cartQueries.checkoutURL, { cartId });
    if (res?.errors) return res;
    return cleanGraphQLResponse(res?.data?.cart);
  };
  updateCartDiscountCodes = async (cartId, discountCodes, first = 250, after = null) => {
    const res = await this.parent.storefrontCall(cartQueries.updateCartDiscountCodes, {
      cartId,
      discountCodes,
      first,
      after,
    });
    if (res?.errors) return res;
    return cleanGraphQLResponse(res?.data?.cartDiscountCodesUpdate);
  };
  updateCartNote = async (cartId, note, first = 250, after = null) => {
    const res = await this.parent.storefrontCall(cartQueries.updateCartNote, {
      cartId,
      note,
      first,
      after,
    });
    if (res?.errors) return res;
    return cleanGraphQLResponse(res?.data?.cartNoteUpdate);
  };
  cartSelectedDeliveryOptionsUpdate = async (cartId, selectedDeliveryOptions, first = 250, after = null) => {
    const res = await this.parent.storefrontCall(cartQueries.cartSelectedDeliveryOptionsUpdate, {
      cartId,
      selectedDeliveryOptions,
      first,
      after,
    });
    if (res?.errors) return res;
    return cleanGraphQLResponse(res?.data?.cartSelectedDeliveryOptionsUpdate);
  };

  removeCartLines = async (cartId, lineIds, first = 250, after = null) => {
    const res = await this.parent.storefrontCall(cartQueries.removeCartLines, {
      cartId,
      lineIds,
      first,
      after,
    });
    if (res?.errors) return res;
    return cleanGraphQLResponse(res?.data?.cartLinesRemove);
  };

  addCartLines = async (cartId, lines, first = 250, after = null) => {
    const res = await this.parent.storefrontCall(cartQueries.addCartLines, {
      cartId,
      lines,
      first,
      after,
    });
    if (res?.errors) return res;
    return cleanGraphQLResponse(res?.data?.cartLinesAdd);
  };
}

export default Cart;
