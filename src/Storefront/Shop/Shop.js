import ShopifyStorefrontApi from "../ShopifyStorefrontApi.js";
import shopQueries from "./shopQueries.js";

class Shop extends ShopifyStorefrontApi {
  getShop = async () => {
    const res = await this.call(shopQueries.getShop);
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return res?.data?.shop;
  };

  getPrivacyPolicy = async () => {
    const res = await this.call(shopQueries.getPrivacyPolicy);
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return res?.data?.shop;
  };

  getRefundPolicy = async () => {
    const res = await this.call(shopQueries.getRefundPolicy);
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return res?.data?.shop;
  };

  getShippingPolicy = async () => {
    const res = await this.call(shopQueries.getShippingPolicy);
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return res?.data?.shop;
  };

  getSuscriptionPolicy = async () => {
    const res = await this.call(shopQueries.getSuscriptionPolicy);
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return res?.data?.shop;
  };

  getTermsOfService = async () => {
    const res = await this.call(shopQueries.getTermsOfService);
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return res?.data?.shop;
  };

  getMenu = async ({ handle }) => {
    const res = await this.call(shopQueries.getMenu, { handle });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return res?.data?.menu?.items;
  };

  getPage = async ({ handle }) => {
    const res = await this.call(shopQueries.getPage, { handle });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    const value = res?.data?.page?.data?.value;
    return value ? JSON.parse(value) : undefined;
  };

  getMetaObject = async ({ handle }) => {
    const res = await this.call(shopQueries.getMetaObject, { handle });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    const value = res?.data?.metaobject?.fields?.[0].value;
    return value && JSON.parse(value);
  };
}

export default Shop;
