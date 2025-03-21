import { adjustPaginationVariables, cleanGraphQLResponse } from '../../helpers';
import ShopifyStorefrontApi from '../ShopifyStorefrontApi';
import cartQueries from './cartQueries';

const DEFAULT_ERROR_MESSAGE = 'No data returned from the GraphQL query';

class Cart extends ShopifyStorefrontApi {
  cartAttributesUpdate = async (variables: {
    attributes: {
      attributes: Array<ATTRIBUTE_TYPE>;
      cartId: string;
    };
    cartId: string;
    first?: number | undefined;
    after?: string | undefined;
    language?: string | undefined;
  }): Promise<{
    cart: CART_TYPE;
    userErrors: Array<USER_ERROR_TYPE>;
  }> => {
    const response = (await this.call(
      cartQueries.cartAttributesUpdate,
      adjustPaginationVariables(variables)
    )) as {
      cartAttributesUpdate: {
        cart: CART_TYPE;
        userErrors: Array<USER_ERROR_TYPE>;
      };
    };
    if (!response?.cartAttributesUpdate) {
      throw new Error(DEFAULT_ERROR_MESSAGE);
    }

    return cleanGraphQLResponse(response?.cartAttributesUpdate);
  };

  cartBuyerIdentityUpdate = async (variables: {
    buyerIdentity: {
      buyerIdentity: BUYER_IDENTITY_TYPE;
      cartId: string;
    };
    cartId: string;
    first?: number | undefined;
    after?: string | undefined;
    language?: string | undefined;
  }): Promise<{
    cart: CART_TYPE;
    userErrors: Array<USER_ERROR_TYPE>;
  }> => {
    const response = (await this.call(
      cartQueries.cartBuyerIdentityUpdate,
      adjustPaginationVariables(variables)
    )) as {
      cartBuyerIdentityUpdate: {
        cart: CART_TYPE;
        userErrors: Array<USER_ERROR_TYPE>;
      };
    };

    if (!response?.cartBuyerIdentityUpdate) {
      throw new Error(DEFAULT_ERROR_MESSAGE);
    }

    return cleanGraphQLResponse(response?.cartBuyerIdentityUpdate);
  };

  cartCreate = async (variables: {
    input: CART_INPUT_TYPE;
    first?: number | undefined;
    after?: string | undefined;
    language?: string | undefined;
  }): Promise<{
    cart: CART_TYPE;
    userErrors: Array<USER_ERROR_TYPE>;
  }> => {
    const response = (await this.call(
      cartQueries.cartCreate,
      adjustPaginationVariables(variables)
    )) as {
      cartCreate: {
        cart: CART_TYPE;
        userErrors: Array<USER_ERROR_TYPE>;
      };
    };

    if (!response?.cartCreate) {
      throw new Error(DEFAULT_ERROR_MESSAGE);
    }

    return cleanGraphQLResponse(response?.cartCreate);
  };

  cartDiscountCodesUpdate = async (variables: {
    cartId: string;
    discountCodes: string[];
    first?: number | undefined;
    after?: string | undefined;
    language?: string | undefined;
  }): Promise<{
    cart: CART_TYPE;
    userErrors: Array<USER_ERROR_TYPE>;
  }> => {
    const response = (await this.call(
      cartQueries.cartDiscountCodesUpdate,
      adjustPaginationVariables(variables)
    )) as {
      cartDiscountCodesUpdate: {
        cart: CART_TYPE;
        userErrors: Array<USER_ERROR_TYPE>;
      };
    };
    if (!response?.cartDiscountCodesUpdate) {
      throw new Error(DEFAULT_ERROR_MESSAGE);
    }

    return cleanGraphQLResponse(response?.cartDiscountCodesUpdate);
  };

