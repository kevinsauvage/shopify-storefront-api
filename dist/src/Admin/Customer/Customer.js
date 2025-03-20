import ShopifyAdminApi from '../ShopifyAdminApi';
import { metafieldsSet, queryDelegateAccessToken } from './customerQueries';
const handleUserErrors = (errors) => {
    if (errors?.length) {
        const errorMessages = errors.map((error) => error.message);
        throw new Error(`Customer user errors: ${errorMessages.join(', ')}`);
    }
};
class CustomerAdmin extends ShopifyAdminApi {
    getDelegateToken = async (variables) => {
        const response = (await this.call(queryDelegateAccessToken, variables));
        if (response?.delegateAccessTokenCreate?.userErrors) {
            handleUserErrors(response?.delegateAccessTokenCreate?.userErrors);
        }
        return response?.delegateAccessTokenCreate;
    };
    metafieldsSet = async (variables) => {
        const response = (await this.call(metafieldsSet, variables));
        handleUserErrors(response?.userErrors);
        return response?.metafieldsSet;
    };
}
export default CustomerAdmin;
