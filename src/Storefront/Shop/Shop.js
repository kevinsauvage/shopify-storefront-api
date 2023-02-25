import ShopifyStorefrontApi from "../ShopifyStorefrontApi.js";
import shopQueries from "./shopQueries.js";

class Shop extends ShopifyStorefrontApi {
  getShop = async ({ language = "EN" } = {}) => {
    const res = await this.call(shopQueries.getShop, { language });

    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return res?.data?.shop;
  };

  getPrivacyPolicy = async ({ language = "EN" } = {}) => {
    const res = await this.call(shopQueries.getPrivacyPolicy, { language });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return res?.data?.shop;
  };

  getRefundPolicy = async ({ language = "EN" } = {}) => {
    const res = await this.call(shopQueries.getRefundPolicy, { language });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return res?.data?.shop;
  };

  getShippingPolicy = async ({ language = "EN" } = {}) => {
    const res = await this.call(shopQueries.getShippingPolicy, { language });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return res?.data?.shop;
  };

  getSuscriptionPolicy = async ({ language = "EN" } = {}) => {
    const res = await this.call(shopQueries.getSuscriptionPolicy, { language });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return res?.data?.shop;
  };

  getTermsOfService = async ({ language = "EN" } = {}) => {
    const res = await this.call(shopQueries.getTermsOfService, { language });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return res?.data?.shop;
  };

  getMenu = async ({ handle, language = "EN" }) => {
    const res = await this.call(shopQueries.getMenu, { handle, language });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return res?.data?.menu?.items;
  };

  getPage = async ({ handle, language = "EN" }) => {
    const res = await this.call(shopQueries.getPage, { handle, language });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    const value = res?.data?.page?.data?.value;
    return value ? JSON.parse(value) : undefined;
  };

  getMetaObject = async ({ handle, language = "EN" }) => {
    const res = await this.call(shopQueries.getMetaObject, { handle, language });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    const value = res?.data?.metaobject?.fields?.[0].value;
    return value && JSON.parse(value);
  };

  localization = async ({ countryCode = "US" } = {}) => {
    const res = await this.call(shopQueries.localization, { countryCode });

    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return res?.data?.localization;
  };
}

export default Shop;
