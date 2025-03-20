import { adjustPaginationVariables, cleanGraphQLResponse } from '../../helpers';
import ShopifyStorefrontApi from '../ShopifyStorefrontApi';
import customerQueries from './customerQueries';

const handleUserErrors = (errors: Array<USER_ERROR_TYPE>) => {
  if (errors?.length) {
    const errorMessages = errors.map((error) => error.message);
    throw new Error(`Customer user errors: ${errorMessages.join(', ')}`);
  }
};

type CUSTOMER_ACTIVATE_BY_URL = {
  customer: {
    id: string;
    email: string;
  };
  customerAccessToken: {
    accessToken: string;
    expiresAt: string;
  };
  customerUserErrors: Array<USER_ERROR_TYPE>;
};

class Customer extends ShopifyStorefrontApi {
  customerAccessTokenCreate = async (variables: {
    input: { email: string; password: string };
    language?: string;
  }): Promise<{
    customerAccessToken: {
      accessToken: string;
    };
    customerUserErrors: Array<USER_ERROR_TYPE>;
  }> => {
    const response = (await this.call(customerQueries.customerAccessTokenCreate, variables)) as {
      customerAccessTokenCreate: {
        customerAccessToken: {
          accessToken: string;
        };
        customerUserErrors: Array<USER_ERROR_TYPE>;
      };
    };

    if (!response?.customerAccessTokenCreate) {
      throw new Error('No data returned from the GraphQL query');
    }

    handleUserErrors(response?.customerAccessTokenCreate?.customerUserErrors);

    return response?.customerAccessTokenCreate;
  };

  customerAccessTokenCreateWithMultipass = async (variables: {
    multipassToken: string;
    language?: string;
  }): Promise<{
    customerAccessToken: {
      accessToken: string;
    };
    customerUserErrors: Array<USER_ERROR_TYPE>;
  }> => {
    const response = (await this.call(
      customerQueries.customerAccessTokenCreateWithMultipass,
      variables
    )) as {
      customerAccessTokenCreateWithMultipass: {
        customerAccessToken: {
          accessToken: string;
        };
        customerUserErrors: Array<USER_ERROR_TYPE>;
      };
    };
    if (!response?.customerAccessTokenCreateWithMultipass) {
      throw new Error('No data returned from the GraphQL query');
    }
    handleUserErrors(response?.customerAccessTokenCreateWithMultipass?.customerUserErrors);

    return response?.customerAccessTokenCreateWithMultipass;
  };

  customerAccessTokenDelete = async (variables: {
    customerAccessToken: string;
    language?: string;
  }): Promise<{
    deletedAccessTokenId: string;
    customerUserErrors: Array<USER_ERROR_TYPE>;
  }> => {
    const response = (await this.call(customerQueries.customerAccessTokenDelete, variables)) as {
      customerAccessTokenDelete: {
        deletedAccessTokenId: string;
        customerUserErrors: Array<USER_ERROR_TYPE>;
      };
    };
    if (!response?.customerAccessTokenDelete) {
      throw new Error('No data returned from the GraphQL query');
    }
    handleUserErrors(response?.customerAccessTokenDelete?.customerUserErrors);

    return response?.customerAccessTokenDelete;
  };

  customerAccessTokenRenew = async (variables: {
    customerAccessToken: string;
    language?: string;
  }) => {
    const response = (await this.call(customerQueries.customerAccessTokenRenew, variables)) as {
      customerAccessTokenRenew: {
        customerAccessToken: {
          accessToken: string;
          expiresAt: string;
        };
        userErrors: Array<USER_ERROR_TYPE>;
      };
    };

    if (!response?.customerAccessTokenRenew) {
      throw new Error('No data returned from the GraphQL query');
    }

    handleUserErrors(response?.customerAccessTokenRenew?.userErrors);

    return response?.customerAccessTokenRenew;
  };

