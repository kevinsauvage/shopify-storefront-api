import ShopifyStorefrontApi from '../ShopifyStorefrontApi';
import shopQueries from './shopQueries';

const DEFAULT_ERROR_MESSAGE = 'No data returned from the GraphQL query';

class Shop extends ShopifyStorefrontApi {
  getShop = async (variables: { language?: string }): Promise<ShopType> => {
    const response = (await this.call(shopQueries.getShop, variables)) as {
      shop: ShopType;
    };

    if (!response?.shop) {
      throw new Error(DEFAULT_ERROR_MESSAGE);
    }

    return response?.shop;
  };

  getPrivacyPolicy = async (variables: { language?: string }): Promise<ShopType> => {
    const response = (await this.call(shopQueries.getPrivacyPolicy, variables)) as {
      shop: ShopType;
    };
    if (!response?.shop) {
      throw new Error(DEFAULT_ERROR_MESSAGE);
    }

    return response?.shop;
  };

  getRefundPolicy = async (variables: { language?: string }): Promise<ShopType> => {
    const response = (await this.call(shopQueries.getRefundPolicy, variables)) as {
      shop: ShopType;
    };

    if (!response?.shop) {
      throw new Error(DEFAULT_ERROR_MESSAGE);
    }

    return response?.shop;
  };

  getShippingPolicy = async (variables: { language?: string }): Promise<ShopType> => {
    const response = (await this.call(shopQueries.getShippingPolicy, variables)) as {
      shop: ShopType;
    };
    if (!response?.shop) {
      throw new Error(DEFAULT_ERROR_MESSAGE);
    }

    return response?.shop;
  };

  getSubscriptionPolicy = async (variables: { language?: string }): Promise<ShopType> => {
    const response = (await this.call(shopQueries.getSubscriptionPolicy, variables)) as {
      shop: ShopType;
    };

    if (!response?.shop) {
      throw new Error(DEFAULT_ERROR_MESSAGE);
    }

    return response?.shop;
  };

  getTermsOfService = async (variables: { language?: string }): Promise<ShopType> => {
    const response = (await this.call(shopQueries.getTermsOfService, variables)) as {
      shop: ShopType;
    };
    if (!response?.shop) {
      throw new Error(DEFAULT_ERROR_MESSAGE);
    }
    return response?.shop;
  };

  getMenu = async (variables: { language?: string; handle: string }): Promise<MenuType> => {
    const response = (await this.call(shopQueries.getMenu, variables)) as {
      menu: MenuType;
    };

    if (!response.menu) {
      throw new Error(DEFAULT_ERROR_MESSAGE);
    }

    return response.menu;
  };

  getPage = async (variables: { language?: string; handle: string }): Promise<PageType> => {
    const response = (await this.call(shopQueries.getPage, variables)) as {
      page: PageType;
    };

    if (!response?.page) {
      throw new Error(DEFAULT_ERROR_MESSAGE);
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
      throw new Error(DEFAULT_ERROR_MESSAGE);
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
      throw new Error(DEFAULT_ERROR_MESSAGE);
    }

    return response?.localization;
  };
}

export default Shop;
