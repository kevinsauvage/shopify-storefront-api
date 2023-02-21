import ShopifyAdminApi from "../ShopifyAdminApi.js";
import { queryDelegateAccessToken } from "./customerQueries.js";

class CustomerAdmin extends ShopifyAdminApi {
  getDelegateToken = async ({ input }) => {
    const res = await this.call(queryDelegateAccessToken, { input });

    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return res?.data?.delegateAccessTokenCreate;
  };
}

export default CustomerAdmin;
