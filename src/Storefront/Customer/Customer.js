import { cleanGraphQLResponse } from "../../helpers.js";
import ShopifyStorefrontApi from "../ShopifyStorefrontApi.js";
import customerQueries from "./customerQueries.js";

class Customer extends ShopifyStorefrontApi {
  customerAccessTokenCreate = async ({ input, language = "EN" }) => {
    const res = await this.call(customerQueries.customerAccessTokenCreate, { input, language });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return res?.data?.customerAccessTokenCreate;
  };

  customerAccessTokenCreateWithMultipass = async ({ multipassToken, language = "EN" }) => {
    const res = await this.call(customerQueries.customerAccessTokenCreateWithMultipass, {
      language,
      multipassToken,
    });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return res?.data?.customerAccessTokenCreateWithMultipass;
  };

  customerAccessTokenDelete = async ({ customerAccessToken, language = "EN" }) => {
    const res = await this.call(customerQueries.customerAccessTokenDelete, { customerAccessToken, language });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    const response = res?.data?.customerAccessTokenDelete;
    return response;
  };

  customerAccessTokenRenew = async ({ customerAccessToken, language = "EN" }) => {
    const res = await this.call(customerQueries.customerAccessTokenRenew, { customerAccessToken, language });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return res?.data?.customerAccessTokenRenew;
  };

  customerActivate = async ({ id, input, language = "EN" }) => {
    const res = await this.call(customerQueries.customerActivate, { id, input, language });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return res?.data?.customerActivate;
  };

  customerActivateByUrl = async ({ activationUrl, password, language = "EN" }) => {
    const res = await this.call(customerQueries.customerActivateByUrl, { activationUrl, password, language });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return res?.data?.customerActivateByUrl;
  };

  customerAddressCreate = async ({ address, customerAccessToken, language = "EN" }) => {
    const res = await this.call(customerQueries.customerAddressCreate, {
      address,
      customerAccessToken,
      language,
    });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return res?.data?.customerAddressCreate;
  };

  customerAddressDelete = async ({ customerAccessToken, addressId, language = "EN" }) => {
    const res = await this.call(customerQueries.customerAddressDelete, {
      customerAccessToken,
      addressId,
      language,
    });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return res?.data?.customerAddressDelete;
  };

  customerAddressUpdate = async ({ address, customerAccessToken, addressId, language = "EN" }) => {
    const res = await this.call(customerQueries.customerAddressUpdate, {
      address,
      customerAccessToken,
      addressId,
      language,
    });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return res?.data?.customerAddressUpdate;
  };

  customerCreate = async ({ input, language = "EN" }) => {
    const res = await this.call(customerQueries.customerCreate, { input, language });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return res?.data?.customerCreate;
  };

  customerDefaultAddressUpdate = async ({ customerAccessToken, addressId, language = "EN" }) => {
    const res = await this.call(customerQueries.customerDefaultAddressUpdate, {
      customerAccessToken,
      addressId,
      language,
    });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return res?.data?.customerDefaultAddressUpdate;
  };

  customerRecover = async ({ email, language = "EN" }) => {
    const res = await this.call(customerQueries.customerRecover, { email, language });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return res?.data?.customerRecover;
  };

  customerReset = async ({ id, input, language = "EN" }) => {
    const res = await this.call(customerQueries.customerReset, { id, input, language });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return res?.data?.customerReset;
  };

  customerResetByUrl = async ({ password, resetUrl, language = "EN" }) => {
    const res = await this.call(customerQueries.customerResetByUrl, { password, resetUrl, language });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return res?.data?.customerResetByUrl;
  };

  customerUpdate = async ({ customerAccessToken, customer, language = "EN" }) => {
    const res = await this.call(customerQueries.customerUpdate, { customerAccessToken, customer, language });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return res?.data?.customerUpdate;
  };

  queryCustomer = async ({ customerAccessToken, language = "EN" }) => {
    const res = await this.call(customerQueries.queryCustomer, { customerAccessToken, language });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return res?.data?.customer;
  };

  queryCustomerMetafields = async ({ customerAccessToken, metafields = [], language = "EN" }) => {
    const res = await this.call(customerQueries.queryCustomerMetafields, { customerAccessToken, metafields, language });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return res?.data?.customer?.metafields;
  };

  queryCustomerAddresses = async ({ customerAccessToken, first = 100, after = null, language = "EN" }) => {
    const res = await this.call(customerQueries.queryCustomerAddresses, {
      customerAccessToken,
      first,
      after,
      language,
    });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return cleanGraphQLResponse(res?.data?.customer?.addresses);
  };

  queryCustomerAddressById = async ({ addressId, language = "EN" }) => {
    const res = await this.call(customerQueries.queryCustomerAddressById, {
      addressId,
      language,
    });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return cleanGraphQLResponse(res?.data?.node);
  };

  queryCustomerOrders = async ({ customerAccessToken, first = 5, after = null, language = "EN" }) => {
    const res = await this.call(customerQueries.queryCustomerOrders, {
      customerAccessToken,
      after: after || null,
      first: Number(first),
      language,
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

  queryCustomerOrderById = async ({ orderId, first = 100, after = null, language = "EN" }) => {
    const res = await this.call(customerQueries.queryCustomerOrderById, { orderId, first, after, language });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return cleanGraphQLResponse(res?.data?.node);
  };
}

export default Customer;
