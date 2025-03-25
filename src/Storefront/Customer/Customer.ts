import { adjustPaginationVariables, cleanGraphQLResponse, findPageInfo } from '../../helpers';
import ShopifyStorefrontApi from '../ShopifyStorefrontApi';
import customerQueries from './customerQueries';

const DEFAULT_ERROR_MESSAGE = 'No data returned from the GraphQL query';

type CustomerActivateByUrlType = {
  customer: {
    id: string;
    email: string;
  } | null;
  customerAccessToken: CustomerAccessTokenType | null;
  customerUserErrors: Array<UserErrorType>;
};

type CustomerAccessTokenCreateType = {
  customerAccessToken: CustomerAccessTokenType | null;
  customerUserErrors: Array<UserErrorType>;
};

type CustomerAccessTokenDeleteType = {
  deletedAccessTokenId: string;
  customerUserErrors: Array<UserErrorType>;
};

class Customer extends ShopifyStorefrontApi {
  customerAccessTokenCreate = async (variables: {
    input: { email: string; password: string };
    language?: string;
  }): Promise<CustomerAccessTokenCreateType> => {
    const response = (await this.call(customerQueries.customerAccessTokenCreate, variables)) as {
      customerAccessTokenCreate: CustomerAccessTokenCreateType;
    };

    if (!response?.customerAccessTokenCreate) {
      throw new Error(DEFAULT_ERROR_MESSAGE);
    }

    const customerUserErrors = response?.customerAccessTokenCreate?.customerUserErrors;

    if (customerUserErrors?.length) {
      return {
        customerUserErrors,
        customerAccessToken: null,
      };
    }

    return response?.customerAccessTokenCreate;
  };

  customerAccessTokenCreateWithMultipass = async (variables: {
    multipassToken: string;
    language?: string;
  }): Promise<CustomerAccessTokenCreateType> => {
    const response = (await this.call(
      customerQueries.customerAccessTokenCreateWithMultipass,
      variables
    )) as { customerAccessTokenCreateWithMultipass: CustomerAccessTokenCreateType };

    if (!response?.customerAccessTokenCreateWithMultipass) {
      throw new Error(DEFAULT_ERROR_MESSAGE);
    }

    return response?.customerAccessTokenCreateWithMultipass;
  };

  customerAccessTokenDelete = async (variables: {
    customerAccessToken: string;
    language?: string;
  }): Promise<CustomerAccessTokenDeleteType> => {
    const response = (await this.call(customerQueries.customerAccessTokenDelete, variables)) as {
      customerAccessTokenDelete: CustomerAccessTokenDeleteType;
    };

    if (!response?.customerAccessTokenDelete) {
      throw new Error(DEFAULT_ERROR_MESSAGE);
    }

    return response?.customerAccessTokenDelete;
  };

