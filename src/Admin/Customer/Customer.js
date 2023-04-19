import ShopifyAdminApi from '../ShopifyAdminApi';
import { metafieldsSet, queryDelegateAccessToken } from './customerQueries';

class CustomerAdmin extends ShopifyAdminApi {
  getDelegateToken = async ({ input }) => {
    console.log('CustomerAdmin getDelegateToken');
    const response = await this.call(queryDelegateAccessToken, { input });

    if (response?.errors) {
      console.error(response.errors);
      return response;
    }
    return response?.data?.delegateAccessTokenCreate;
  };

  metafieldsSet = async ({ metafields }) => {
    const response = await this.call(metafieldsSet, { metafields });

    if (response?.errors) {
      console.error(response.errors);
      return response;
    }
    return response?.data?.metafieldsSet;
  };
}

export default CustomerAdmin;
