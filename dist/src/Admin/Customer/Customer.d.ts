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
        userErrors: Array<UserErrorType>;
    }>;
    metafieldsSet: (variables: {
        metafields: Array<metafieldsSetInput>;
    }) => Promise<{
        metafields: Array<MetafieldType>;
        userErrors: Array<UserErrorType>;
    }>;
}
export default CustomerAdmin;