  customerActivate = async (variables: {
    id: string;
    input: { password: string };
    language?: string;
  }): Promise<{
    customer: {
      id: string;
      email: string;
    };
    customerAccessToken: {
      accessToken: string;
      expiresAt: string;
    };
    customerUserErrors: Array<USER_ERROR_TYPE>;
  }> => {
    const response = (await this.call(customerQueries.customerActivate, variables)) as {
      customerActivate: {
        customer: {
          id: string;
          email: string;
        };
        customerAccessToken: {
          accessToken: string;
          expiresAt: string;
        };
        customerUserErrors: Array<USER_ERROR_TYPE>;
      };
    };

    if (!response?.customerActivate) {
      throw new Error('No data returned from the GraphQL query');
    }
    handleUserErrors(response?.customerActivate?.customerUserErrors);

    return response?.customerActivate;
  };

  customerActivateByUrl = async (variables: {
    activationUrl: string;
    password: string;
    language?: string;
  }): Promise<CUSTOMER_ACTIVATE_BY_URL> => {
    const response = (await this.call(customerQueries.customerActivateByUrl, variables)) as {
      customerActivateByUrl: CUSTOMER_ACTIVATE_BY_URL;
    };

    if (!response?.customerActivateByUrl) {
      throw new Error('No data returned from the GraphQL query');
    }

    handleUserErrors(response?.customerActivateByUrl?.customerUserErrors);

    return response?.customerActivateByUrl;
  };

  customerAddressCreate = async (variables: {
    address: CUSTOMER_ADDRESS_INPUT_TYPE;
    customerAccessToken: string;
    language?: string;
  }): Promise<{
    customerAddress: CUSTOMER_ADDRESS_TYPE;
    customerUserErrors: Array<USER_ERROR_TYPE>;
  }> => {
    const response = (await this.call(customerQueries.customerAddressCreate, variables)) as {
      customerAddressCreate: {
        customerAddress: CUSTOMER_ADDRESS_TYPE;
        customerUserErrors: Array<USER_ERROR_TYPE>;
      };
    };

    if (!response?.customerAddressCreate) {
      throw new Error('No data returned from the GraphQL query');
    }
    handleUserErrors(response?.customerAddressCreate?.customerUserErrors);

    return response?.customerAddressCreate;
  };

  customerAddressDelete = async (variables: {
    customerAccessToken: string;
    addressId: string;
    language?: string;
  }): Promise<{
    deletedCustomerAddressId: string;
    customerUserErrors: Array<USER_ERROR_TYPE>;
  }> => {
    const response = (await this.call(customerQueries.customerAddressDelete, variables)) as {
      customerAddressDelete: {
        deletedCustomerAddressId: string;
        customerUserErrors: Array<USER_ERROR_TYPE>;
      };
    };
    if (!response?.customerAddressDelete) {
      throw new Error('No data returned from the GraphQL query');
    }
    handleUserErrors(response?.customerAddressDelete?.customerUserErrors);

    return response?.customerAddressDelete;
  };

  customerAddressUpdate = async (variables: {
    address: CUSTOMER_ADDRESS_INPUT_TYPE;
    customerAccessToken: string;
    language?: string;
  }): Promise<{
    customerAddress: CUSTOMER_ADDRESS_TYPE;
    userErrors: Array<USER_ERROR_TYPE>;
  }> => {
    const response = (await this.call(customerQueries.customerAddressUpdate, variables)) as {
      customerAddressUpdate: {
        customerAddress: CUSTOMER_ADDRESS_TYPE;
        userErrors: Array<USER_ERROR_TYPE>;
      };
    };

    if (!response?.customerAddressUpdate) {
      throw new Error('No data returned from the GraphQL query');
    }

    handleUserErrors(response?.customerAddressUpdate?.userErrors);

    return response?.customerAddressUpdate;
  };

