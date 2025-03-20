import { pageInfoFragment, productFragment } from '../../fragment';
const getProductByHandle = `
query getProductByHandle($handle: String, $language: LanguageCode,  $identifiers: [HasMetafieldsIdentifier!]!) 
@inContext(language: $language) {
  product(handle: $handle) {
    ${productFragment}
    seo {
      description
      title
    }
  }
}`;
const productRecommendations = `
query productRecommendations($productId: ID!, $language: LanguageCode, $identifiers: [HasMetafieldsIdentifier!]!) 
@inContext(language: $language) {
  productRecommendations(productId: $productId) {
    ${productFragment}
  }
}`;
const queryProducts = `
query products($first: Int, $last: Int, $after: String, $before: String, $sortKey: ProductSortKeys, $query: String, $language: LanguageCode, $identifiers: [HasMetafieldsIdentifier!]!) 
@inContext(language: $language) {
  products(first: $first, last: $last, after: $after, before: $before, sortKey: $sortKey, query: $query) {
    edges {
      cursor
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
}`;
const productQueries = { productRecommendations, getProductByHandle, queryProducts };
export default productQueries;
