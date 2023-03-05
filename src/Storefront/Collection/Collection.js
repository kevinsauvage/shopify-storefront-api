import { cleanGraphQLResponse } from "../../helpers.js";
import ShopifyStorefrontApi from "../ShopifyStorefrontApi.js";
import collectionQueries from "./collectionQueries.js";

class Collection extends ShopifyStorefrontApi {
  collection = async ({
    handle,
    filters,
    first = 100,
    after = null,
    sort = "RELEVANCE",
    identifiers = [],
    language = "EN",
  }) => {
    const res = await this.call(collectionQueries.collection, {
      handle,
      first,
      filters,
      sort,
      after,
      language,
      identifiers,
    });

    if (res?.errors) {
      console.error(res.errors);
      return res;
    }

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
    language = "EN",
    identifiers = [],
  }) => {
    const res = await this.call(collectionQueries.collections, {
      first,
      after,
      sortKey,
      firstProducts,
      afterProducts,
      productsSortKey,
      language,
      identifiers,
    });

    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return { collections: cleanGraphQLResponse(res?.data?.collections), pageInfo: res?.data?.collections?.pageInfo };
  };
}

export default Collection;
