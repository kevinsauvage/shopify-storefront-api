import ShopifyAdminApi from '../ShopifyAdminApi.js';
import { metafieldsSet, queryDelegateAccessToken } from './customerQueries.js';

class CustomerAdmin extends ShopifyAdminApi {
  getDelegateToken = async ({ input }) => {
    const response = await this.call(queryDelegateAccessToken, { input });
    if (response?.errors) return response;
    return response?.data?.delegateAccessTokenCreate;
  };

  metafieldsSet = async ({ metafields }) => {
    const response = await this.call(metafieldsSet, { metafields });
    if (response?.errors) return response;
    return response?.data?.metafieldsSet;
  };
}

export default CustomerAdmin;
