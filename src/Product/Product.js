import { cleanGraphQLResponse } from "../helpers.js";
import productQueries from "./productQueries.js";

class Product {
  constructor(parent) {
    this.parent = parent;
  }

  getProductByHandle = async ({ handle }) => {
    const res = await this.parent.storefrontCall(productQueries.getProductByHandle, { handle });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return cleanGraphQLResponse(res.data.product);
  };

  productRecommendations = async ({ productId }) => {
    const res = await this.parent.storefrontCall(productQueries.productRecommendations, { productId });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return cleanGraphQLResponse(res.data.productRecommendations);
  };

  getProducts = async ({ sortKey, first = 100, after = null, query = "" }) => {
    const res = await this.parent.storefrontCall(productQueries.queryProducts, { first, sortKey, after, query });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return { products: cleanGraphQLResponse(res?.data?.products), pageInfo: res?.data?.products?.pageInfo };
  };
}

export default Product;
