import ShopifyAdminApi from '../ShopifyAdminApi';
import { metafieldsSet, queryDelegateAccessToken } from './customerQueries';
class CustomerAdmin extends ShopifyAdminApi {
    getDelegateToken = async (variables) => {
        const response = (await this.call(queryDelegateAccessToken, variables));
        return response?.delegateAccessTokenCreate;
    };
    metafieldsSet = async (variables) => {
        const response = (await this.call(metafieldsSet, variables));
        return response?.metafieldsSet;
    };
}
export default CustomerAdmin;
