import { cleanGraphQLResponse, adjustPaginationVariables } from '../../helpers';
import ShopifyStorefrontApi from '../ShopifyStorefrontApi';
import productQueries from './productQueries';

class Product extends ShopifyStorefrontApi {
  getProductByHandle = async (variables: {
    handle: string;
    identifiers?: unknown[];
    language?: string;
  }): Promise<PRODUCT_TYPE> => {
    const variablesCopy = { ...variables };
    if (!variablesCopy?.identifiers) {
      variablesCopy.identifiers = [];
    }
    const response = (await this.call(productQueries.getProductByHandle, variablesCopy)) as {
      product: PRODUCT_TYPE;
    };
    if (!response?.product) {
      throw new Error('Product not found');
    }

    return cleanGraphQLResponse(response?.product);
  };

  productRecommendations = async (variables: {
    productId: string;
    identifiers?: unknown[];
    language?: string;
  }): Promise<Array<PRODUCT_TYPE>> => {
    const variablesCopy = { ...variables };
    if (!variablesCopy?.identifiers) {
      variablesCopy.identifiers = [];
    }
    const response = (await this.call(productQueries.productRecommendations, variablesCopy)) as {
      productRecommendations: Array<PRODUCT_TYPE>;
    };

    if (!response?.productRecommendations) {
      throw new Error('No data returned from the GraphQL query');
    }

    return cleanGraphQLResponse(response.productRecommendations);
  };

  getProducts = async (variables: {
    sortKey: string;
    first?: number;
    after?: string;
    query?: string;
    language?: string;
    identifiers?: unknown[];
    before?: string;
  }): Promise<{
    products: Array<PRODUCT_TYPE>;
    pageInfo: PAGE_INFO_TYPE;
  }> => {
    const variablesCopy = { ...variables };
    if (!variablesCopy?.identifiers) {
      variablesCopy.identifiers = [];
    }

    const response = (await this.call(
      productQueries.queryProducts,
      adjustPaginationVariables(variablesCopy)
    )) as {
      products: {
        edges: Array<{
          cursor: string;
          node: PRODUCT_TYPE;
        }>;
        pageInfo: PAGE_INFO_TYPE;
      };
    };

    if (!response?.products) {
      throw new Error('No data returned from the GraphQL query');
    }

    return {
      products: cleanGraphQLResponse(response?.products),
      pageInfo: response?.products?.pageInfo,
    };
  };
}

export default Product;
