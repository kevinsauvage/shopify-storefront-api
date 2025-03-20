import { cleanGraphQLResponse, adjustPaginationVariables, findPageInfo, findFilters, } from '../../helpers';
import ShopifyStorefrontApi from '../ShopifyStorefrontApi';
import collectionQueries from './collectionQueries';
class Collection extends ShopifyStorefrontApi {
    collection = async (variables) => {
        const variablesCopy = { ...variables };
        if (!variablesCopy?.identifiers) {
            variablesCopy.identifiers = [];
        }
        const response = (await this.call(collectionQueries.collection, adjustPaginationVariables(variablesCopy)));
        if (!response?.collection) {
            throw new Error('Collection not found');
        }
        const collection = response?.collection;
        if (collection && typeof collection === 'object') {
            const pageInfo = findPageInfo(collection.products);
            const collectionFilters = findFilters(collection.products);
            if (collectionFilters) {
                collection.filters = collectionFilters;
            }
            if (pageInfo) {
                collection.pageInfo = pageInfo;
            }
            return cleanGraphQLResponse(collection);
        }
        return null;
    };
    collections = async (variables) => {
        const variablesCopy = { ...variables };
        if (!variablesCopy?.identifiers) {
            variablesCopy.identifiers = [];
        }
        // TODO: fix firstProducts, afterProducts, beforeProducts, productsSortKey
        const response = (await this.call(collectionQueries.collections, adjustPaginationVariables(variablesCopy)));
        if (!response?.collections) {
            throw new Error('No data returned from the GraphQL query');
        }
        return {
            collections: cleanGraphQLResponse(response?.collections),
            pageInfo: response?.collections?.pageInfo,
        };
    };
}
export default Collection;
