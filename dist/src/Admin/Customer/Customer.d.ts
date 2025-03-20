import ShopifyAdminApi from '../ShopifyAdminApi';
declare class CustomerAdmin extends ShopifyAdminApi {
    getDelegateToken: (variables: {
        input: {
            delegateAccessScopes: Array<string>;
            expiresIn: number;
        };
    }) => Promise<{
        delegateAccessToken: {
            accessToken: string;
            createdAt: string;
        };
        userErrors: Array<USER_ERROR_TYPE>;
    }>;
    metafieldsSet: (variables: {
        metafields: Array<metafieldsSetInput>;
    }) => Promise<{
        metafields: Array<METAFIELD_TYPE>;
    }>;
}
export default CustomerAdmin;
