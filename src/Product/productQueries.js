import { pageInfoFragment, productFragment } from "../fragment.js";

const getProductByHandle = `
query getProductByHandle($handle: String) {
  product(handle: $handle) {
    ${productFragment}
  }
}`;

const productRecommendations = `
query productRecommendations($productId: ID!) {
  productRecommendations(productId: $productId) {
    ${productFragment}
  }
}`;

const queryProducts = `
query products($first: Int, $after: String, $sortKey: ProductSortKeys, $query: String) {
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
