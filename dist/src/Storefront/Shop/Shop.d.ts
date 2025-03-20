import ShopifyStorefrontApi from '../ShopifyStorefrontApi';
declare class Shop extends ShopifyStorefrontApi {
    getShop: (variables: {
        language?: string;
    }) => Promise<SHOP_TYPE>;
    getPrivacyPolicy: (variables: {
        language?: string;
    }) => Promise<SHOP_TYPE>;
    getRefundPolicy: (variables: {
        language?: string;
    }) => Promise<SHOP_TYPE>;
    getShippingPolicy: (variables: {
        language?: string;
    }) => Promise<SHOP_TYPE>;
    getSubscriptionPolicy: (variables: {
        language?: string;
    }) => Promise<SHOP_TYPE>;
    getTermsOfService: (variables: {
        language?: string;
    }) => Promise<SHOP_TYPE>;
    getMenu: (variables: {
        language?: string;
        handle: string;
    }) => Promise<MENU_TYPE>;
    getPage: (variables: {
        language?: string;
        handle: string;
    }) => Promise<PAGE_TYPE>;
    getMetaObject: (variables: {
        language?: string;
        handle: string;
    }) => Promise<{
        fields: Array<{
            value: string;
            type: string;
        }>;
    }>;
    localization: (variables: {
        countryCode: string;
    }) => Promise<{
        countryCode: string;
        currencyCode: string;
        country: string;
    }>;
}
export default Shop;
