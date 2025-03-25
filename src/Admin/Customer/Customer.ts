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
        userErrors: Array<UserErrorType>;
      };
    };

    return response?.delegateAccessTokenCreate;
  };

  metafieldsSet = async (variables: {
    metafields: Array<{
      compareDigest?: string;
      key: string;
      namespace: string;
      ownerId: string;
      type?: string;
      value: string;
    }>;
  }) => {
    const response = (await this.call(metafieldsSet, variables)) as {
      metafieldsSet: {
        metafields: Array<MetafieldType>;
        userErrors: Array<UserErrorType>;
      };
    };

    return response?.metafieldsSet;
  };
}

export default CustomerAdmin;
