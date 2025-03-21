import ShopifyStorefrontApi from '../ShopifyStorefrontApi';
declare class Cart extends ShopifyStorefrontApi {
    cartAttributesUpdate: (variables: {
        attributes: {
            attributes: Array<ATTRIBUTE_TYPE>;
            cartId: string;
        };
        cartId: string;
        first?: number | undefined;
        after?: string | undefined;
        language?: string | undefined;
    }) => Promise<{
        cart: CART_TYPE;
        userErrors: Array<USER_ERROR_TYPE>;
    }>;
    cartBuyerIdentityUpdate: (variables: {
        buyerIdentity: {
            buyerIdentity: BUYER_IDENTITY_TYPE;
            cartId: string;
        };
        cartId: string;
        first?: number | undefined;
        after?: string | undefined;
        language?: string | undefined;
    }) => Promise<{
        cart: CART_TYPE;
        userErrors: Array<USER_ERROR_TYPE>;
    }>;
    cartCreate: (variables: {
        input: CART_INPUT_TYPE;
        first?: number | undefined;
        after?: string | undefined;
        language?: string | undefined;
    }) => Promise<{
        cart: CART_TYPE;
        userErrors: Array<USER_ERROR_TYPE>;
    }>;
    cartDiscountCodesUpdate: (variables: {
        cartId: string;
        discountCodes: string[];
        first?: number | undefined;
        after?: string | undefined;
        language?: string | undefined;
    }) => Promise<{
        cart: CART_TYPE;
        userErrors: Array<USER_ERROR_TYPE>;
    }>;
    cartLinesAdd: (variables: {
        cartId: string;
        lines: {
            cartId: string;
            lines: CART_LINE_INPUT_TYPE[];
        };
        first?: number | undefined;
        after?: string | undefined;
        language?: string | undefined;
    }) => Promise<{
        cart: CART_TYPE;
        userErrors: Array<USER_ERROR_TYPE>;
    }>;
    cartLinesRemove: (variables: {
        cartId: string;
        lines: {
            cartId: string;
            lineIds: string[];
        };
        first?: number | undefined;
        after?: string | undefined;
        language?: string | undefined;
    }) => Promise<{
        cart: CART_TYPE;
        userErrors: Array<USER_ERROR_TYPE>;
    }>;
    cartLinesUpdate: (variables: {
        cartId: string;
        lines: CART_LINE_INPUT_TYPE[];
        first?: number | undefined;
        after?: string | undefined;
        language?: string | undefined;
    }) => Promise<{
        cart: CART_TYPE;
        userErrors: Array<USER_ERROR_TYPE>;
    }>;
    cartNoteUpdate: (variables: {
        cartId: string;
        note: string;
        first?: number | undefined;
        after?: string | undefined;
        language?: string | undefined;
    }) => Promise<{
        cart: CART_TYPE;
        userErrors: Array<USER_ERROR_TYPE>;
    }>;
    cartQuery: (variables: {
        cartId: string;
        first?: number | undefined;
        after?: string | undefined;
        language: string;
    }) => Promise<CART_TYPE>;
    checkoutURL: (variables: {
        cartId: string;
        language?: string;
    }) => Promise<{
        cart: {
            checkoutUrl: string;
        };
    }>;
}
export default Cart;