  customerCreate = async (variables: {
    input: CUSTOMER_CREATE_INPUT_TYPE;
    language?: string;
  }): Promise<{
    customer: CUSTOMER_TYPE;
    customerAccessToken: {
      accessToken: string;
      expiresAt: string;
    };
    customerUserErrors: Array<USER_ERROR_TYPE>;
  }> => {
    const response = (await this.call(customerQueries.customerCreate, variables)) as {
      customerCreate: {
        customer: CUSTOMER_TYPE;
        customerAccessToken: {
          accessToken: string;
          expiresAt: string;
        };
        customerUserErrors: Array<USER_ERROR_TYPE>;
      };
    };
    if (!response?.customerCreate) {
      throw new Error('No data returned from the GraphQL query');
    }
    handleUserErrors(response?.customerCreate?.customerUserErrors);

    return response?.customerCreate;
  };

  customerDefaultAddressUpdate = async (variables: {
    customerAccessToken: string;
    addressId: string;
    language?: string;
  }): Promise<{
    customer: CUSTOMER_TYPE;
    customerUserErrors: Array<USER_ERROR_TYPE>;
  }> => {
    const response = (await this.call(customerQueries.customerDefaultAddressUpdate, variables)) as {
      customerDefaultAddressUpdate: {
        customer: CUSTOMER_TYPE;
        customerUserErrors: Array<USER_ERROR_TYPE>;
      };
    };

    if (!response?.customerDefaultAddressUpdate) {
      throw new Error('No data returned from the GraphQL query');
    }

    handleUserErrors(response?.customerDefaultAddressUpdate?.customerUserErrors);

    return response?.customerDefaultAddressUpdate;
  };

  customerRecover = async (variables: {
    email: string;
    language?: string;
  }): Promise<{
    customerUserErrors: Array<USER_ERROR_TYPE>;
  }> => {
    const response = (await this.call(customerQueries.customerRecover, variables)) as {
      customerRecover: {
        customerUserErrors: Array<USER_ERROR_TYPE>;
      };
    };
    if (!response?.customerRecover) {
      throw new Error('No data returned from the GraphQL query');
    }

    handleUserErrors(response?.customerRecover?.customerUserErrors);

    return response?.customerRecover;
  };

  customerReset = async (variables: {
    id: string;
    input: { password: string; resetToken: string };
    language?: string;
  }): Promise<{
    customer: CUSTOMER_TYPE;
    customerAccessToken: {
      accessToken: string;
      expiresAt: string;
    };
    customerUserErrors: Array<USER_ERROR_TYPE>;
  }> => {
    const response = (await this.call(customerQueries.customerReset, variables)) as {
      customerReset: {
        customer: CUSTOMER_TYPE;
        customerAccessToken: {
          accessToken: string;
          expiresAt: string;
        };
        customerUserErrors: Array<USER_ERROR_TYPE>;
      };
    };

    if (!response?.customerReset) {
      throw new Error('No data returned from the GraphQL query');
    }

    handleUserErrors(response?.customerReset?.customerUserErrors);

    return response?.customerReset;
  };

  customerResetByUrl = async (variables: {
    password: string;
    resetUrl: string;
    language?: string;
  }): Promise<{
    customer: CUSTOMER_TYPE;
    customerAccessToken: {
      accessToken: string;
      expiresAt: string;
    };
    customerUserErrors: Array<USER_ERROR_TYPE>;
  }> => {
    const response = (await this.call(customerQueries.customerResetByUrl, variables)) as {
      customerResetByUrl: {
        customer: CUSTOMER_TYPE;
        customerAccessToken: {
          accessToken: string;
          expiresAt: string;
        };
        customerUserErrors: Array<USER_ERROR_TYPE>;
      };
    };

    if (!response?.customerResetByUrl) {
      throw new Error('No data returned from the GraphQL query');
    }

    handleUserErrors(response?.customerResetByUrl?.customerUserErrors);

    return response?.customerResetByUrl;
  };

