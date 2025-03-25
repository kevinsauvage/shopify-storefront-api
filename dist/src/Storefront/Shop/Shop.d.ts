import ShopifyStorefrontApi from '../ShopifyStorefrontApi';
declare class Shop extends ShopifyStorefrontApi {
    getShop: (variables: {
        language?: string;
    }) => Promise<ShopType>;
    getPrivacyPolicy: (variables: {
        language?: string;
    }) => Promise<ShopType>;
    getRefundPolicy: (variables: {
        language?: string;
    }) => Promise<ShopType>;
    getShippingPolicy: (variables: {
        language?: string;
    }) => Promise<ShopType>;
    getSubscriptionPolicy: (variables: {
        language?: string;
    }) => Promise<ShopType>;
    getTermsOfService: (variables: {
        language?: string;
    }) => Promise<ShopType>;
    getMenu: (variables: {
        language?: string;
        handle: string;
    }) => Promise<MenuType>;
    getPage: (variables: {
        language?: string;
        handle: string;
    }) => Promise<PageType>;
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
