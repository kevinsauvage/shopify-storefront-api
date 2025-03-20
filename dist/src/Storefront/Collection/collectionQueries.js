import { collectionFragment, filterFragment, pageInfoFragment, productFragment, } from '../../fragment';
const collection = `
query collection(
  $handle: String!,
  $first: Int,
  $last: Int,
  $after: String,
  $before: String,
  $filters: [ProductFilter!],
  $sortKey: ProductCollectionSortKeys,
  $language: LanguageCode,
  $identifiers: [HasMetafieldsIdentifier!]!
) @inContext(language: $language) {
  collection(handle: $handle) {
    ${collectionFragment}
    products(
      first: $first,
      last: $last,
      after: $after,
      before: $before,
      filters: $filters,
      sortKey: $sortKey
    ) {
      edges {
        cursor
        node {
          ${productFragment}
        }
      }
      filters {
        ${filterFragment}
      }
      pageInfo {
        ${pageInfoFragment}
      }
    }
  }
}`;
const collections = `
query collections(
  $first: Int,
  $after: String,
  $before: String,
  $sortKey: CollectionSortKeys,
  $firstProducts: Int,
  $beforeProducts: String,
  $afterProducts: String,
  $productsSortKey: ProductCollectionSortKeys,
  $language: LanguageCode,
  $identifiers: [HasMetafieldsIdentifier!]!
) @inContext(language: $language) {
  collections(first: $first, after: $after, before: $before, sortKey: $sortKey) {
    pageInfo {
      ${pageInfoFragment}
    }
    edges {
      node {
        ${collectionFragment}
        products(
          first: $firstProducts,
          after: $afterProducts,
          before: $beforeProducts,
          sortKey: $productsSortKey
        ) {
          edges {
            cursor
            node {
              ${productFragment}
            }
          }
          filters {
            ${filterFragment}
          }
          pageInfo {
            ${pageInfoFragment}
          }
        }
      }
    }
  }
}`;
const queriesCollection = { collection, collections };
export default queriesCollection;
