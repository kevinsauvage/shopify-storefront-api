import ShopifyAdminApi from '../ShopifyAdminApi';
import { metafieldsSet, queryDelegateAccessToken } from './customerQueries';

const handleUserErrors = (errors: Array<USER_ERROR_TYPE>) => {
  if (errors?.length) {
    const errorMessages = errors.map((error) => error.message);
    throw new Error(`Customer user errors: ${errorMessages.join(', ')}`);
  }
};

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

    if (response?.delegateAccessTokenCreate?.userErrors) {
      handleUserErrors(response?.delegateAccessTokenCreate?.userErrors);
    }

    return response?.delegateAccessTokenCreate;
  };

  metafieldsSet = async (variables: { metafields: Array<metafieldsSetInput> }) => {
    const response = (await this.call(metafieldsSet, variables)) as {
      metafieldsSet: {
        metafields: Array<METAFIELD_TYPE>;
      };
      userErrors: Array<USER_ERROR_TYPE>;
    };

    handleUserErrors(response?.userErrors);

    return response?.metafieldsSet;
  };
}

export default CustomerAdmin;
