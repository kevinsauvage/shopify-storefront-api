import { cleanGraphQLResponse } from '../../helpers.js';
import ShopifyStorefrontApi from '../ShopifyStorefrontApi.js';
import collectionQueries from './collectionQueries.js';

class Collection extends ShopifyStorefrontApi {
  collection = async ({
    handle,
    filters,
    first = null,
    before = null,
    after = null,
    sortKey = 'RELEVANCE',
    identifiers = [],
    language = 'EN',
  }) => {
    const variables = {
      handle,
      filters,
      sortKey,
      language,
      identifiers,
      first: after ? first || 10 : undefined, // Forward pagination
      after: after || undefined, // Cursor for next page
      last: before ? first || 10 : undefined, // Backward pagination
      before: before || undefined, // Cursor for previous page
    };

    if (!after && !before) {
      variables.first = first || 10;
    }
    const response = await this.call(collectionQueries.collection, variables);

    if (response?.errors) return response;
    const collection = response?.data?.collection;

    if (collection) {
      const products = cleanGraphQLResponse(collection?.products);
      const pageInfo = collection?.products?.pageInfo;
      const collectionFilters = collection?.products?.filters;
      return { collection: { ...collection, products }, pageInfo, collectionFilters };
    }
    return null;
  };

  collections = async ({
    first = 250,
    after = null,
    before = null,
    sortKey = 'RELEVANCE',
    firstProducts = 250,
    afterProducts = null,
    beforeProducts = null,
    productsSortKey = 'BEST_SELLING',
    language = 'EN',
    identifiers = [],
  }) => {
    const variables = {
      first: after ? first || 10 : null, // Forward pagination
      after: after || null, // Cursor for next page
      last: before ? 10 : null, // Backward pagination
      before: before || null, // Cursor for previous page
      sortKey,
      firstProducts,
      beforeProducts,
      afterProducts,
      productsSortKey,
      language,
      identifiers,
    };

    const response = await this.call(collectionQueries.collections, variables);
    console.log('🟩🟪🟦-->  ~ Collection ~ response:', response);

    if (response?.errors) return response;
    return {
      collections: cleanGraphQLResponse(response?.data?.collections),
      pageInfo: response?.data?.collections?.pageInfo,
    };
  };
}

export default Collection;
