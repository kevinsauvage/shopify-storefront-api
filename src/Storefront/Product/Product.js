import { cleanGraphQLResponse } from '../../helpers.js';
import ShopifyStorefrontApi from '../ShopifyStorefrontApi.js';
import productQueries from './productQueries.js';

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
    first = null,
    after = null,
    query = '',
    language = 'EN',
    identifiers = [],
    before = null,
  }) => {
    const variables = {
      sortKey,
      language,
      identifiers,
      query,
      first: after ? first || 10 : undefined, // Forward pagination
      after: after || undefined, // Cursor for next page
      last: before ? first || 10 : undefined, // Backward pagination
      before: before || undefined, // Cursor for previous page
    };

    if (!after && !before) {
      variables.first = first || 10;
    }

    const response = await this.call(productQueries.queryProducts, variables);
    if (response?.errors) return response;

    return {
      products: cleanGraphQLResponse(response?.data?.products),
      pageInfo: response?.data?.products?.pageInfo,
    };
  };
}

export default Product;
