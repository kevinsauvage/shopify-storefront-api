import { queryDelegateAccessToken } from "./customerQueries.js";

class CustomerAdmin {
  constructor(parent) {
    this.parent = parent;
  }

  getDelegateToken = async ({ input }) => {
    const res = await this.parent.adminCall(queryDelegateAccessToken, { input });
    if (res?.errors) {
      console.error(res.errors);
      return res;
    }
    return res?.data?.delegateAccessTokenCreate;
  };
}

export default CustomerAdmin;
