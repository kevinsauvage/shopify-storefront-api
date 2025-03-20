import ShopifyStorefrontApi from '../ShopifyStorefrontApi';
import shopQueries from './shopQueries';

class Shop extends ShopifyStorefrontApi {
  getShop = async (variables: { language?: string }): Promise<SHOP_TYPE> => {
    const response = (await this.call(shopQueries.getShop, variables)) as {
      shop: SHOP_TYPE;
    };

    if (!response?.shop) {
      throw new Error('Shop not found');
    }

    return response?.shop;
  };

  getPrivacyPolicy = async (variables: { language?: string }): Promise<SHOP_TYPE> => {
    const response = (await this.call(shopQueries.getPrivacyPolicy, variables)) as {
      shop: SHOP_TYPE;
    };
    if (!response?.shop) {
      throw new Error('Shop not found');
    }

    return response?.shop;
  };

  getRefundPolicy = async (variables: { language?: string }): Promise<SHOP_TYPE> => {
    const response = (await this.call(shopQueries.getRefundPolicy, variables)) as {
      shop: SHOP_TYPE;
    };

    if (!response?.shop) {
      throw new Error('Shop not found');
    }

    return response?.shop;
  };

  getShippingPolicy = async (variables: { language?: string }): Promise<SHOP_TYPE> => {
    const response = (await this.call(shopQueries.getShippingPolicy, variables)) as {
      shop: SHOP_TYPE;
    };
    if (!response?.shop) {
      throw new Error('Shop not found');
    }

    return response?.shop;
  };

  getSubscriptionPolicy = async (variables: { language?: string }): Promise<SHOP_TYPE> => {
    const response = (await this.call(shopQueries.getSubscriptionPolicy, variables)) as {
      shop: SHOP_TYPE;
    };

    if (!response?.shop) {
      throw new Error('Shop not found');
    }

    return response?.shop;
  };

  getTermsOfService = async (variables: { language?: string }): Promise<SHOP_TYPE> => {
    const response = (await this.call(shopQueries.getTermsOfService, variables)) as {
      shop: SHOP_TYPE;
    };
    if (!response?.shop) {
      throw new Error('Shop not found');
    }
    return response?.shop;
  };

  getMenu = async (variables: { language?: string; handle: string }): Promise<MENU_TYPE> => {
    const response = (await this.call(shopQueries.getMenu, variables)) as {
      menu: MENU_TYPE;
    };

    if (!response.menu) {
      throw new Error('No data returned from the GraphQL query');
    }

    return response.menu;
  };

  getPage = async (variables: { language?: string; handle: string }): Promise<PAGE_TYPE> => {
    const response = (await this.call(shopQueries.getPage, variables)) as {
      page: PAGE_TYPE;
    };

    if (!response?.page) {
      throw new Error('Page not found');
    }

    return response?.page;
  };

  getMetaObject = async (variables: {
    language?: string;
    handle: string;
  }): Promise<{
    fields: Array<{
      value: string;
      type: string;
    }>;
  }> => {
    const response = (await this.call(shopQueries.getMetaObject, variables)) as {
      metaobject: {
        fields: Array<{
          value: string;
          type: string;
        }>;
      };
    };

    const value = response?.metaobject?.fields?.[0].value;

    if (!value) {
      throw new Error('Metaobject not found');
    }

    return value && JSON.parse(value);
  };

  localization = async (variables: {
    countryCode: string;
  }): Promise<{
    countryCode: string;
    currencyCode: string;
    country: string;
  }> => {
    const response = (await this.call(shopQueries.localization, variables)) as {
      localization: {
        countryCode: string;
        currencyCode: string;
        country: string;
      };
    };

    if (!response?.localization) {
      throw new Error('Localization not found');
    }

    return response?.localization;
  };
}

export default Shop;
