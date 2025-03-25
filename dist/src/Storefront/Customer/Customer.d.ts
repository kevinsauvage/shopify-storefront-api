import ShopifyStorefrontApi from '../ShopifyStorefrontApi';
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
declare class Customer extends ShopifyStorefrontApi {
    customerAccessTokenCreate: (variables: {
        input: {
            email: string;
            password: string;
        };
        language?: string;
    }) => Promise<CustomerAccessTokenCreateType>;
    customerAccessTokenCreateWithMultipass: (variables: {
        multipassToken: string;
        language?: string;
    }) => Promise<CustomerAccessTokenCreateType>;
    customerAccessTokenDelete: (variables: {
        customerAccessToken: string;
        language?: string;
    }) => Promise<CustomerAccessTokenDeleteType>;
    customerAccessTokenRenew: (variables: {
        customerAccessToken: string;
        language?: string;
    }) => Promise<{
        customerAccessToken: {
            accessToken: string;
            expiresAt: string;
        };
        userErrors: Array<UserErrorType>;
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
        customerUserErrors: Array<UserErrorType>;
    }>;
    customerActivateByUrl: (variables: {
        activationUrl: string;
        password: string;
        language?: string;
    }) => Promise<CustomerActivateByUrlType>;
    customerAddressCreate: (variables: {
        address: CustomerAddressInputType;
        customerAccessToken: string;
        language?: string;
    }) => Promise<{
        customerAddress: MailingAddressType | null;
        customerUserErrors: Array<UserErrorType>;
    }>;
    customerAddressDelete: (variables: {
        customerAccessToken: string;
        addressId: string;
        language?: string;
    }) => Promise<{
        deletedCustomerAddressId: string | null;
        customerUserErrors: Array<UserErrorType>;
    }>;
    customerAddressUpdate: (variables: {
        address: CustomerAddressInputType;
        customerAccessToken: string;
        language?: string;
    }) => Promise<{
        customerAddress: MailingAddressType | null;
        userErrors: Array<UserErrorType>;
    }>;
    customerCreate: (variables: {
        input: CustomerCreateInputType;
        language?: string;
    }) => Promise<{
        customer: CustomerType | null;
        customerAccessToken: {
            accessToken: string;
            expiresAt: string;
        } | null;
        customerUserErrors: Array<UserErrorType>;
    }>;
    customerDefaultAddressUpdate: (variables: {
        customerAccessToken: string;
        addressId: string;
        language?: string;
    }) => Promise<{
        customer: CustomerType | null;
        customerUserErrors: Array<UserErrorType>;
    }>;
    customerRecover: (variables: {
        email: string;
        language?: string;
    }) => Promise<{
        customerUserErrors: Array<UserErrorType>;
    }>;
    customerReset: (variables: {
        id: string;
        input: {
            password: string;
            resetToken: string;
        };
        language?: string;
    }) => Promise<{
        customer: CustomerType | null;
        customerAccessToken: {
            accessToken: string;
            expiresAt: string;
        } | null;
        customerUserErrors: Array<UserErrorType>;
    }>;
    customerResetByUrl: (variables: {
        password: string;
        resetUrl: string;
        language?: string;
    }) => Promise<{
        customer: CustomerType | null;
        customerAccessToken: {
            accessToken: string;
            expiresAt: string;
        } | null;
        customerUserErrors: Array<UserErrorType>;
    }>;
    customerUpdate: (variables: {
        customerAccessToken: string;
        customer: CustomerCreateInputType;
        language?: string;
    }) => Promise<{
        customer: CustomerType | null;
        customerUserErrors: Array<UserErrorType>;
    }>;
    queryCustomer: (variables: {
        customerAccessToken: string;
        language?: string;
    }) => Promise<CustomerType>;
    queryCustomerMetafields: (variables: {
        customerAccessToken: string;
        metafields?: MetafieldType[];
        language?: string;
    }) => Promise<Array<MetafieldType>>;
    queryCustomerAddresses: (variables: {
        customerAccessToken: string;
        first?: number;
        last?: number;
        before?: string;
        after?: string;
        language?: string;
    }) => Promise<{
        addresses: Array<MailingAddressType>;
        pageInfo: PageInfoType | null;
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
        orders: Array<CustomerOrderType>;
        customerUserErrors: Array<UserErrorType>;
        pageInfo: PageInfoType | null;
    }>;
}
export default Customer;
