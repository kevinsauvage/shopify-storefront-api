import ShopifyAdminApi from '../ShopifyAdminApi';
import { metafieldsSet, queryDelegateAccessToken } from './customerQueries';

class CustomerAdmin extends ShopifyAdminApi {
  getDelegateToken = async (variables: {
    input: {
      delegateAccessScopes: Array<string>;
      expiresIn: number;
    };
  }) => {
    const response = (await this.call(queryDelegateAccessToken, variables)) as {
      delegateAccessTokenCreate: {
        delegateAccessToken: {
          accessToken: string;
          createdAt: string;
        };
        userErrors: Array<USER_ERROR_TYPE>;
      };
    };

    return response?.delegateAccessTokenCreate;
  };

  metafieldsSet = async (variables: { metafields: Array<metafieldsSetInput> }) => {
    const response = (await this.call(metafieldsSet, variables)) as {
      metafieldsSet: {
        metafields: Array<METAFIELD_TYPE>;
        userErrors: Array<USER_ERROR_TYPE>;
      };
    };

    return response?.metafieldsSet;
  };
}

export default CustomerAdmin;
