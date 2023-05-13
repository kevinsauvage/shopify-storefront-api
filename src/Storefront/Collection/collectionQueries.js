import {
  collectionFragment,
  filterFragment,
  pageInfoFragment,
  productFragment,
} from '../../fragment.js';

const collection = `
query collection($handle: String!, $first: Int!, $filters: [ProductFilter!], $sort: ProductCollectionSortKeys, $after: String, $language: LanguageCode, $identifiers: [HasMetafieldsIdentifier!]!) 
@inContext(language: $language) {
  collection(handle: $handle) {
    ${collectionFragment}
    products(first: $first,  filters: $filters, sortKey: $sort, after: $after) {
      filters { ${filterFragment} }
      pageInfo { ${pageInfoFragment} }
      edges {
        node { ${productFragment} }
      }
    }
  }
}`;

const collections = `
query collections($first: Int, $after: String, $sortKey: CollectionSortKeys, $firstProducts: Int, $afterProducts: String, $productsSortKey: ProductCollectionSortKeys, $language: LanguageCode, $identifiers: [HasMetafieldsIdentifier!]!) 
@inContext(language: $language) {
  collections(first: $first, after: $after, sortKey: $sortKey) {
    pageInfo {
      ${pageInfoFragment}
    }
    edges {
      node {
        ${collectionFragment}
        products(first: $firstProducts, after: $afterProducts, sortKey: $productsSortKey) {
          filters { ${filterFragment} }
          pageInfo { ${pageInfoFragment} }
          edges {
            node { ${productFragment} }
          }
        }
      }
    }
  }
}`;

const queriesCollection = { collection, collections };

export default queriesCollection;
