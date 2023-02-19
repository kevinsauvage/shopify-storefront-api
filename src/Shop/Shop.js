import shopQueries from "./shopQueries.js";

class Shop {
  constructor(parent) {
    this.parent = parent;
  }

  getShop = async () => {
    const res = await this.parent.storefrontCall(shopQueries.getShop);
    if (res?.errors) return res;
    return res?.data?.shop;
  };
  getPrivacyPolicy = async () => {
    const res = await this.parent.storefrontCall(shopQueries.getPrivacyPolicy);
    if (res?.errors) return res;
    return res?.data?.shop;
  };
  getRefundPolicy = async () => {
    const res = await this.parent.storefrontCall(shopQueries.getRefundPolicy);
    if (res?.errors) return res;
    return res?.data?.shop;
  };
  getShippingPolicy = async () => {
    const res = await this.parent.storefrontCall(shopQueries.getShippingPolicy);
    if (res?.errors) return res;
    return res?.data?.shop;
  };
  getSuscriptionPolicy = async () => {
    const res = await this.parent.storefrontCall(shopQueries.getSuscriptionPolicy);
    if (res?.errors) return res;
    return res?.data?.shop;
  };
  getTermsOfService = async () => {
    const res = await this.parent.storefrontCall(shopQueries.getTermsOfService);
    if (res?.errors) return res;
    return res?.data?.shop;
  };
  getMenu = async ({ handle }) => {
    const res = await this.parent.storefrontCall(shopQueries.getMenu, { handle });
    if (res?.errors) return res;
    return res?.data?.menu?.items;
  };
  getPage = async ({ handle }) => {
    const res = await this.parent.storefrontCall(shopQueries.getPage, { handle });
    if (res?.errors) return res;
    const value = res?.data?.page?.data?.value;
    return value ? JSON.parse(value) : undefined;
  };
  getMetaObject = async ({ handle }) => {
    const res = await this.parent.storefrontCall(shopQueries.getMetaObject, { handle });
    if (res?.errors) return res;
    const value = res?.data?.metaobject?.fields?.[0].value;
    return value && JSON.parse(value);
  };
}

export default Shop;
