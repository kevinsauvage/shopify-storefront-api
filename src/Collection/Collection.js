import { cleanGraphQLResponse } from "../helpers.js";
import collectionQueries from "./collectionQueries.js";

class Collection {
  constructor(parent) {
    this.parent = parent;
  }

  collection = async ({ handle, filters, first = 100, after = null, sort = "RELEVANCE" }) => {
    const res = await this.parent.storefrontCall(collectionQueries.collection, {
      handle,
      first,
      filters,
      sort,
      after,
    });

    if (res?.errors) return res;

    const collection = res?.data?.collection;

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
    sortKey = "RELEVANCE",
    firstProducts = 250,
    afterProducts = null,
    productsSortKey = "BEST_SELLING",
  }) => {
    const res = await this.parent.storefrontCall(collectionQueries.collections, {
      first,
      after,
      sortKey,
      firstProducts,
      afterProducts,
      productsSortKey,
    });

    if (res?.errors) return res;
    return { collections: cleanGraphQLResponse(res?.data?.collections), pageInfo: res?.data?.collections?.pageInfo };
  };
}

export default Collection;
