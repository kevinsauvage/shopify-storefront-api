import { cleanGraphQLResponse, adjustPaginationVariables } from '../../helpers';
import ShopifyStorefrontApi from '../ShopifyStorefrontApi';
import productQueries from './productQueries';

class Product extends ShopifyStorefrontApi {
  getProductByHandle = async (variables: {
    handle: string;
    identifiers?: unknown[];
    language?: string;
  }): Promise<ProductType> => {
    const variablesCopy = { ...variables };
    if (!variablesCopy?.identifiers) {
      variablesCopy.identifiers = [];
    }
    const response = (await this.call(productQueries.getProductByHandle, variablesCopy)) as {
      product: ProductType;
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
  }): Promise<Array<ProductType>> => {
    const variablesCopy = { ...variables };
    if (!variablesCopy?.identifiers) {
      variablesCopy.identifiers = [];
    }
    const response = (await this.call(productQueries.productRecommendations, variablesCopy)) as {
      productRecommendations: Array<ProductType>;
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
    products: Array<ProductType>;
    pageInfo: PageInfoType;
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
          node: ProductType;
        }>;
        pageInfo: PageInfoType;
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
