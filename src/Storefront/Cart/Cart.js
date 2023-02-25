import { cleanGraphQLResponse } from "../../helpers.js";
import ShopifyStorefrontApi from "../ShopifyStorefrontApi.js";
import cartQueries from "./cartQueries.js";

class Cart extends ShopifyStorefrontApi {
  cartAttributesUpdate = async ({ attributes, cartId, first = 100, after = null, language = "EN" }) => {
    const res = await this.call(cartQueries.cartAttributesUpdate, {
      attributes,
      cartId,
      first,
      after,
      language,
    });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return cleanGraphQLResponse(res?.data?.cartAttributesUpdate);
  };

  cartBuyerIdentityUpdate = async ({ buyerIdentity, cartId, first = 250, after = null, language = "EN" }) => {
    const res = await this.call(cartQueries.cartBuyerIdentityUpdate, {
      buyerIdentity,
      cartId,
      first,
      after,
      language,
    });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return cleanGraphQLResponse(res?.data?.cartBuyerIdentityUpdate);
  };

  cartCreate = async ({ input, first = 250, after = null, language = "EN" }) => {
    const res = await this.call(cartQueries.cartCreate, { input, first, after, language });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return cleanGraphQLResponse(res?.data?.cartCreate);
  };

  cartDiscountCodesUpdate = async ({ cartId, discountCodes, first = 250, after = null, language = "EN" }) => {
    const res = await this.call(cartQueries.cartDiscountCodesUpdate, {
      cartId,
      discountCodes,
      first,
      after,
      language,
    });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return cleanGraphQLResponse(res?.data?.cartDiscountCodesUpdate);
  };

  cartLinesAdd = async ({ cartId, lines, first = 250, after = null, language = "EN" }) => {
    const res = await this.call(cartQueries.cartLinesAdd, {
      cartId,
      lines,
      first,
      after,
      language,
    });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return cleanGraphQLResponse(res?.data?.cartLinesAdd);
  };

  cartLinesRemove = async ({ cartId, lines, first = 250, after = null, language = "EN" }) => {
    const res = await this.call(cartQueries.cartLinesRemove, {
      cartId,
      lines,
      first,
      after,
      language,
    });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return cleanGraphQLResponse(res?.data?.cartLinesRemove);
  };

  cartLinesUpdate = async ({ cartId, lines, first = 250, after = null, language = "EN" }) => {
    const res = await this.call(cartQueries.cartLinesUpdate, {
      cartId,
      lines,
      first,
      after,
      language,
    });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return cleanGraphQLResponse(res?.data?.cartLinesUpdate);
  };

  cartNoteUpdate = async ({ cartId, note, first = 250, after = null, language = "EN" }) => {
    const res = await this.call(cartQueries.cartNoteUpdate, {
      cartId,
      note,
      first,
      after,
      language,
    });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return cleanGraphQLResponse(res?.data?.cartNoteUpdate);
  };

  cartQuery = async ({ cartId, first = 250, after = null, language = "EN" }) => {
    const res = await this.call(cartQueries.cartQuery, { cartId, first, after, language });

    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return cleanGraphQLResponse(res?.data?.cart);
  };

  checkoutURL = async ({ cartId, language = "EN" }) => {
    const res = await this.call(cartQueries.checkoutURL, { cartId, language });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return cleanGraphQLResponse(res?.data?.cart);
  };
}

export default Cart;