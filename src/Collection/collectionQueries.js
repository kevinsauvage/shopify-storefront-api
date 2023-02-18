import { collectionFragment, filterFragment, pageInfoFragment, productFragment } from "../fragment.js";

const filterCollectionForward = `
query Search($handle: String!, $first: Int!, $filters: [ProductFilter!], $sort: ProductCollectionSortKeys, $after: String) {
  collection(handle: $handle) {
    ${collectionFragment}
    products(first: $first,  filters: $filters, sortKey: $sort, after: $after) {
      filters {
        ${filterFragment}
      }
      pageInfo {
        ${pageInfoFragment}
      }
      edges {
        node {
          ${productFragment}
        }
      }
    }
  }
}`;

const getCollections = `
query ($first: Int) {
  collections(first: $first, sortKey: RELEVANCE) {
    edges {
      node {
        ${collectionFragment}
      }
    }
  }
}`;

const getSitemap = `
query ($first: Int) {
  collections(first: $first, sortKey: RELEVANCE) {
    edges {
      node {
        handle
        products(first: 200, sortKey: BEST_SELLING) {
          edges {
            node {
              handle
            }
          }
        }
      }
    }
  }
}`;

const queriesCollection = { filterCollectionForward, getCollections, getSitemap };

export default queriesCollection;
