import { cleanGraphQLResponse } from "../helpers.js";
import customerQueries from "./customerQueries.js";

class Customer {
  constructor(parent) {
    this.parent = parent;
  }
  customerCreate = async (input) => {
    const res = await this.parent.storefrontCall(customerQueries.customerCreate, { input });
    if (res?.errors) return res;
    return res?.data?.customerCreate;
  };

  customerAccessTokenCreate = async (input) => {
    const res = await this.parent.storefrontCall(customerQueries.customerAccessTokenCreate, { input });
    if (res?.errors) return res;
    return res?.data?.customerAccessTokenCreate;
  };

  customerAccessTokenCreateWithMultipass = async (multipassToken) => {
    const res = await this.parent.storefrontCall(customerQueries.customerAccessTokenCreateWithMultipass, {
      multipassToken,
    });
    if (res?.errors) return res;
    return res?.data?.customerAccessTokenCreateWithMultipass;
  };

  customerAccessTokenRenew = async (customerAccessToken) => {
    const res = await this.parent.storefrontCall(customerQueries.customerAccessTokenRenew, { customerAccessToken });
    if (res?.errors) return res;
    return res?.data?.customerAccessTokenRenew;
  };

  customerAccessTokenDelete = async (customerAccessToken) => {
    const res = await this.parent.storefrontCall(customerQueries.customerAccessTokenDelete, { customerAccessToken });
    if (res?.errors) return res;
    const response = res?.data?.customerAccessTokenDelete;
    return response;
  };

  customerActivate = async (id, input) => {
    const res = await this.parent.storefrontCall(customerQueries.customerActivate, { id, input });
    if (res?.errors) return res;
    return cleanGraphQLResponse(res?.data?.customerActivate);
  };

  customerActivateByUrl = async (activationUrl, password) => {
    const res = await this.parent.storefrontCall(customerQueries.customerActivateByUrl, { activationUrl, password });
    if (res?.errors) return res;
    return cleanGraphQLResponse(res?.data?.customerActivateByUrl);
  };

  customerRecover = async (email) => {
    const res = await this.parent.storefrontCall(customerQueries.customerRecover, { email });
    if (res?.errors) return res;
    return res?.data?.customerRecover;
  };

  customerResetByUrl = async (password, resetUrl) => {
    const res = await this.parent.storefrontCall(customerQueries.customerResetByUrl, { password, resetUrl });
    if (res?.errors) return res;
    return res?.data?.customerResetByUrl;
  };

  customerReset = async (id, input) => {
    const res = await this.parent.storefrontCall(customerQueries.customerReset, { id, input });
    if (res?.errors) return res;
    return res?.data?.customerReset;
  };

  customerUpdate = async (customerAccessToken, customer) => {
    const res = await this.parent.storefrontCall(customerQueries.customerUpdate, { customerAccessToken, customer });
    if (res?.errors) return res;
    return cleanGraphQLResponse(res?.data?.customerUpdate);
  };

  customerAddressCreate = async (address, customerAccessToken) => {
    const res = await this.parent.storefrontCall(customerQueries.customerAddressCreate, {
      address,
      customerAccessToken,
    });
    if (res?.errors) return res;
    return res?.data?.customerAddressCreate;
  };

  customerAddressDelete = async (customerAccessToken, id) => {
    const res = await this.parent.storefrontCall(customerQueries.customerAddressDelete, { customerAccessToken, id });
    if (res?.errors) return res;
    return cleanGraphQLResponse(res?.data?.customerAddressDelete);
  };

  customerAddressUpdate = async (address, customerAccessToken, id) => {
    const res = await this.parent.storefrontCall(customerQueries.customerAddressUpdate, {
      address,
      customerAccessToken,
      id,
    });
    if (res?.errors) return res;
    return res?.data?.customerAddressUpdate;
  };

  customerDefaultAddressUpdate = async (customerAccessToken, addressId) => {
    const res = await this.parent.storefrontCall(customerQueries.customerDefaultAddressUpdate, {
      customerAccessToken,
      addressId,
    });
    if (res?.errors) return res;
    return cleanGraphQLResponse(res?.data?.customerDefaultAddressUpdate);
  };

  queryCustomer = async (customerAccessToken) => {
    const res = await this.parent.storefrontCall(customerQueries.queryCustomer, { customerAccessToken });
    if (res?.errors) return res;
    const response = { response: cleanGraphQLResponse(res?.data), errors: res?.errors };
    return response;
  };

  queryOrderById = async (id) => {
    const res = await this.parent.storefrontCall(customerQueries.queryOrderById, { id });
    if (res?.errors) return res;
    return cleanGraphQLResponse(res?.data?.node);
  };

  queryCustomerOrders = async (customerAccessToken, first = 5, after = null) => {
    const res = await this.parent.storefrontCall(customerQueries.queryCustomerOrders, {
      customerAccessToken,
      after: after || null,
      first: Number(first),
    });

    if (res?.errors) return res;
    const pageInfo = res?.data?.customer?.orders?.pageInfo;
    return { orders: cleanGraphQLResponse(res?.data?.customer?.orders), pageInfo };
  };

  queryCustomerAddresses = async (customerAccessToken) => {
    const res = await this.parent.storefrontCall(customerQueries.queryCustomerAddresses, { customerAccessToken });
    if (res?.errors) return res;
    return cleanGraphQLResponse(res?.data?.customer?.addresses);
  };

  queryCustomerAddressById = async (customerAccessToken, id) => {
    const res = await this.parent.storefrontCall(customerQueries.queryCustomerAddressById, { customerAccessToken, id });
    if (res?.errors) return res;
    const response = cleanGraphQLResponse(res?.data);
    return response.node;
  };
}

export default Customer;
