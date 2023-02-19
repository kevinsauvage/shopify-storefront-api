import { cleanGraphQLResponse } from "../helpers.js";
import customerQueries from "./customerQueries.js";

class Customer {
  constructor(parent) {
    this.parent = parent;
  }
  customerAccessTokenCreate = async ({ input }) => {
    const res = await this.parent.storefrontCall(customerQueries.customerAccessTokenCreate, { input });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return res?.data?.customerAccessTokenCreate;
  };

  customerAccessTokenCreateWithMultipass = async ({ multipassToken }) => {
    const res = await this.parent.storefrontCall(customerQueries.customerAccessTokenCreateWithMultipass, {
      multipassToken,
    });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return res?.data?.customerAccessTokenCreateWithMultipass;
  };

  customerAccessTokenDelete = async ({ customerAccessToken }) => {
    const res = await this.parent.storefrontCall(customerQueries.customerAccessTokenDelete, { customerAccessToken });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    const response = res?.data?.customerAccessTokenDelete;
    return response;
  };

  customerAccessTokenRenew = async ({ customerAccessToken }) => {
    const res = await this.parent.storefrontCall(customerQueries.customerAccessTokenRenew, { customerAccessToken });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return res?.data?.customerAccessTokenRenew;
  };

  customerActivate = async ({ id, input }) => {
    const res = await this.parent.storefrontCall(customerQueries.customerActivate, { id, input });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return res?.data?.customerActivate;
  };

  customerActivateByUrl = async ({ activationUrl, password }) => {
    const res = await this.parent.storefrontCall(customerQueries.customerActivateByUrl, { activationUrl, password });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return res?.data?.customerActivateByUrl;
  };

  customerAddressCreate = async ({ address, customerAccessToken }) => {
    const res = await this.parent.storefrontCall(customerQueries.customerAddressCreate, {
      address,
      customerAccessToken,
    });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return res?.data?.customerAddressCreate;
  };

  customerAddressDelete = async ({ customerAccessToken, addressId }) => {
    const res = await this.parent.storefrontCall(customerQueries.customerAddressDelete, {
      customerAccessToken,
      addressId,
    });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return res?.data?.customerAddressDelete;
  };

  customerAddressUpdate = async ({ address, customerAccessToken, addressId }) => {
    const res = await this.parent.storefrontCall(customerQueries.customerAddressUpdate, {
      address,
      customerAccessToken,
      addressId,
    });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return res?.data?.customerAddressUpdate;
  };

  customerCreate = async ({ input }) => {
    const res = await this.parent.storefrontCall(customerQueries.customerCreate, { input });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return res?.data?.customerCreate;
  };

  customerDefaultAddressUpdate = async ({ customerAccessToken, addressId }) => {
    const res = await this.parent.storefrontCall(customerQueries.customerDefaultAddressUpdate, {
      customerAccessToken,
      addressId,
    });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return res?.data?.customerDefaultAddressUpdate;
  };

  customerRecover = async ({ email }) => {
    const res = await this.parent.storefrontCall(customerQueries.customerRecover, { email });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return res?.data?.customerRecover;
  };

  customerReset = async ({ id, input }) => {
    const res = await this.parent.storefrontCall(customerQueries.customerReset, { id, input });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return res?.data?.customerReset;
  };

  customerResetByUrl = async ({ password, resetUrl }) => {
    const res = await this.parent.storefrontCall(customerQueries.customerResetByUrl, { password, resetUrl });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return res?.data?.customerResetByUrl;
  };

  customerUpdate = async ({ customerAccessToken, customer }) => {
    const res = await this.parent.storefrontCall(customerQueries.customerUpdate, { customerAccessToken, customer });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return res?.data?.customerUpdate;
  };

  queryCustomer = async ({ customerAccessToken }) => {
    const res = await this.parent.storefrontCall(customerQueries.queryCustomer, { customerAccessToken });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return res?.data?.customer;
  };

  queryCustomerAddresses = async ({ customerAccessToken, first = 100, after = null }) => {
    const res = await this.parent.storefrontCall(customerQueries.queryCustomerAddresses, {
      customerAccessToken,
      first,
      after,
    });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return cleanGraphQLResponse(res?.data?.customer?.addresses);
  };

  queryCustomerAddressById = async ({ addressId }) => {
    const res = await this.parent.storefrontCall(customerQueries.queryCustomerAddressById, {
      addressId,
    });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return cleanGraphQLResponse(res?.data?.node);
  };

  queryCustomerOrders = async ({ customerAccessToken, first = 5, after = null }) => {
    const res = await this.parent.storefrontCall(customerQueries.queryCustomerOrders, {
      customerAccessToken,
      after: after || null,
      first: Number(first),
    });
    const orders = res?.data?.customer?.orders;

    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    if (!orders) throw new Error("Missing orders");

    const pageInfo = orders?.pageInfo || null;
    const totalCount = orders?.totalCount || null;
    return { orders: cleanGraphQLResponse(orders), pageInfo, totalCount };
  };

  queryCustomerOrderById = async ({ orderId, first = 100, after = null }) => {
    const res = await this.parent.storefrontCall(customerQueries.queryCustomerOrderById, { orderId, first, after });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return cleanGraphQLResponse(res?.data?.node);
  };
}

export default Customer;