  customerAccessTokenRenew = async (variables: {
    customerAccessToken: string;
    language?: string;
  }): Promise<{
    customerAccessToken: {
      accessToken: string;
      expiresAt: string;
    };
    userErrors: Array<UserErrorType>;
  }> => {
    const response = (await this.call(customerQueries.customerAccessTokenRenew, variables)) as {
      customerAccessTokenRenew: {
        customerAccessToken: {
          accessToken: string;
          expiresAt: string;
        };
        userErrors: Array<UserErrorType>;
      };
    };

    if (!response?.customerAccessTokenRenew) {
      throw new Error(DEFAULT_ERROR_MESSAGE);
    }

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
    } | null;
    customerAccessToken: {
      accessToken: string;
      expiresAt: string;
    } | null;
    customerUserErrors: Array<UserErrorType>;
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
        customerUserErrors: Array<UserErrorType>;
      };
    };

    if (!response?.customerActivate) {
      throw new Error(DEFAULT_ERROR_MESSAGE);
    }

    return response?.customerActivate;
  };

  customerActivateByUrl = async (variables: {
    activationUrl: string;
    password: string;
    language?: string;
  }): Promise<CustomerActivateByUrlType> => {
    const response = (await this.call(customerQueries.customerActivateByUrl, variables)) as {
      customerActivateByUrl: CustomerActivateByUrlType;
    };

    if (!response?.customerActivateByUrl) {
      throw new Error(DEFAULT_ERROR_MESSAGE);
    }

    return response?.customerActivateByUrl;
  };

  customerAddressCreate = async (variables: {
    address: CustomerAddressInputType;
    customerAccessToken: string;
    language?: string;
  }): Promise<{
    customerAddress: MailingAddressType | null;
    customerUserErrors: Array<UserErrorType>;
  }> => {
    const response = (await this.call(customerQueries.customerAddressCreate, variables)) as {
      customerAddressCreate: {
        customerAddress: MailingAddressType;
        customerUserErrors: Array<UserErrorType>;
      };
    };

    if (!response?.customerAddressCreate) {
      throw new Error(DEFAULT_ERROR_MESSAGE);
    }

    return response?.customerAddressCreate;
  };

  customerAddressDelete = async (variables: {
    customerAccessToken: string;
    addressId: string;
    language?: string;
  }): Promise<{
    deletedCustomerAddressId: string | null;
    customerUserErrors: Array<UserErrorType>;
  }> => {
    const response = (await this.call(customerQueries.customerAddressDelete, variables)) as {
      customerAddressDelete: {
        deletedCustomerAddressId: string;
        customerUserErrors: Array<UserErrorType>;
      };
    };
    if (!response?.customerAddressDelete) {
      throw new Error(DEFAULT_ERROR_MESSAGE);
    }

    return response?.customerAddressDelete;
  };

  customerAddressUpdate = async (variables: {
    address: CustomerAddressInputType;
    customerAccessToken: string;
    language?: string;
  }): Promise<{
    customerAddress: MailingAddressType | null;
    userErrors: Array<UserErrorType>;
  }> => {
    const response = (await this.call(customerQueries.customerAddressUpdate, variables)) as {
      customerAddressUpdate: {
        customerAddress: MailingAddressType;
        userErrors: Array<UserErrorType>;
      };
    };

    if (!response?.customerAddressUpdate) {
      throw new Error(DEFAULT_ERROR_MESSAGE);
    }

    return response?.customerAddressUpdate;
  };

  customerCreate = async (variables: {
    input: CustomerCreateInputType;
    language?: string;
  }): Promise<{
    customer: CustomerType | null;
    customerAccessToken: {
      accessToken: string;
      expiresAt: string;
    } | null;
    customerUserErrors: Array<UserErrorType>;
  }> => {
    const response = (await this.call(customerQueries.customerCreate, variables)) as {
      customerCreate: {
        customer: CustomerType;
        customerAccessToken: {
          accessToken: string;
          expiresAt: string;
        };
        customerUserErrors: Array<UserErrorType>;
      };
    };
    if (!response?.customerCreate) {
      throw new Error(DEFAULT_ERROR_MESSAGE);
    }

    return response?.customerCreate;
  };

  customerDefaultAddressUpdate = async (variables: {
    customerAccessToken: string;
    addressId: string;
    language?: string;
  }): Promise<{
    customer: CustomerType | null;
    customerUserErrors: Array<UserErrorType>;
  }> => {
    const response = (await this.call(customerQueries.customerDefaultAddressUpdate, variables)) as {
      customerDefaultAddressUpdate: {
        customer: CustomerType;
        customerUserErrors: Array<UserErrorType>;
      };
    };

    if (!response?.customerDefaultAddressUpdate) {
      throw new Error(DEFAULT_ERROR_MESSAGE);
    }

    return response?.customerDefaultAddressUpdate;
  };

  customerRecover = async (variables: {
    email: string;
    language?: string;
  }): Promise<{
    customerUserErrors: Array<UserErrorType>;
  }> => {
    const response = (await this.call(customerQueries.customerRecover, variables)) as {
      customerRecover: {
        customerUserErrors: Array<UserErrorType>;
      };
    };
    if (!response?.customerRecover) {
      throw new Error(DEFAULT_ERROR_MESSAGE);
    }

    return response?.customerRecover;
  };

  customerReset = async (variables: {
    id: string;
    input: { password: string; resetToken: string };
    language?: string;
  }): Promise<{
    customer: CustomerType | null;
    customerAccessToken: {
      accessToken: string;
      expiresAt: string;
    } | null;
    customerUserErrors: Array<UserErrorType>;
  }> => {
    const response = (await this.call(customerQueries.customerReset, variables)) as {
      customerReset: {
        customer: CustomerType;
        customerAccessToken: {
          accessToken: string;
          expiresAt: string;
        };
        customerUserErrors: Array<UserErrorType>;
      };
    };

    if (!response?.customerReset) {
      throw new Error(DEFAULT_ERROR_MESSAGE);
    }

    return response?.customerReset;
  };

  customerResetByUrl = async (variables: {
    password: string;
    resetUrl: string;
    language?: string;
  }): Promise<{
    customer: CustomerType | null;
    customerAccessToken: {
      accessToken: string;
      expiresAt: string;
    } | null;
    customerUserErrors: Array<UserErrorType>;
  }> => {
    const response = (await this.call(customerQueries.customerResetByUrl, variables)) as {
      customerResetByUrl: {
        customer: CustomerType;
        customerAccessToken: {
          accessToken: string;
          expiresAt: string;
        };
        customerUserErrors: Array<UserErrorType>;
      };
    };

    if (!response?.customerResetByUrl) {
      throw new Error(DEFAULT_ERROR_MESSAGE);
    }

    return response?.customerResetByUrl;
  };

  customerUpdate = async (variables: {
    customerAccessToken: string;
    customer: CustomerCreateInputType;
    language?: string;
  }): Promise<{
    customer: CustomerType | null;
    customerUserErrors: Array<UserErrorType>;
  }> => {
    const response = (await this.call(customerQueries.customerUpdate, variables)) as {
      customerUpdate: {
        customer: CustomerType;
        customerUserErrors: Array<UserErrorType>;
      };
    };
    if (!response?.customerUpdate) {
      throw new Error(DEFAULT_ERROR_MESSAGE);
    }

    return response?.customerUpdate;
  };

  queryCustomer = async (variables: {
    customerAccessToken: string;
    language?: string;
  }): Promise<CustomerType> => {
    const response = (await this.call(customerQueries.queryCustomer, variables)) as {
      customer: CustomerType;
    };

    return response?.customer;
  };

  queryCustomerMetafields = async (variables: {
    customerAccessToken: string;
    metafields?: MetafieldType[];
    language?: string;
  }): Promise<Array<MetafieldType>> => {
    const response = (await this.call(customerQueries.queryCustomerMetafields, variables)) as {
      customer: {
        metafields: Array<MetafieldType>;
        customerUserErrors: Array<UserErrorType>;
      };
    };

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
    addresses: Array<MailingAddressType>;
    pageInfo: PageInfoType | null;
    totalCount: number;
  }> => {
    const response = (await this.call(
      customerQueries.queryCustomerAddresses,
      adjustPaginationVariables(variables)
    )) as {
      customer: {
        addresses: {
          edges: Array<{ cursor: string; node: MailingAddressType }>;
          pageInfo: PageInfoType;
          totalCount: number;
        };
        customerUserErrors: Array<UserErrorType>;
      };
    };

    if (!response?.customer?.addresses) {
      throw new Error('No addresses returned from the GraphQL query');
    }

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
    orders: Array<CustomerOrderType>;
    customerUserErrors: Array<UserErrorType>;
    pageInfo: PageInfoType | null;
  }> => {
    const response = (await this.call(
      customerQueries.queryCustomerOrders,
      adjustPaginationVariables(variables)
    )) as {
      customer: {
        orders: {
          edges: Array<{ cursor: string; node: CustomerOrderType }>;
          pageInfo: PageInfoType;
          totalCount: number;
        };
        customerUserErrors: Array<UserErrorType>;
      };
    };
    if (!response?.customer?.orders) {
      throw new Error('No orders returned from the GraphQL query');
    }

    const pageInfo = findPageInfo(response?.customer?.orders);

    const customerUserErrors = response?.customer?.customerUserErrors;

    return {
      orders: cleanGraphQLResponse(response?.customer?.orders),
      customerUserErrors,
      pageInfo,
    };
  };
}

export default Customer;
