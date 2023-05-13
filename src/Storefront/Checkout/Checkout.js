import { cleanGraphQLResponse } from '../../helpers.js';
import ShopifyStorefrontApi from '../ShopifyStorefrontApi.js';
import checkoutQueries from './checkoutQueries.js';

class Checkout extends ShopifyStorefrontApi {
  checkoutAttributesUpdateV2 = async ({
    checkoutId,
    input,
    after = null,
    first = 100,
    language = 'EN',
  }) => {
    const response = await this.call(checkoutQueries.checkoutAttributesUpdateV2, {
      checkoutId,
      input,
      after,
      first,
      language,
    });
    if (response?.errors) return response;
    return cleanGraphQLResponse(response?.data?.checkoutAttributesUpdateV2);
  };

  checkoutCompleteWithCreditCardV2 = async ({
    checkoutId,
    payment,
    input,
    after = null,
    first = 100,
    language = 'EN',
  }) => {
    const response = await this.call(checkoutQueries.checkoutCompleteWithCreditCardV2, {
      checkoutId,
      payment,
      input,
      after,
      first,
      language,
    });
    if (response?.errors) return response;
    return cleanGraphQLResponse(response?.data?.checkoutCompleteWithCreditCardV2);
  };

  checkoutCreate = async ({ input, after = null, first = 100, language = 'EN' }) => {
    const response = await this.call(checkoutQueries.checkoutCreate, {
      input,
      after,
      first,
      language,
    });
    if (response?.errors) return response;
    return cleanGraphQLResponse(response?.data?.checkoutCreate);
  };

  checkoutCustomerAssociateV2 = async ({
    checkoutId,
    customerAccessToken,
    after = null,
    first = 100,
    language = 'EN',
  }) => {
    const response = await this.call(checkoutQueries.checkoutCustomerAssociateV2, {
      checkoutId,
      customerAccessToken,
      after,
      first,
      language,
    });
    if (response?.errors) return response;
    return cleanGraphQLResponse(response?.data?.checkoutCustomerAssociateV2);
  };

  checkoutCustomerDisassociateV2 = async ({
    checkoutId,
    after = null,
    first = 100,
    language = 'EN',
  }) => {
    const response = await this.call(checkoutQueries.checkoutCustomerDisassociateV2, {
      checkoutId,
      after,
      first,
      language,
    });
    if (response?.errors) return response;
    return cleanGraphQLResponse(response?.data?.checkoutCustomerDisassociateV2);
  };

  checkoutDiscountCodeApplyV2 = async ({
    checkoutId,
    discountCode,
    after = null,
    first = 100,
    language = 'EN',
  }) => {
    const response = await this.call(checkoutQueries.checkoutDiscountCodeApplyV2, {
      checkoutId,
      discountCode,
      after,
      first,
      language,
    });
    if (response?.errors) return response;
    return cleanGraphQLResponse(response?.data?.checkoutDiscountCodeApplyV2);
  };

  checkoutDiscountCodeRemove = async ({
    checkoutId,
    after = null,
    first = 100,
    language = 'EN',
  }) => {
    const response = await this.call(checkoutQueries.checkoutDiscountCodeRemove, {
      checkoutId,
      after,
      first,
      language,
    });
    if (response?.errors) return response;
    return cleanGraphQLResponse(response?.data?.checkoutDiscountCodeRemove);
  };

  checkoutLineItemsAdd = async ({
    checkoutId,
    lineItems,
    after = null,
    first = 100,
    language = 'EN',
  }) => {
    const response = await this.call(checkoutQueries.checkoutLineItemsAdd, {
      checkoutId,
      lineItems,
      after,
      first,
      language,
    });
    if (response?.errors) return response;
    return cleanGraphQLResponse(response?.data?.checkoutLineItemsAdd);
  };

  checkoutLineItemsRemove = async ({
    checkoutId,
    lineItems,
    after = null,
    first = 100,
    language = 'EN',
  }) => {
    const response = await this.call(checkoutQueries.checkoutLineItemsRemove, {
      checkoutId,
      lineItems,
      after,
      first,
      language,
    });
    if (response?.errors) return response;
    return cleanGraphQLResponse(response?.data?.checkoutLineItemsRemove);
  };

  checkoutLineItemsUpdate = async ({
    checkoutId,
    lineItems,
    after = null,
    first = 100,
    language = 'EN',
  }) => {
    const response = await this.call(checkoutQueries.checkoutLineItemsUpdate, {
      checkoutId,
      lineItems,
      after,
      first,
      language,
    });
    if (response?.errors) return response;
    return cleanGraphQLResponse(response?.data?.checkoutLineItemsUpdate);
  };

  checkoutShippingAddressUpdateV2 = async ({
    shippingAddress,
    checkoutId,
    after = null,
    first = 100,
    language = 'EN',
  }) => {
    const response = await this.call(checkoutQueries.checkoutShippingAddressUpdateV2, {
      shippingAddress,
      checkoutId,
      after,
      first,
      language,
    });
    if (response?.errors) return response;
    return cleanGraphQLResponse(response?.data?.checkoutShippingAddressUpdateV2);
  };

  queryCheckoutById = async ({ checkoutId, after = null, first = 100, language = 'EN' }) => {
    const response = await this.call(checkoutQueries.queryCheckoutById, {
      checkoutId,
      after,
      first,
      language,
    });
    if (response?.errors) return response;
    return cleanGraphQLResponse(response?.data?.node);
  };
}

export default Checkout;
