import {
  cleanGraphQLResponse,
  adjustPaginationVariables,
  findPageInfo,
  findFilters,
} from '../../helpers';
import ShopifyStorefrontApi from '../ShopifyStorefrontApi';
import collectionQueries from './collectionQueries';

class Collection extends ShopifyStorefrontApi {
  collection = async (variables: {
    handle: string;
    filters?: unknown | undefined;
    first?: number | undefined;
    before?: string | undefined;
    after?: string | undefined;
    sortKey?: string | undefined;
    identifiers?: unknown[] | undefined;
    language?: string | undefined;
  }): Promise<{ collection: CollectionType }> => {
    const variablesCopy = { ...variables };

    if (!variablesCopy?.identifiers) {
      variablesCopy.identifiers = [];
    }

    const response = (await this.call(
      collectionQueries.collection,
      adjustPaginationVariables(variablesCopy)
    )) as { collection: CollectionType };

    if (!response?.collection) {
      throw new Error('Collection not found');
    }

    const collection = response?.collection;

    const pageInfo = findPageInfo(collection.products);
    const collectionFilters = findFilters(collection.products);

    if (collectionFilters) {
      collection.filters = collectionFilters;
    }
    if (pageInfo) {
      collection.pageInfo = pageInfo;
    }

    return cleanGraphQLResponse(collection);
  };

  collections = async (variables: {
    first?: number;
    after?: string;
    before?: string;
    sortKey?: string;
    firstProducts?: number;
    afterProducts?: string;
    beforeProducts?: string;
    productsSortKey?: string;
    language?: string;
    identifiers?: unknown[];
  }): Promise<{
    collections: Array<CollectionType>;
    pageInfo: PageInfoType;
  }> => {
    const variablesCopy = { ...variables };

    if (!variablesCopy?.identifiers) {
      variablesCopy.identifiers = [];
    }
    // TODO: fix firstProducts, afterProducts, beforeProducts, productsSortKey
    const response = (await this.call(
      collectionQueries.collections,
      adjustPaginationVariables(variablesCopy)
    )) as {
      collections: {
        edges: Array<{
          cursor: string;
          node: CollectionType;
        }>;
        pageInfo: PageInfoType;
        totalCount: number;
      };
    };
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
