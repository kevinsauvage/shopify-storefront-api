import { adjustPaginationVariables, cleanGraphQLResponse } from '../../helpers';
import ShopifyStorefrontApi from '../ShopifyStorefrontApi';
import customerQueries from './customerQueries';
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
            throw new Error('No data returned from the GraphQL query');
        }
        handleUserErrors(response?.customerAccessTokenCreate?.customerUserErrors);
        return response?.customerAccessTokenCreate;
    };
    customerAccessTokenCreateWithMultipass = async (variables) => {
        const response = (await this.call(customerQueries.customerAccessTokenCreateWithMultipass, variables));
        if (!response?.customerAccessTokenCreateWithMultipass) {
            throw new Error('No data returned from the GraphQL query');
        }
        handleUserErrors(response?.customerAccessTokenCreateWithMultipass?.customerUserErrors);
        return response?.customerAccessTokenCreateWithMultipass;
    };
    customerAccessTokenDelete = async (variables) => {
        const response = (await this.call(customerQueries.customerAccessTokenDelete, variables));
        if (!response?.customerAccessTokenDelete) {
            throw new Error('No data returned from the GraphQL query');
        }
        handleUserErrors(response?.customerAccessTokenDelete?.customerUserErrors);
        return response?.customerAccessTokenDelete;
    };
    customerAccessTokenRenew = async (variables) => {
        const response = (await this.call(customerQueries.customerAccessTokenRenew, variables));
        if (!response?.customerAccessTokenRenew) {
            throw new Error('No data returned from the GraphQL query');
        }
        handleUserErrors(response?.customerAccessTokenRenew?.userErrors);
        return response?.customerAccessTokenRenew;
    };
    customerActivate = async (variables) => {
        const response = (await this.call(customerQueries.customerActivate, variables));
        if (!response?.customerActivate) {
            throw new Error('No data returned from the GraphQL query');
        }
        handleUserErrors(response?.customerActivate?.customerUserErrors);
        return response?.customerActivate;
    };
    customerActivateByUrl = async (variables) => {
        const response = (await this.call(customerQueries.customerActivateByUrl, variables));
        if (!response?.customerActivateByUrl) {
            throw new Error('No data returned from the GraphQL query');
        }
        handleUserErrors(response?.customerActivateByUrl?.customerUserErrors);
        return response?.customerActivateByUrl;
    };
    customerAddressCreate = async (variables) => {
        const response = (await this.call(customerQueries.customerAddressCreate, variables));
        if (!response?.customerAddressCreate) {
            throw new Error('No data returned from the GraphQL query');
        }
        handleUserErrors(response?.customerAddressCreate?.customerUserErrors);
        return response?.customerAddressCreate;
    };
    customerAddressDelete = async (variables) => {
        const response = (await this.call(customerQueries.customerAddressDelete, variables));
        if (!response?.customerAddressDelete) {
            throw new Error('No data returned from the GraphQL query');
        }
        handleUserErrors(response?.customerAddressDelete?.customerUserErrors);
        return response?.customerAddressDelete;
    };
    customerAddressUpdate = async (variables) => {
        const response = (await this.call(customerQueries.customerAddressUpdate, variables));
        if (!response?.customerAddressUpdate) {
            throw new Error('No data returned from the GraphQL query');
        }
        handleUserErrors(response?.customerAddressUpdate?.userErrors);
        return response?.customerAddressUpdate;
    };
    customerCreate = async (variables) => {
        const response = (await this.call(customerQueries.customerCreate, variables));
        if (!response?.customerCreate) {
            throw new Error('No data returned from the GraphQL query');
        }
        handleUserErrors(response?.customerCreate?.customerUserErrors);
        return response?.customerCreate;
    };
    customerDefaultAddressUpdate = async (variables) => {
        const response = (await this.call(customerQueries.customerDefaultAddressUpdate, variables));
        if (!response?.customerDefaultAddressUpdate) {
            throw new Error('No data returned from the GraphQL query');
        }
        handleUserErrors(response?.customerDefaultAddressUpdate?.customerUserErrors);
        return response?.customerDefaultAddressUpdate;
    };
    customerRecover = async (variables) => {
        const response = (await this.call(customerQueries.customerRecover, variables));
        if (!response?.customerRecover) {
            throw new Error('No data returned from the GraphQL query');
        }
        handleUserErrors(response?.customerRecover?.customerUserErrors);
        return response?.customerRecover;
    };
    customerReset = async (variables) => {
        const response = (await this.call(customerQueries.customerReset, variables));
        if (!response?.customerReset) {
            throw new Error('No data returned from the GraphQL query');
        }
        handleUserErrors(response?.customerReset?.customerUserErrors);
        return response?.customerReset;
    };
    customerResetByUrl = async (variables) => {
        const response = (await this.call(customerQueries.customerResetByUrl, variables));
        if (!response?.customerResetByUrl) {
            throw new Error('No data returned from the GraphQL query');
        }
        handleUserErrors(response?.customerResetByUrl?.customerUserErrors);
        return response?.customerResetByUrl;
    };
    customerUpdate = async (variables) => {
        const response = (await this.call(customerQueries.customerUpdate, variables));
        if (!response?.customerUpdate) {
            throw new Error('No data returned from the GraphQL query');
        }
        handleUserErrors(response?.customerUpdate?.customerUserErrors);
        return response?.customerUpdate;
    };
    queryCustomer = async (variables) => {
        const response = (await this.call(customerQueries.queryCustomer, variables));
        if (!response?.customer) {
            throw new Error('No data returned from the GraphQL query');
        }
        handleUserErrors(response?.customerUserErrors);
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
        handleUserErrors(response?.customer?.customerUserErrors);
        return cleanGraphQLResponse(response?.customer?.addresses);
    };
    queryCustomerOrders = async (variables) => {
        const response = (await this.call(customerQueries.queryCustomerOrders, adjustPaginationVariables(variables)));
        if (!response?.customer?.orders) {
            throw new Error('No orders returned from the GraphQL query');
        }
        handleUserErrors(response?.customer?.customerUserErrors);
        return cleanGraphQLResponse(response?.customer?.orders);
    };
}
export default Customer;