  cartLinesAdd = async (variables: {
    cartId: string;
    lines: {
      cartId: string;
      lines: CART_LINE_INPUT_TYPE[];
    };
    first?: number | undefined;
    after?: string | undefined;
    language?: string | undefined;
  }): Promise<{
    cart: CART_TYPE;
    userErrors: Array<USER_ERROR_TYPE>;
  }> => {
    const response = (await this.call(
      cartQueries.cartLinesAdd,
      adjustPaginationVariables(variables)
    )) as {
      cartLinesAdd: {
        cart: CART_TYPE;
        userErrors: Array<USER_ERROR_TYPE>;
      };
    };
    if (!response?.cartLinesAdd) {
      throw new Error(DEFAULT_ERROR_MESSAGE);
    }

    return cleanGraphQLResponse(response?.cartLinesAdd);
  };

  cartLinesRemove = async (variables: {
    cartId: string;
    lines: { cartId: string; lineIds: string[] };
    first?: number | undefined;
    after?: string | undefined;
    language?: string | undefined;
  }): Promise<{
    cart: CART_TYPE;
    userErrors: Array<USER_ERROR_TYPE>;
  }> => {
    const response = (await this.call(
      cartQueries.cartLinesRemove,
      adjustPaginationVariables(variables)
    )) as {
      cartLinesRemove: {
        cart: CART_TYPE;
        userErrors: Array<USER_ERROR_TYPE>;
      };
    };
    if (!response?.cartLinesRemove) {
      throw new Error(DEFAULT_ERROR_MESSAGE);
    }

    return cleanGraphQLResponse(response?.cartLinesRemove);
  };

  cartLinesUpdate = async (variables: {
    cartId: string;
    lines: CART_LINE_INPUT_TYPE[];
    first?: number | undefined;
    after?: string | undefined;
    language?: string | undefined;
  }): Promise<{
    cart: CART_TYPE;
    userErrors: Array<USER_ERROR_TYPE>;
  }> => {
    const response = (await this.call(
      cartQueries.cartLinesUpdate,
      adjustPaginationVariables(variables)
    )) as {
      cartLinesUpdate: {
        cart: CART_TYPE;
        userErrors: Array<USER_ERROR_TYPE>;
      };
    };
    if (!response?.cartLinesUpdate) {
      throw new Error(DEFAULT_ERROR_MESSAGE);
    }

    return cleanGraphQLResponse(response?.cartLinesUpdate);
  };

  cartNoteUpdate = async (variables: {
    cartId: string;
    note: string;
    first?: number | undefined;
    after?: string | undefined;
    language?: string | undefined;
  }): Promise<{
    cart: CART_TYPE;
    userErrors: Array<USER_ERROR_TYPE>;
  }> => {
    const response = (await this.call(
      cartQueries.cartNoteUpdate,
      adjustPaginationVariables(variables)
    )) as {
      cartNoteUpdate: {
        cart: CART_TYPE;
        userErrors: Array<USER_ERROR_TYPE>;
      };
    };
    if (!response?.cartNoteUpdate) {
      throw new Error(DEFAULT_ERROR_MESSAGE);
    }

    return cleanGraphQLResponse(response?.cartNoteUpdate);
  };

  cartQuery = async (variables: {
    cartId: string;
    first?: number | undefined;
    after?: string | undefined;
    language: string;
  }): Promise<CART_TYPE> => {
    const response = (await this.call(
      cartQueries.cartQuery,
      adjustPaginationVariables(variables)
    )) as {
      cart: CART_TYPE;
    };

    if (!response?.cart) {
      throw new Error(DEFAULT_ERROR_MESSAGE);
    }

    return cleanGraphQLResponse(response?.cart);
  };

  checkoutURL = async (variables: {
    cartId: string;
    language?: string;
  }): Promise<{
    cart: {
      checkoutUrl: string;
    };
  }> => {
    const response = (await this.call(cartQueries.checkoutURL, variables)) as {
      cart: {
        checkoutUrl: string;
      };
    };

    if (!response?.cart) {
      throw new Error(DEFAULT_ERROR_MESSAGE);
    }

    return cleanGraphQLResponse(response?.cart);
  };
}

export default Cart;
