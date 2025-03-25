import ShopifyStorefrontApi from '../ShopifyStorefrontApi';
import shopQueries from './shopQueries';
const DEFAULT_ERROR_MESSAGE = 'No data returned from the GraphQL query';
class Shop extends ShopifyStorefrontApi {
    getShop = async (variables) => {
        const response = (await this.call(shopQueries.getShop, variables));
        if (!response?.shop) {
            throw new Error(DEFAULT_ERROR_MESSAGE);
        }
        return response?.shop;
    };
    getPrivacyPolicy = async (variables) => {
        const response = (await this.call(shopQueries.getPrivacyPolicy, variables));
        if (!response?.shop) {
            throw new Error(DEFAULT_ERROR_MESSAGE);
        }
        return response?.shop;
    };
    getRefundPolicy = async (variables) => {
        const response = (await this.call(shopQueries.getRefundPolicy, variables));
        if (!response?.shop) {
            throw new Error(DEFAULT_ERROR_MESSAGE);
        }
        return response?.shop;
    };
    getShippingPolicy = async (variables) => {
        const response = (await this.call(shopQueries.getShippingPolicy, variables));
        if (!response?.shop) {
            throw new Error(DEFAULT_ERROR_MESSAGE);
        }
        return response?.shop;
    };
    getSubscriptionPolicy = async (variables) => {
        const response = (await this.call(shopQueries.getSubscriptionPolicy, variables));
        if (!response?.shop) {
            throw new Error(DEFAULT_ERROR_MESSAGE);
        }
        return response?.shop;
    };
    getTermsOfService = async (variables) => {
        const response = (await this.call(shopQueries.getTermsOfService, variables));
        if (!response?.shop) {
            throw new Error(DEFAULT_ERROR_MESSAGE);
        }
        return response?.shop;
    };
    getMenu = async (variables) => {
        const response = (await this.call(shopQueries.getMenu, variables));
        if (!response.menu) {
            throw new Error(DEFAULT_ERROR_MESSAGE);
        }
        return response.menu;
    };
    getPage = async (variables) => {
        const response = (await this.call(shopQueries.getPage, variables));
        if (!response?.page) {
            throw new Error(DEFAULT_ERROR_MESSAGE);
        }
        return response?.page;
    };
    getMetaObject = async (variables) => {
        const response = (await this.call(shopQueries.getMetaObject, variables));
        const value = response?.metaobject?.fields?.[0].value;
        if (!value) {
            throw new Error(DEFAULT_ERROR_MESSAGE);
        }
        return value && JSON.parse(value);
    };
    localization = async (variables) => {
        const response = (await this.call(shopQueries.localization, variables));
        if (!response?.localization) {
            throw new Error(DEFAULT_ERROR_MESSAGE);
        }
        return response?.localization;
    };
}
export default Shop;
