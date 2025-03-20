import { adjustPaginationVariables, cleanGraphQLResponse } from '../../helpers';
import ShopifyStorefrontApi from '../ShopifyStorefrontApi';
import cartQueries from './cartQueries';
const DEFAULT_ERROR_MESSAGE = 'No data returned from the GraphQL query';
class Cart extends ShopifyStorefrontApi {
    cartAttributesUpdate = async (variables) => {
        const response = (await this.call(cartQueries.cartAttributesUpdate, adjustPaginationVariables(variables)));
        if (!response?.cartAttributesUpdate) {
            throw new Error(DEFAULT_ERROR_MESSAGE);
        }
        return cleanGraphQLResponse(response?.cartAttributesUpdate);
    };
    cartBuyerIdentityUpdate = async (variables) => {
        const response = (await this.call(cartQueries.cartBuyerIdentityUpdate, adjustPaginationVariables(variables)));
        if (!response?.cartBuyerIdentityUpdate) {
            throw new Error(DEFAULT_ERROR_MESSAGE);
        }
        return cleanGraphQLResponse(response?.cartBuyerIdentityUpdate);
    };
    cartCreate = async (variables) => {
        const response = (await this.call(cartQueries.cartCreate, adjustPaginationVariables(variables)));
        if (!response?.cartCreate) {
            throw new Error(DEFAULT_ERROR_MESSAGE);
        }
        return cleanGraphQLResponse(response?.cartCreate);
    };
    cartDiscountCodesUpdate = async (variables) => {
        const response = (await this.call(cartQueries.cartDiscountCodesUpdate, adjustPaginationVariables(variables)));
        if (!response?.cartDiscountCodesUpdate) {
            throw new Error(DEFAULT_ERROR_MESSAGE);
        }
        return cleanGraphQLResponse(response?.cartDiscountCodesUpdate);
    };
    cartLinesAdd = async (variables) => {
        const response = (await this.call(cartQueries.cartLinesAdd, adjustPaginationVariables(variables)));
        if (!response?.cartLinesAdd) {
            throw new Error(DEFAULT_ERROR_MESSAGE);
        }
        return cleanGraphQLResponse(response?.cartLinesAdd);
    };
    cartLinesRemove = async (variables) => {
        const response = (await this.call(cartQueries.cartLinesRemove, adjustPaginationVariables(variables)));
        if (!response?.cartLinesRemove) {
            throw new Error(DEFAULT_ERROR_MESSAGE);
        }
        return cleanGraphQLResponse(response?.cartLinesRemove);
    };
    cartLinesUpdate = async (variables) => {
        const response = (await this.call(cartQueries.cartLinesUpdate, adjustPaginationVariables(variables)));
        if (!response?.cartLinesUpdate) {
            throw new Error(DEFAULT_ERROR_MESSAGE);
        }
        return cleanGraphQLResponse(response?.cartLinesUpdate);
    };
    cartNoteUpdate = async (variables) => {
        const response = (await this.call(cartQueries.cartNoteUpdate, adjustPaginationVariables(variables)));
        if (!response?.cartNoteUpdate) {
            throw new Error(DEFAULT_ERROR_MESSAGE);
        }
        return cleanGraphQLResponse(response?.cartNoteUpdate);
    };
    cartQuery = async (variables) => {
        const response = (await this.call(cartQueries.cartQuery, adjustPaginationVariables(variables)));
        if (!response?.cart) {
            throw new Error(DEFAULT_ERROR_MESSAGE);
        }
        return cleanGraphQLResponse(response?.cart);
    };
    checkoutURL = async (variables) => {
        const response = (await this.call(cartQueries.checkoutURL, variables));
        if (!response?.cart) {
            throw new Error(DEFAULT_ERROR_MESSAGE);
        }
        return cleanGraphQLResponse(response?.cart);
    };
}
export default Cart;
