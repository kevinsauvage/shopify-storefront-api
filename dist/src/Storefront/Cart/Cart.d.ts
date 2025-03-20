import ShopifyStorefrontApi from '../ShopifyStorefrontApi';
declare class Cart extends ShopifyStorefrontApi {
    cartAttributesUpdate: (variables: {
        attributes: {
            attributes: {
                key: string;
                value: string;
            }[];
            cartId: string;
        };
        cartId: string;
        first?: number | undefined;
        after?: string | undefined;
        language?: string | undefined;
    }) => Promise<{
        cart: CART_TYPE;
        userErrors: Array<{
            field: string;
            message: string;
        }>;
    }>;
    cartBuyerIdentityUpdate: (variables: {
        buyerIdentity: {
            buyerIdentity: {
                customerAccessToken: string | null;
                companyLocationId: string | null;
                countryCode: string | null;
                email: string | null;
                phone: string | null;
            };
            cartId: string;
        };
        cartId: string;
        first?: number | undefined;
        after?: string | undefined;
        language?: string | undefined;
    }) => Promise<{
        cart: CART_TYPE;
        userErrors: Array<{
            field: string;
            message: string;
        }>;
    }>;
    cartCreate: (variables: {
        input: CART_INPUT_TYPE;
        first?: number | undefined;
        after?: string | undefined;
        language?: string | undefined;
    }) => Promise<{
        cart: CART_TYPE;
        userErrors: Array<{
            field: string;
            message: string;
        }>;
    }>;
    cartDiscountCodesUpdate: (variables: {
        cartId: string;
        discountCodes: string[];
        first?: number | undefined;
        after?: string | undefined;
        language?: string | undefined;
    }) => Promise<{
        cart: CART_TYPE;
        userErrors: Array<{
            field: string;
            message: string;
        }>;
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
        userErrors: Array<{
            field: string;
            message: string;
        }>;
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
        userErrors: Array<{
            field: string;
            message: string;
        }>;
    }>;
    cartLinesUpdate: (variables: {
        cartId: string;
        lines: CART_LINE_INPUT_TYPE[];
        first?: number | undefined;
        after?: string | undefined;
        language?: string | undefined;
    }) => Promise<{
        cart: CART_TYPE;
        userErrors: Array<{
            field: string;
            message: string;
        }>;
    }>;
    cartNoteUpdate: (variables: {
        cartId: string;
        note: string;
        first?: number | undefined;
        after?: string | undefined;
        language?: string | undefined;
    }) => Promise<{
        cart: CART_TYPE;
        userErrors: Array<{
            field: string;
            message: string;
        }>;
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
