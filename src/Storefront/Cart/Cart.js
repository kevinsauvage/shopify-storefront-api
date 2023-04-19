import { cleanGraphQLResponse } from '../../helpers';
import ShopifyStorefrontApi from '../ShopifyStorefrontApi';
import cartQueries from './cartQueries';

class Cart extends ShopifyStorefrontApi {
  cartAttributesUpdate = async ({
    attributes,
    cartId,
    first = 100,
    after = null,
    language = 'EN',
  }) => {
    const response = await this.call(cartQueries.cartAttributesUpdate, {
      attributes,
      cartId,
      first,
      after,
      language,
    });
    if (response?.errors) {
      console.error(response.errors);
      return response;
    }
    return cleanGraphQLResponse(response?.data?.cartAttributesUpdate);
  };

  cartBuyerIdentityUpdate = async ({
    buyerIdentity,
    cartId,
    first = 250,
    after = null,
    language = 'EN',
  }) => {
    const response = await this.call(cartQueries.cartBuyerIdentityUpdate, {
      buyerIdentity,
      cartId,
      first,
      after,
      language,
    });
    if (response?.errors) {
      console.error(response.errors);
      return response;
    }
    return cleanGraphQLResponse(response?.data?.cartBuyerIdentityUpdate);
  };

  cartCreate = async ({ input, first = 250, after = null, language = 'EN' }) => {
    const response = await this.call(cartQueries.cartCreate, { input, first, after, language });
    if (response?.errors) {
      console.error(response.errors);
      return response;
    }
    return cleanGraphQLResponse(response?.data?.cartCreate);
  };

  cartDiscountCodesUpdate = async ({
    cartId,
    discountCodes,
    first = 250,
    after = null,
    language = 'EN',
  }) => {
    const response = await this.call(cartQueries.cartDiscountCodesUpdate, {
      cartId,
      discountCodes,
      first,
      after,
      language,
    });
    if (response?.errors) {
      console.error(response.errors);
      return response;
    }
    return cleanGraphQLResponse(response?.data?.cartDiscountCodesUpdate);
  };

  cartLinesAdd = async ({ cartId, lines, first = 250, after = null, language = 'EN' }) => {
    const response = await this.call(cartQueries.cartLinesAdd, {
      cartId,
      lines,
      first,
      after,
      language,
    });
    if (response?.errors) {
      console.error(response.errors);
      return response;
    }
    return cleanGraphQLResponse(response?.data?.cartLinesAdd);
  };

  cartLinesRemove = async ({ cartId, lines, first = 250, after = null, language = 'EN' }) => {
    const response = await this.call(cartQueries.cartLinesRemove, {
      cartId,
      lines,
      first,
      after,
      language,
    });
    if (response?.errors) {
      console.error(response.errors);
      return response;
    }
    return cleanGraphQLResponse(response?.data?.cartLinesRemove);
  };

  cartLinesUpdate = async ({ cartId, lines, first = 250, after = null, language = 'EN' }) => {
    const response = await this.call(cartQueries.cartLinesUpdate, {
      cartId,
      lines,
      first,
      after,
      language,
    });
    if (response?.errors) {
      console.error(response.errors);
      return response;
    }
    return cleanGraphQLResponse(response?.data?.cartLinesUpdate);
  };

  cartNoteUpdate = async ({ cartId, note, first = 250, after = null, language = 'EN' }) => {
    const response = await this.call(cartQueries.cartNoteUpdate, {
      cartId,
      note,
      first,
      after,
      language,
    });
    if (response?.errors) {
      console.error(response.errors);
      return response;
    }
    return cleanGraphQLResponse(response?.data?.cartNoteUpdate);
  };

  cartQuery = async ({ cartId, first = 250, after = null, language = 'EN' }) => {
    const response = await this.call(cartQueries.cartQuery, { cartId, first, after, language });

    if (response?.errors) {
      console.error(response.errors);
      return response;
    }
    return cleanGraphQLResponse(response?.data?.cart);
  };

  checkoutURL = async ({ cartId, language = 'EN' }) => {
    const response = await this.call(cartQueries.checkoutURL, { cartId, language });
    if (response?.errors) {
      console.error(response.errors);
      return response;
    }
    return cleanGraphQLResponse(response?.data?.cart);
  };
}

export default Cart;
