import { cleanGraphQLResponse } from "../helpers.js";
import collectionQueries from "./collectionQueries.js";

class Collection {
  constructor(parent) {
    this.parent = parent;
  }
  filterCollectionForward = async (handle, first = null, filters, sort = "RELEVANCE", after = null) => {
    const res = await this.parent.storefrontCall(collectionQueries.filterCollectionForward, {
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
  getCollections = async (first) => {
    const res = await this.parent.storefrontCall(collectionQueries.getCollections, { first });
    if (res?.errors) return res;
    return cleanGraphQLResponse(res?.data?.collections);
  };
  getSitemap = async (first) => {
    const res = await this.parent.storefrontCall(collectionQueries.getSitemap, { first });
    if (res?.errors) return res;
    return cleanGraphQLResponse(res?.data?.collections);
  };
}

export default Collection;
