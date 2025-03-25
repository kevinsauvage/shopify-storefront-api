import ShopifyStorefrontApi from '../ShopifyStorefrontApi';
type CartDefaultResponseType = {
    cart: CartType;
    userErrors: Array<UserErrorType>;
};
declare class Cart extends ShopifyStorefrontApi {
    cartAttributesUpdate: (variables: {
        attributes: {
            attributes: Array<AttributeType>;
            cartId: string;
        };
        cartId: string;
        first?: number | undefined;
        after?: string | undefined;
        language?: string | undefined;
    }) => Promise<CartDefaultResponseType>;
    cartBuyerIdentityUpdate: (variables: {
        buyerIdentity: {
            buyerIdentity: BuyerIdentityType;
            cartId: string;
        };
        cartId: string;
        first?: number | undefined;
        after?: string | undefined;
        language?: string | undefined;
    }) => Promise<CartDefaultResponseType>;
    cartCreate: (variables: {
        input: CART_INPUT_TYPE;
        first?: number | undefined;
        after?: string | undefined;
        language?: string | undefined;
    }) => Promise<CartDefaultResponseType>;
    cartDiscountCodesUpdate: (variables: {
        cartId: string;
        discountCodes: string[];
        first?: number | undefined;
        after?: string | undefined;
        language?: string | undefined;
    }) => Promise<CartDefaultResponseType>;
    cartLinesAdd: (variables: {
        cartId: string;
        lines: {
            cartId: string;
            lines: CART_LINE_INPUT_TYPE[];
        };
        first?: number | undefined;
        after?: string | undefined;
        language?: string | undefined;
    }) => Promise<CartDefaultResponseType>;
    cartLinesRemove: (variables: {
        cartId: string;
        lines: {
            cartId: string;
            lineIds: string[];
        };
        first?: number | undefined;
        after?: string | undefined;
        language?: string | undefined;
    }) => Promise<CartDefaultResponseType>;
    cartLinesUpdate: (variables: {
        cartId: string;
        lines: CART_LINE_INPUT_TYPE[];
        first?: number | undefined;
        after?: string | undefined;
        language?: string | undefined;
    }) => Promise<CartDefaultResponseType>;
    cartNoteUpdate: (variables: {
        cartId: string;
        note: string;
        first?: number | undefined;
        after?: string | undefined;
        language?: string | undefined;
    }) => Promise<CartDefaultResponseType>;
    cartQuery: (variables: {
        cartId: string;
        first?: number | undefined;
        after?: string | undefined;
        language: string;
    }) => Promise<CartType>;
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
