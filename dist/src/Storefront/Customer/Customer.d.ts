import ShopifyStorefrontApi from '../ShopifyStorefrontApi';
type CUSTOMER_ACTIVATE_BY_URL = {
    customer: {
        id: string;
        email: string;
    } | null;
    customerAccessToken: {
        accessToken: string;
        expiresAt: string;
    } | null;
    customerUserErrors: Array<USER_ERROR_TYPE>;
};
declare class Customer extends ShopifyStorefrontApi {
    customerAccessTokenCreate: (variables: {
        input: {
            email: string;
            password: string;
        };
        language?: string;
    }) => Promise<{
        customerAccessToken: {
            accessToken: string;
        } | null;
        customerUserErrors: Array<USER_ERROR_TYPE>;
    }>;
    customerAccessTokenCreateWithMultipass: (variables: {
        multipassToken: string;
        language?: string;
    }) => Promise<{
        customerAccessToken: {
            accessToken: string;
        } | null;
        customerUserErrors: Array<USER_ERROR_TYPE>;
    }>;
    customerAccessTokenDelete: (variables: {
        customerAccessToken: string;
        language?: string;
    }) => Promise<{
        deletedAccessTokenId: string | null;
        customerUserErrors: Array<USER_ERROR_TYPE>;
    }>;
    customerAccessTokenRenew: (variables: {
        customerAccessToken: string;
        language?: string;
    }) => Promise<{
        customerAccessToken: {
            accessToken: string;
            expiresAt: string;
        };
        userErrors: Array<USER_ERROR_TYPE>;
    }>;
    customerActivate: (variables: {
        id: string;
        input: {
            password: string;
        };
        language?: string;
    }) => Promise<{
        customer: {
            id: string;
            email: string;
        } | null;
        customerAccessToken: {
            accessToken: string;
            expiresAt: string;
        } | null;
        customerUserErrors: Array<USER_ERROR_TYPE>;
    }>;
    customerActivateByUrl: (variables: {
        activationUrl: string;
        password: string;
        language?: string;
    }) => Promise<CUSTOMER_ACTIVATE_BY_URL>;
    customerAddressCreate: (variables: {
        address: CUSTOMER_ADDRESS_INPUT_TYPE;
        customerAccessToken: string;
        language?: string;
    }) => Promise<{
        customerAddress: CUSTOMER_ADDRESS_TYPE | null;
        customerUserErrors: Array<USER_ERROR_TYPE>;
    }>;
    customerAddressDelete: (variables: {
        customerAccessToken: string;
        addressId: string;
        language?: string;
    }) => Promise<{
        deletedCustomerAddressId: string | null;
        customerUserErrors: Array<USER_ERROR_TYPE>;
    }>;
    customerAddressUpdate: (variables: {
        address: CUSTOMER_ADDRESS_INPUT_TYPE;
        customerAccessToken: string;
        language?: string;
    }) => Promise<{
        customerAddress: CUSTOMER_ADDRESS_TYPE | null;
        userErrors: Array<USER_ERROR_TYPE>;
    }>;
    customerCreate: (variables: {
        input: CUSTOMER_CREATE_INPUT_TYPE;
        language?: string;
    }) => Promise<{
        customer: CUSTOMER_TYPE | null;
        customerAccessToken: {
            accessToken: string;
            expiresAt: string;
        } | null;
        customerUserErrors: Array<USER_ERROR_TYPE>;
    }>;
    customerDefaultAddressUpdate: (variables: {
        customerAccessToken: string;
        addressId: string;
        language?: string;
    }) => Promise<{
        customer: CUSTOMER_TYPE | null;
        customerUserErrors: Array<USER_ERROR_TYPE>;
    }>;
    customerRecover: (variables: {
        email: string;
        language?: string;
    }) => Promise<{
        customerUserErrors: Array<USER_ERROR_TYPE>;
    }>;
    customerReset: (variables: {
        id: string;
        input: {
            password: string;
            resetToken: string;
        };
        language?: string;
    }) => Promise<{
        customer: CUSTOMER_TYPE | null;
        customerAccessToken: {
            accessToken: string;
            expiresAt: string;
        } | null;
        customerUserErrors: Array<USER_ERROR_TYPE>;
    }>;
    customerResetByUrl: (variables: {
        password: string;
        resetUrl: string;
        language?: string;
    }) => Promise<{
        customer: CUSTOMER_TYPE | null;
        customerAccessToken: {
            accessToken: string;
            expiresAt: string;
        } | null;
        customerUserErrors: Array<USER_ERROR_TYPE>;
    }>;
    customerUpdate: (variables: {
        customerAccessToken: string;
        customer: CUSTOMER_CREATE_INPUT_TYPE;
        language?: string;
    }) => Promise<{
        customer: CUSTOMER_TYPE | null;
        customerUserErrors: Array<USER_ERROR_TYPE>;
    }>;
    queryCustomer: (variables: {
        customerAccessToken: string;
        language?: string;
    }) => Promise<CUSTOMER_TYPE>;
    queryCustomerMetafields: (variables: {
        customerAccessToken: string;
        metafields?: METAFIELD_TYPE[];
        language?: string;
    }) => Promise<Array<METAFIELD_TYPE>>;
    queryCustomerAddresses: (variables: {
        customerAccessToken: string;
        first?: number;
        last?: number;
        before?: string;
        after?: string;
        language?: string;
    }) => Promise<{
        addresses: Array<CUSTOMER_ADDRESS_TYPE>;
        pageInfo: PAGE_INFO_TYPE | null;
        totalCount: number;
    }>;
    queryCustomerOrders: (variables: {
        customerAccessToken: string;
        first?: number;
        last?: number;
        before?: string;
        after?: string;
        sortKey?: string;
        reverse?: boolean;
        language: string;
    }) => Promise<{
        orders: Array<CUSTOMER_ORDER_TYPE>;
        customerUserErrors: Array<USER_ERROR_TYPE>;
        pageInfo: PAGE_INFO_TYPE | null;
    }>;
}
export default Customer;
