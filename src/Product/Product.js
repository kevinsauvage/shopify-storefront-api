import { cleanGraphQLResponse } from "../helpers.js";
import productQueries from "./productQueries.js";

class Product {
  constructor(parent) {
    this.parent = parent;
  }

  getProductRecommendation = async (productId) => {
    const res = await this.parent.storefrontCall(productQueries.queryProductRecommendations, { productId });
    if (res?.errors) return res;
    return cleanGraphQLResponse(res.data.productRecommendations);
  };
  getProduct = async (handle) => {
    const res = await this.parent.storefrontCall(productQueries.queryProduct, { handle });
    if (res?.errors) return res;
    return cleanGraphQLResponse(res.data.product);
  };
  getProducts = async (sortKey, first) => {
    const res = await this.parent.storefrontCall(productQueries.queryProducts, { first, sortKey });
    if (res?.errors) return res;
    return { products: cleanGraphQLResponse(res?.data?.products) };
  };
  searchProducts = async (query = "", first = 250) => {
    const res = await this.parent.storefrontCall(productQueries.searchProducts, {
      query: `title:${query}* OR description:${query}* OR product_type:${query}* OR tag=${query}*`,
      first,
    });
    if (res?.errors) return res;
    return cleanGraphQLResponse(res?.data?.products);
  };
}

export default Product;
