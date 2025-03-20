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
  }): Promise<{
    collection: COLLECTION_TYPE;
    pageInfo: PAGE_INFO_TYPE;
    collectionFilters: Array<FILTER_TYPE>;
  } | null> => {
    if (!variables?.identifiers) {
      variables.identifiers = [];
    }

    const response = (await this.call(
      collectionQueries.collection,
      adjustPaginationVariables(variables)
    )) as {
      collection: COLLECTION_TYPE;
    };

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
    collections: Array<COLLECTION_TYPE>;
    pageInfo: PAGE_INFO_TYPE;
  }> => {
    if (!variables?.identifiers) {
      variables.identifiers = [];
    }
    // TODO: fix firstProducts, afterProducts, beforeProducts, productsSortKey
    const response = (await this.call(
      collectionQueries.collections,
      adjustPaginationVariables(variables)
    )) as {
      collections: {
        edges: Array<{
          cursor: string;
          node: COLLECTION_TYPE;
        }>;
        pageInfo: PAGE_INFO_TYPE;
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
