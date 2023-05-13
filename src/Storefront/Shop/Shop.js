import ShopifyStorefrontApi from '../ShopifyStorefrontApi.js';
import shopQueries from './shopQueries.js';

class Shop extends ShopifyStorefrontApi {
  getShop = async ({ language = 'EN' } = {}) => {
    const response = await this.call(shopQueries.getShop, { language });
    if (response?.errors) return response;
    return response?.data?.shop;
  };

  getPrivacyPolicy = async ({ language = 'EN' } = {}) => {
    const response = await this.call(shopQueries.getPrivacyPolicy, { language });
    if (response?.errors) return response;
    return response?.data?.shop;
  };

  getRefundPolicy = async ({ language = 'EN' } = {}) => {
    const response = await this.call(shopQueries.getRefundPolicy, { language });
    if (response?.errors) return response;
    return response?.data?.shop;
  };

  getShippingPolicy = async ({ language = 'EN' } = {}) => {
    const response = await this.call(shopQueries.getShippingPolicy, { language });
    if (response?.errors) return response;
    return response?.data?.shop;
  };

  getSuscriptionPolicy = async ({ language = 'EN' } = {}) => {
    const response = await this.call(shopQueries.getSuscriptionPolicy, { language });
    if (response?.errors) return response;
    return response?.data?.shop;
  };

  getTermsOfService = async ({ language = 'EN' } = {}) => {
    const response = await this.call(shopQueries.getTermsOfService, { language });
    if (response?.errors) return response;
    return response?.data?.shop;
  };

  getMenu = async ({ handle, language = 'EN' }) => {
    const response = await this.call(shopQueries.getMenu, { handle, language });
    if (response?.errors) return response;
    return response?.data?.menu?.items;
  };

  getPage = async ({ handle, language = 'EN' }) => {
    const response = await this.call(shopQueries.getPage, { handle, language });
    if (response?.errors) return response;
    const value = response?.data?.page?.data?.value;
    return value ? JSON.parse(value) : undefined;
  };

  getMetaObject = async ({ handle, language = 'EN' }) => {
    const response = await this.call(shopQueries.getMetaObject, { handle, language });
    if (response?.errors) return response;
    const value = response?.data?.metaobject?.fields?.[0].value;
    return value && JSON.parse(value);
  };

  localization = async ({ countryCode = 'US' } = {}) => {
    const response = await this.call(shopQueries.localization, { countryCode });
    if (response?.errors) return response;
    return response?.data?.localization;
  };
}

export default Shop;
