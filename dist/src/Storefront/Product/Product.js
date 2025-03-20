import { cleanGraphQLResponse, adjustPaginationVariables } from '../../helpers';
import ShopifyStorefrontApi from '../ShopifyStorefrontApi';
import productQueries from './productQueries';
class Product extends ShopifyStorefrontApi {
    getProductByHandle = async (variables) => {
        if (!variables?.identifiers) {
            variables.identifiers = [];
        }
        const response = (await this.call(productQueries.getProductByHandle, variables));
        if (!response?.product) {
            throw new Error('Product not found');
        }
        return cleanGraphQLResponse(response?.product);
    };
    productRecommendations = async (variables) => {
        if (!variables?.identifiers) {
            variables.identifiers = [];
        }
        const response = (await this.call(productQueries.productRecommendations, variables));
        if (!response?.productRecommendations) {
            throw new Error('No data returned from the GraphQL query');
        }
        return cleanGraphQLResponse(response.productRecommendations);
    };
    getProducts = async (variables) => {
        if (!variables?.identifiers) {
            variables.identifiers = [];
        }
        const response = (await this.call(productQueries.queryProducts, adjustPaginationVariables(variables)));
        if (!response?.products) {
            throw new Error('No data returned from the GraphQL query');
        }
        return {
            products: cleanGraphQLResponse(response?.products),
            pageInfo: response?.products?.pageInfo,
        };
    };
}
export default Product;
