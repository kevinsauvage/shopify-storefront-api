import { cleanGraphQLResponse } from "../../helpers.js";
import ShopifyStorefrontApi from "../ShopifyStorefrontApi.js";
import customerQueries from "./customerQueries.js";

class Customer extends ShopifyStorefrontApi {
  customerAccessTokenCreate = async ({ input }) => {
    const res = await this.call(customerQueries.customerAccessTokenCreate, { input });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return res?.data?.customerAccessTokenCreate;
  };

  customerAccessTokenCreateWithMultipass = async ({ multipassToken }) => {
    const res = await this.call(customerQueries.customerAccessTokenCreateWithMultipass, {
      multipassToken,
    });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return res?.data?.customerAccessTokenCreateWithMultipass;
  };

  customerAccessTokenDelete = async ({ customerAccessToken }) => {
    const res = await this.call(customerQueries.customerAccessTokenDelete, { customerAccessToken });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    const response = res?.data?.customerAccessTokenDelete;
    return response;
  };

  customerAccessTokenRenew = async ({ customerAccessToken }) => {
    const res = await this.call(customerQueries.customerAccessTokenRenew, { customerAccessToken });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return res?.data?.customerAccessTokenRenew;
  };

  customerActivate = async ({ id, input }) => {
    const res = await this.call(customerQueries.customerActivate, { id, input });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return res?.data?.customerActivate;
  };

  customerActivateByUrl = async ({ activationUrl, password }) => {
    const res = await this.call(customerQueries.customerActivateByUrl, { activationUrl, password });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return res?.data?.customerActivateByUrl;
  };

  customerAddressCreate = async ({ address, customerAccessToken }) => {
    const res = await this.call(customerQueries.customerAddressCreate, {
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
    const res = await this.call(customerQueries.customerAddressDelete, {
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
    const res = await this.call(customerQueries.customerAddressUpdate, {
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
    const res = await this.call(customerQueries.customerCreate, { input });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return res?.data?.customerCreate;
  };

  customerDefaultAddressUpdate = async ({ customerAccessToken, addressId }) => {
    const res = await this.call(customerQueries.customerDefaultAddressUpdate, {
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
    const res = await this.call(customerQueries.customerRecover, { email });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return res?.data?.customerRecover;
  };

  customerReset = async ({ id, input }) => {
    const res = await this.call(customerQueries.customerReset, { id, input });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return res?.data?.customerReset;
  };

  customerResetByUrl = async ({ password, resetUrl }) => {
    const res = await this.call(customerQueries.customerResetByUrl, { password, resetUrl });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return res?.data?.customerResetByUrl;
  };

  customerUpdate = async ({ customerAccessToken, customer }) => {
    const res = await this.call(customerQueries.customerUpdate, { customerAccessToken, customer });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return res?.data?.customerUpdate;
  };

  queryCustomer = async ({ customerAccessToken }) => {
    const res = await this.call(customerQueries.queryCustomer, { customerAccessToken });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return res?.data?.customer;
  };

  queryCustomerAddresses = async ({ customerAccessToken, first = 100, after = null }) => {
    const res = await this.call(customerQueries.queryCustomerAddresses, {
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
    const res = await this.call(customerQueries.queryCustomerAddressById, {
      addressId,
    });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return cleanGraphQLResponse(res?.data?.node);
  };

  queryCustomerOrders = async ({ customerAccessToken, first = 5, after = null }) => {
    const res = await this.call(customerQueries.queryCustomerOrders, {
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
    const res = await this.call(customerQueries.queryCustomerOrderById, { orderId, first, after });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return cleanGraphQLResponse(res?.data?.node);
  };
}

export default Customer;
