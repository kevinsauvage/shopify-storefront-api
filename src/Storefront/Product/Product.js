import { cleanGraphQLResponse } from "../../helpers.js";
import ShopifyStorefrontApi from "../ShopifyStorefrontApi.js";
import productQueries from "./productQueries.js";

class Product extends ShopifyStorefrontApi {
  getProductByHandle = async ({ handle, language = "EN" }) => {
    const res = await this.call(productQueries.getProductByHandle, { handle, language });

    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return cleanGraphQLResponse(res.data.product);
  };

  productRecommendations = async ({ productId, language = "EN" }) => {
    const res = await this.call(productQueries.productRecommendations, { productId, language });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return cleanGraphQLResponse(res.data.productRecommendations);
  };

  getProducts = async ({ sortKey, first = 100, after = null, query = "", language = "EN" }) => {
    const res = await this.call(productQueries.queryProducts, { first, sortKey, after, query, language });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return { products: cleanGraphQLResponse(res?.data?.products), pageInfo: res?.data?.products?.pageInfo };
  };
}

export default Product;
