import { adjustPaginationVariables, cleanGraphQLResponse } from '../../helpers';
import ShopifyStorefrontApi from '../ShopifyStorefrontApi';
import customerQueries from './customerQueries';
const DEFAULT_ERROR_MESSAGE = 'No data returned from the GraphQL query';
const handleUserErrors = (errors) => {
    if (errors?.length) {
        const errorMessages = errors.map((error) => error.message);
        throw new Error(`Customer user errors: ${errorMessages.join(', ')}`);
    }
};
class Customer extends ShopifyStorefrontApi {
    customerAccessTokenCreate = async (variables) => {
        const response = (await this.call(customerQueries.customerAccessTokenCreate, variables));
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
    customerAccessTokenCreateWithMultipass = async (variables) => {
        const response = (await this.call(customerQueries.customerAccessTokenCreateWithMultipass, variables));
        if (!response?.customerAccessTokenCreateWithMultipass) {
            throw new Error(DEFAULT_ERROR_MESSAGE);
        }
        const customerUserErrors = response?.customerAccessTokenCreateWithMultipass?.customerUserErrors;
        if (customerUserErrors?.length) {
            return {
                customerUserErrors,
                customerAccessToken: null,
            };
        }
        return response?.customerAccessTokenCreateWithMultipass;
    };
    customerAccessTokenDelete = async (variables) => {
        const response = (await this.call(customerQueries.customerAccessTokenDelete, variables));
        if (!response?.customerAccessTokenDelete) {
            throw new Error(DEFAULT_ERROR_MESSAGE);
        }
        const customerUserErrors = response?.customerAccessTokenDelete?.customerUserErrors;
        if (customerUserErrors?.length) {
            return {
                customerUserErrors,
                deletedAccessTokenId: null,
            };
        }
        return response?.customerAccessTokenDelete;
    };
    customerAccessTokenRenew = async (variables) => {
        const response = (await this.call(customerQueries.customerAccessTokenRenew, variables));
        if (!response?.customerAccessTokenRenew) {
            throw new Error(DEFAULT_ERROR_MESSAGE);
        }
        const userErrors = response?.customerAccessTokenRenew?.userErrors;
        if (userErrors?.length) {
            return {
                userErrors,
                customerAccessToken: null,
            };
        }
        return response?.customerAccessTokenRenew;
    };
    customerActivate = async (variables) => {
        const response = (await this.call(customerQueries.customerActivate, variables));
        if (!response?.customerActivate) {
            throw new Error(DEFAULT_ERROR_MESSAGE);
        }
        const customerUserErrors = response?.customerActivate?.customerUserErrors;
        if (customerUserErrors?.length) {
            return {
                customerUserErrors,
                customer: null,
                customerAccessToken: null,
            };
        }
        return response?.customerActivate;
    };
    customerActivateByUrl = async (variables) => {
        const response = (await this.call(customerQueries.customerActivateByUrl, variables));
        if (!response?.customerActivateByUrl) {
            throw new Error(DEFAULT_ERROR_MESSAGE);
        }
        const customerUserErrors = response?.customerActivateByUrl?.customerUserErrors;
        if (customerUserErrors?.length) {
            return {
                customerUserErrors,
                customer: null,
                customerAccessToken: null,
            };
        }
        return response?.customerActivateByUrl;
    };
    customerAddressCreate = async (variables) => {
        const response = (await this.call(customerQueries.customerAddressCreate, variables));
        if (!response?.customerAddressCreate) {
            throw new Error(DEFAULT_ERROR_MESSAGE);
        }
        const customerUserErrors = response?.customerAddressCreate?.customerUserErrors;
        if (customerUserErrors?.length) {
            return {
                customerUserErrors,
                customerAddress: null,
            };
        }
        return response?.customerAddressCreate;
    };
    customerAddressDelete = async (variables) => {
        const response = (await this.call(customerQueries.customerAddressDelete, variables));
        if (!response?.customerAddressDelete) {
            throw new Error(DEFAULT_ERROR_MESSAGE);
        }
        const customerUserErrors = response?.customerAddressDelete?.customerUserErrors;
        if (customerUserErrors?.length) {
            return {
                customerUserErrors,
                deletedCustomerAddressId: null,
            };
        }
        return response?.customerAddressDelete;
    };
    customerAddressUpdate = async (variables) => {
        const response = (await this.call(customerQueries.customerAddressUpdate, variables));
        if (!response?.customerAddressUpdate) {
            throw new Error(DEFAULT_ERROR_MESSAGE);
        }
        const customerUserErrors = response?.customerAddressUpdate?.userErrors;
        if (customerUserErrors?.length) {
            return {
                customerAddress: null,
                userErrors: customerUserErrors,
            };
        }
        return response?.customerAddressUpdate;
    };
    customerCreate = async (variables) => {
        const response = (await this.call(customerQueries.customerCreate, variables));
        if (!response?.customerCreate) {
            throw new Error(DEFAULT_ERROR_MESSAGE);
        }
        const customerUserErrors = response?.customerCreate?.customerUserErrors;
        if (customerUserErrors?.length) {
            return {
                customerUserErrors,
                customer: null,
                customerAccessToken: null,
            };
        }
        return response?.customerCreate;
    };
    customerDefaultAddressUpdate = async (variables) => {
        const response = (await this.call(customerQueries.customerDefaultAddressUpdate, variables));
        if (!response?.customerDefaultAddressUpdate) {
            throw new Error(DEFAULT_ERROR_MESSAGE);
        }
        const customerUserErrors = response?.customerDefaultAddressUpdate?.customerUserErrors;
        if (customerUserErrors?.length) {
            return {
                customerUserErrors,
                customer: null,
            };
        }
        return response?.customerDefaultAddressUpdate;
    };
    customerRecover = async (variables) => {
        const response = (await this.call(customerQueries.customerRecover, variables));
        if (!response?.customerRecover) {
            throw new Error(DEFAULT_ERROR_MESSAGE);
        }
        return response?.customerRecover;
    };
    customerReset = async (variables) => {
        const response = (await this.call(customerQueries.customerReset, variables));
        if (!response?.customerReset) {
            throw new Error(DEFAULT_ERROR_MESSAGE);
        }
        const customerUserErrors = response?.customerReset?.customerUserErrors;
        if (customerUserErrors?.length) {
            return {
                customerUserErrors,
                customer: null,
                customerAccessToken: null,
            };
        }
        return response?.customerReset;
    };
    customerResetByUrl = async (variables) => {
        const response = (await this.call(customerQueries.customerResetByUrl, variables));
        if (!response?.customerResetByUrl) {
            throw new Error(DEFAULT_ERROR_MESSAGE);
        }
        const customerUserErrors = response?.customerResetByUrl?.customerUserErrors;
        if (customerUserErrors?.length) {
            return {
                customerUserErrors,
                customer: null,
                customerAccessToken: null,
            };
        }
        return response?.customerResetByUrl;
    };
    customerUpdate = async (variables) => {
        const response = (await this.call(customerQueries.customerUpdate, variables));
        if (!response?.customerUpdate) {
            throw new Error(DEFAULT_ERROR_MESSAGE);
        }
        const customerUserErrors = response?.customerUpdate?.customerUserErrors;
        if (customerUserErrors?.length) {
            return {
                customerUserErrors,
                customer: null,
            };
        }
        return response?.customerUpdate;
    };
    queryCustomer = async (variables) => {
        const response = (await this.call(customerQueries.queryCustomer, variables));
        return response?.customer;
    };
    queryCustomerMetafields = async (variables) => {
        const response = (await this.call(customerQueries.queryCustomerMetafields, variables));
        handleUserErrors(response?.customer?.customerUserErrors);
        if (!response?.customer?.metafields) {
            throw new Error('No metafields returned from the GraphQL query');
        }
        return response?.customer?.metafields?.filter(Boolean);
    };
    queryCustomerAddresses = async (variables) => {
        const response = (await this.call(customerQueries.queryCustomerAddresses, adjustPaginationVariables(variables)));
        if (!response?.customer?.addresses) {
            throw new Error('No addresses returned from the GraphQL query');
        }
        const customerUserErrors = response?.customer?.customerUserErrors;
        if (customerUserErrors?.length) {
            return {
                addresses: [],
                pageInfo: null,
                totalCount: 0,
            };
        }
        return cleanGraphQLResponse(response?.customer?.addresses);
    };
    queryCustomerOrders = async (variables) => {
        const response = (await this.call(customerQueries.queryCustomerOrders, adjustPaginationVariables(variables)));
        if (!response?.customer?.orders) {
            throw new Error('No orders returned from the GraphQL query');
        }
        const customerUserErrors = response?.customer?.customerUserErrors;
        if (customerUserErrors?.length) {
            return {
                orders: [],
                customerUserErrors,
            };
        }
        return { orders: cleanGraphQLResponse(response?.customer?.orders), customerUserErrors };
    };
}
export default Customer;
