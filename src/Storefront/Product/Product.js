import { cleanGraphQLResponse } from '../../helpers';
import ShopifyStorefrontApi from '../ShopifyStorefrontApi';
import productQueries from './productQueries';

class Product extends ShopifyStorefrontApi {
  getProductByHandle = async ({ handle, identifiers = [], language = 'EN' }) => {
    const response = await this.call(productQueries.getProductByHandle, {
      handle,
      language,
      identifiers,
    });

    if (response?.errors) return response;
    return cleanGraphQLResponse(response.data.product);
  };

  productRecommendations = async ({ productId, identifiers = [], language = 'EN' }) => {
    const response = await this.call(productQueries.productRecommendations, {
      productId,
      language,
      identifiers,
    });
    if (response?.errors) return response;
    return cleanGraphQLResponse(response.data.productRecommendations);
  };

  getProducts = async ({
    sortKey,
    first = 100,
    after = null,
    query = '',
    language = 'EN',
    identifiers = [],
  }) => {
    const response = await this.call(productQueries.queryProducts, {
      first,
      sortKey,
      after,
      query,
      language,
      identifiers,
    });
    if (response?.errors) return response;
    return {
      products: cleanGraphQLResponse(response?.data?.products),
      pageInfo: response?.data?.products?.pageInfo,
    };
  };
}

export default Product;
