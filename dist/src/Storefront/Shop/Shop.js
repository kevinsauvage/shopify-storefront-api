import ShopifyStorefrontApi from '../ShopifyStorefrontApi';
import shopQueries from './shopQueries';
class Shop extends ShopifyStorefrontApi {
    getShop = async (variables) => {
        const response = (await this.call(shopQueries.getShop, variables));
        if (!response?.shop) {
            throw new Error('Shop not found');
        }
        return response?.shop;
    };
    getPrivacyPolicy = async (variables) => {
        const response = (await this.call(shopQueries.getPrivacyPolicy, variables));
        if (!response?.shop) {
            throw new Error('Shop not found');
        }
        return response?.shop;
    };
    getRefundPolicy = async (variables) => {
        const response = (await this.call(shopQueries.getRefundPolicy, variables));
        if (!response?.shop) {
            throw new Error('Shop not found');
        }
        return response?.shop;
    };
    getShippingPolicy = async (variables) => {
        const response = (await this.call(shopQueries.getShippingPolicy, variables));
        if (!response?.shop) {
            throw new Error('Shop not found');
        }
        return response?.shop;
    };
    getSubscriptionPolicy = async (variables) => {
        const response = (await this.call(shopQueries.getSubscriptionPolicy, variables));
        if (!response?.shop) {
            throw new Error('Shop not found');
        }
        return response?.shop;
    };
    getTermsOfService = async (variables) => {
        const response = (await this.call(shopQueries.getTermsOfService, variables));
        if (!response?.shop) {
            throw new Error('Shop not found');
        }
        return response?.shop;
    };
    getMenu = async (variables) => {
        const response = (await this.call(shopQueries.getMenu, variables));
        if (!response.menu) {
            throw new Error('No data returned from the GraphQL query');
        }
        return response.menu;
    };
    getPage = async (variables) => {
        const response = (await this.call(shopQueries.getPage, variables));
        if (!response?.page) {
            throw new Error('Page not found');
        }
        return response?.page;
    };
    getMetaObject = async (variables) => {
        const response = (await this.call(shopQueries.getMetaObject, variables));
        const value = response?.metaobject?.fields?.[0].value;
        if (!value) {
            throw new Error('Metaobject not found');
        }
        return value && JSON.parse(value);
    };
    localization = async (variables) => {
        const response = (await this.call(shopQueries.localization, variables));
        if (!response?.localization) {
            throw new Error('Localization not found');
        }
        return response?.localization;
    };
}
export default Shop;
