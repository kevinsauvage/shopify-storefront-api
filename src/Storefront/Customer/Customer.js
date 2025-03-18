import { adjustPaginationVariables, cleanGraphQLResponse } from '../../helpers.js';
import ShopifyStorefrontApi from '../ShopifyStorefrontApi.js';
import customerQueries from './customerQueries.js';

class Customer extends ShopifyStorefrontApi {
  customerAccessTokenCreate = async (variables) => {
    const response = await this.call(customerQueries.customerAccessTokenCreate, variables);
    if (response?.errors) return response;
    return response?.data?.customerAccessTokenCreate;
  };

  customerAccessTokenCreateWithMultipass = async (variables) => {
    const response = await this.call(
      customerQueries.customerAccessTokenCreateWithMultipass,
      variables
    );
    if (response?.errors) return response;
    return response?.data?.customerAccessTokenCreateWithMultipass;
  };

  customerAccessTokenDelete = async (variables) => {
    const response = await this.call(customerQueries.customerAccessTokenDelete, variables);
    if (response?.errors) return response;
    return response?.data?.customerAccessTokenDelete;
  };

  customerAccessTokenRenew = async (variables) => {
    const response = await this.call(customerQueries.customerAccessTokenRenew, variables);
    if (response?.errors) return response;
    return response?.data?.customerAccessTokenRenew;
  };

  customerActivate = async (variables) => {
    const response = await this.call(customerQueries.customerActivate, variables);
    if (response?.errors) return response;
    return response?.data?.customerActivate;
  };

  customerActivateByUrl = async (variables) => {
    const response = await this.call(customerQueries.customerActivateByUrl, variables);
    if (response?.errors) return response;
    return response?.data?.customerActivateByUrl;
  };

  customerAddressCreate = async (variables) => {
    const response = await this.call(customerQueries.customerAddressCreate, variables);
    if (response?.errors) return response;
    return response?.data?.customerAddressCreate;
  };

  customerAddressDelete = async (variables) => {
    const response = await this.call(customerQueries.customerAddressDelete, variables);
    if (response?.errors) return response;
    return response?.data?.customerAddressDelete;
  };

  customerAddressUpdate = async (variables) => {
    const response = await this.call(customerQueries.customerAddressUpdate, variables);
    if (response?.errors) return response;
    return response?.data?.customerAddressUpdate;
  };

  customerCreate = async ({ input, language = 'EN' }) => {
    const response = await this.call(customerQueries.customerCreate, { input, language });
    if (response?.errors) return response;
    return response?.data?.customerCreate;
  };

  customerDefaultAddressUpdate = async (variables) => {
    const response = await this.call(customerQueries.customerDefaultAddressUpdate, variables);
    if (response?.errors) return response;
    return response?.data?.customerDefaultAddressUpdate;
  };

  customerRecover = async (variables) => {
    const response = await this.call(customerQueries.customerRecover, variables);
    if (response?.errors) return response;
    return response?.data?.customerRecover;
  };

  customerReset = async (variables) => {
    const response = await this.call(customerQueries.customerReset, variables);
    if (response?.errors) return response;
    return response?.data?.customerReset;
  };

  customerResetByUrl = async (variables) => {
    const response = await this.call(customerQueries.customerResetByUrl, variables);
    if (response?.errors) return response;
    return response?.data?.customerResetByUrl;
  };

  customerUpdate = async (variables) => {
    const response = await this.call(customerQueries.customerUpdate, variables);
    if (response?.errors) return response;
    return response?.data?.customerUpdate;
  };

  queryCustomer = async (variables) => {
    const response = await this.call(customerQueries.queryCustomer, variables);
    if (response?.errors) return response;
    return response?.data?.customer;
  };

  queryCustomerMetafields = async (variables) => {
    const response = await this.call(customerQueries.queryCustomerMetafields, variables);
    if (response?.errors) return response;
    return response?.data?.customer?.metafields?.filter(Boolean);
  };

  queryCustomerAddresses = async (variables) => {
    const response = await this.call(
      customerQueries.queryCustomerAddresses,
      adjustPaginationVariables(variables)
    );
    if (response?.errors) return response;
    return cleanGraphQLResponse(response?.data?.customer?.addresses);
  };

  queryCustomerAddressById = async (variables) => {
    const response = await this.call(customerQueries.queryCustomerAddressById, variables);
    if (response?.errors) return response;
    return cleanGraphQLResponse(response?.data?.node);
  };

  queryCustomerOrders = async (variables) => {
    const response = await this.call(
      customerQueries.queryCustomerOrders,
      adjustPaginationVariables(variables)
    );

    if (response?.errors) return response;

    const orders = response?.data?.customer?.orders;
    const pageInfo = orders?.pageInfo || null;
    const totalCount = orders?.totalCount || null;

    return { orders: cleanGraphQLResponse(orders), pageInfo, totalCount };
  };

  queryCustomerOrderById = async (variables) => {
    const response = await this.call(
      customerQueries.queryCustomerOrderById,
      adjustPaginationVariables(variables)
    );

    if (response?.errors) return response;
    return cleanGraphQLResponse(response?.data?.node);
  };
}

export default Customer;