  customerUpdate = async (variables: {
    customerAccessToken: string;
    customer: CUSTOMER_CREATE_INPUT_TYPE;
    language?: string;
  }): Promise<{
    customer: CUSTOMER_TYPE;
    customerUserErrors: Array<USER_ERROR_TYPE>;
  }> => {
    const response = (await this.call(customerQueries.customerUpdate, variables)) as {
      customerUpdate: {
        customer: CUSTOMER_TYPE;
        customerUserErrors: Array<USER_ERROR_TYPE>;
      };
    };
    if (!response?.customerUpdate) {
      throw new Error('No data returned from the GraphQL query');
    }

    handleUserErrors(response?.customerUpdate?.customerUserErrors);

    return response?.customerUpdate;
  };

  queryCustomer = async (variables: {
    customerAccessToken: string;
    language?: string;
  }): Promise<CUSTOMER_TYPE> => {
    const response = (await this.call(customerQueries.queryCustomer, variables)) as {
      customer: CUSTOMER_TYPE;
      customerUserErrors: Array<USER_ERROR_TYPE>;
    };

    if (!response?.customer) {
      throw new Error('No data returned from the GraphQL query');
    }

    handleUserErrors(response?.customerUserErrors);

    return response?.customer;
  };

  queryCustomerMetafields = async (variables: {
    customerAccessToken: string;
    metafields?: METAFIELD_TYPE[];
    language?: string;
  }): Promise<Array<METAFIELD_TYPE>> => {
    const response = (await this.call(customerQueries.queryCustomerMetafields, variables)) as {
      customer: {
        metafields: Array<METAFIELD_TYPE>;
        customerUserErrors: Array<USER_ERROR_TYPE>;
      };
    };

    handleUserErrors(response?.customer?.customerUserErrors);

    if (!response?.customer?.metafields) {
      throw new Error('No metafields returned from the GraphQL query');
    }

    return response?.customer?.metafields?.filter(Boolean);
  };

  queryCustomerAddresses = async (variables: {
    customerAccessToken: string;
    first?: number;
    last?: number;
    before?: string;
    after?: string;
    language?: string;
  }): Promise<{
    addresses: Array<CUSTOMER_ADDRESS_TYPE>;
    pageInfo: PAGE_INFO_TYPE;
    totalCount: number;
  }> => {
    const response = (await this.call(
      customerQueries.queryCustomerAddresses,
      adjustPaginationVariables(variables)
    )) as {
      customer: {
        addresses: {
          edges: Array<{ cursor: string; node: CUSTOMER_ADDRESS_TYPE }>;
          pageInfo: PAGE_INFO_TYPE;
          totalCount: number;
        };
        customerUserErrors: Array<USER_ERROR_TYPE>;
      };
    };

    if (!response?.customer?.addresses) {
      throw new Error('No addresses returned from the GraphQL query');
    }

    handleUserErrors(response?.customer?.customerUserErrors);

    return cleanGraphQLResponse(response?.customer?.addresses);
  };

  queryCustomerOrders = async (variables: {
    customerAccessToken: string;
    first?: number;
    last?: number;
    before?: string;
    after?: string;
    sortKey?: string;
    reverse?: boolean;
    language: string;
  }): Promise<{
    orders: Array<CUSTOMER_ORDER_TYPE>;
  }> => {
    const response = (await this.call(
      customerQueries.queryCustomerOrders,
      adjustPaginationVariables(variables)
    )) as {
      customer: {
        orders: {
          edges: Array<{ cursor: string; node: CUSTOMER_ORDER_TYPE }>;
          pageInfo: PAGE_INFO_TYPE;
          totalCount: number;
        };
        customerUserErrors: Array<USER_ERROR_TYPE>;
      };
    };
    if (!response?.customer?.orders) {
      throw new Error('No orders returned from the GraphQL query');
    }
    handleUserErrors(response?.customer?.customerUserErrors);

    return cleanGraphQLResponse(response?.customer?.orders);
  };
}

export default Customer;
