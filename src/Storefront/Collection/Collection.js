import { cleanGraphQLResponse } from '../../helpers';
import ShopifyStorefrontApi from '../ShopifyStorefrontApi';
import collectionQueries from './collectionQueries';

class Collection extends ShopifyStorefrontApi {
  collection = async ({
    handle,
    filters,
    first = 100,
    after = null,
    sort = 'RELEVANCE',
    identifiers = [],
    language = 'EN',
  }) => {
    const response = await this.call(collectionQueries.collection, {
      handle,
      first,
      filters,
      sort,
      after,
      language,
      identifiers,
    });

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
    sortKey = 'RELEVANCE',
    firstProducts = 250,
    afterProducts = null,
    productsSortKey = 'BEST_SELLING',
    language = 'EN',
    identifiers = [],
  }) => {
    const response = await this.call(collectionQueries.collections, {
      first,
      after,
      sortKey,
      firstProducts,
      afterProducts,
      productsSortKey,
      language,
      identifiers,
    });

    if (response?.errors) return response;
    return {
      collections: cleanGraphQLResponse(response?.data?.collections),
      pageInfo: response?.data?.collections?.pageInfo,
    };
  };
}

export default Collection;
