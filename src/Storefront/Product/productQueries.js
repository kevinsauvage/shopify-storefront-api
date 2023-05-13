import { pageInfoFragment, productFragment } from '../../fragment.js';

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
query products($first: Int, $after: String, $sortKey: ProductSortKeys, $query: String, $language: LanguageCode, $identifiers: [HasMetafieldsIdentifier!]!) 
@inContext(language: $language) {
  products(first: $first, after: $after, sortKey: $sortKey , query: $query) {
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
