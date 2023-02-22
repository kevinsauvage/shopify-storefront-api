import ShopifyAdminApi from "../ShopifyAdminApi.js";
import { metafieldsSet, queryDelegateAccessToken } from "./customerQueries.js";

class CustomerAdmin extends ShopifyAdminApi {
  getDelegateToken = async ({ input }) => {
    console.log("CustomerAdmin getDelegateToken");
    const res = await this.call(queryDelegateAccessToken, { input });

    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return res?.data?.delegateAccessTokenCreate;
  };

  metafieldsSet = async ({ metafields }) => {
    const res = await this.call(metafieldsSet, { metafields });

    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return res?.data?.metafieldsSet;
  };
}

export default CustomerAdmin;
