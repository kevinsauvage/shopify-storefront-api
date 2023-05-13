import { cleanGraphQLResponse } from '../../helpers.js';
import ShopifyStorefrontApi from '../ShopifyStorefrontApi.js';
import customerQueries from './customerQueries.js';

class Customer extends ShopifyStorefrontApi {
  customerAccessTokenCreate = async ({ input, language = 'EN' }) => {
    const response = await this.call(customerQueries.customerAccessTokenCreate, {
      input,
      language,
    });
    if (response?.errors) return response;
    return response?.data?.customerAccessTokenCreate;
  };

  customerAccessTokenCreateWithMultipass = async ({ multipassToken, language = 'EN' }) => {
    const response = await this.call(customerQueries.customerAccessTokenCreateWithMultipass, {
      language,
      multipassToken,
    });
    if (response?.errors) return response;
    return response?.data?.customerAccessTokenCreateWithMultipass;
  };

  customerAccessTokenDelete = async ({ customerAccessToken, language = 'EN' }) => {
    const response = await this.call(customerQueries.customerAccessTokenDelete, {
      customerAccessToken,
      language,
    });
    if (response?.errors) return response;
    return response?.data?.customerAccessTokenDelete;
  };

  customerAccessTokenRenew = async ({ customerAccessToken, language = 'EN' }) => {
    const response = await this.call(customerQueries.customerAccessTokenRenew, {
      customerAccessToken,
      language,
    });
    if (response?.errors) return response;
    return response?.data?.customerAccessTokenRenew;
  };

  customerActivate = async ({ id, input, language = 'EN' }) => {
    const response = await this.call(customerQueries.customerActivate, { id, input, language });
    if (response?.errors) return response;
    return response?.data?.customerActivate;
  };

  customerActivateByUrl = async ({ activationUrl, password, language = 'EN' }) => {
    const response = await this.call(customerQueries.customerActivateByUrl, {
      activationUrl,
      password,
      language,
    });
    if (response?.errors) return response;
    return response?.data?.customerActivateByUrl;
  };

  customerAddressCreate = async ({ address, customerAccessToken, language = 'EN' }) => {
    const response = await this.call(customerQueries.customerAddressCreate, {
      address,
      customerAccessToken,
      language,
    });
    if (response?.errors) return response;
    return response?.data?.customerAddressCreate;
  };

  customerAddressDelete = async ({ customerAccessToken, addressId, language = 'EN' }) => {
    const response = await this.call(customerQueries.customerAddressDelete, {
      customerAccessToken,
      addressId,
      language,
    });
    if (response?.errors) return response;
    return response?.data?.customerAddressDelete;
  };

  customerAddressUpdate = async ({ address, customerAccessToken, addressId, language = 'EN' }) => {
    const response = await this.call(customerQueries.customerAddressUpdate, {
      address,
      customerAccessToken,
      addressId,
      language,
    });
    if (response?.errors) return response;
    return response?.data?.customerAddressUpdate;
  };

  customerCreate = async ({ input, language = 'EN' }) => {
    const response = await this.call(customerQueries.customerCreate, { input, language });
    if (response?.errors) return response;
    return response?.data?.customerCreate;
  };

  customerDefaultAddressUpdate = async ({ customerAccessToken, addressId, language = 'EN' }) => {
    const response = await this.call(customerQueries.customerDefaultAddressUpdate, {
      customerAccessToken,
      addressId,
      language,
    });
    if (response?.errors) return response;
    return response?.data?.customerDefaultAddressUpdate;
  };

  customerRecover = async ({ email, language = 'EN' }) => {
    const response = await this.call(customerQueries.customerRecover, { email, language });
    if (response?.errors) return response;
    return response?.data?.customerRecover;
  };

  customerReset = async ({ id, input, language = 'EN' }) => {
    const response = await this.call(customerQueries.customerReset, { id, input, language });
    if (response?.errors) return response;
    return response?.data?.customerReset;
  };

  customerResetByUrl = async ({ password, resetUrl, language = 'EN' }) => {
    const response = await this.call(customerQueries.customerResetByUrl, {
      password,
      resetUrl,
      language,
    });
    if (response?.errors) return response;
    return response?.data?.customerResetByUrl;
  };

  customerUpdate = async ({ customerAccessToken, customer, language = 'EN' }) => {
    const response = await this.call(customerQueries.customerUpdate, {
      customerAccessToken,
      customer,
      language,
    });
    if (response?.errors) return response;
    return response?.data?.customerUpdate;
  };

  queryCustomer = async ({ customerAccessToken, language = 'EN' }) => {
    const response = await this.call(customerQueries.queryCustomer, {
      customerAccessToken,
      language,
    });
    if (response?.errors) return response;
    return response?.data?.customer;
  };

  queryCustomerMetafields = async ({ customerAccessToken, metafields = [], language = 'EN' }) => {
    const response = await this.call(customerQueries.queryCustomerMetafields, {
      customerAccessToken,
      metafields,
      language,
    });
    if (response?.errors) return response;
    return response?.data?.customer?.metafields;
  };

  queryCustomerAddresses = async ({
    customerAccessToken,
    first = 100,
    after = null,
    language = 'EN',
  }) => {
    const response = await this.call(customerQueries.queryCustomerAddresses, {
      customerAccessToken,
      first,
      after,
      language,
    });
    if (response?.errors) return response;
    return cleanGraphQLResponse(response?.data?.customer?.addresses);
  };

  queryCustomerAddressById = async ({ addressId, language = 'EN' }) => {
    const response = await this.call(customerQueries.queryCustomerAddressById, {
      addressId,
      language,
    });
    if (response?.errors) return response;
    return cleanGraphQLResponse(response?.data?.node);
  };

  queryCustomerOrders = async ({
    customerAccessToken,
    first = 5,
    after = null,
    language = 'EN',
  }) => {
    const response = await this.call(customerQueries.queryCustomerOrders, {
      customerAccessToken,
      after: after || null,
      first: Number(first),
      language,
    });
    if (response?.errors) return response;

    const orders = response?.data?.customer?.orders;
    if (!orders) throw new Error('Missing orders');

    const pageInfo = orders?.pageInfo || null;
    const totalCount = orders?.totalCount || null;
    return { orders: cleanGraphQLResponse(orders), pageInfo, totalCount };
  };

  queryCustomerOrderById = async ({ orderId, first = 100, after = null, language = 'EN' }) => {
    const response = await this.call(customerQueries.queryCustomerOrderById, {
      orderId,
      first,
      after,
      language,
    });
    if (response?.errors) return response;
    return cleanGraphQLResponse(response?.data?.node);
  };
}

export default Customer;
