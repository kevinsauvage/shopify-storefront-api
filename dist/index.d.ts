import Product from './src/Storefront/Product/Product';
import Collection from './src/Storefront/Collection/Collection';
import Cart from './src/Storefront/Cart/Cart';
import Shop from './src/Storefront/Shop/Shop';
import CustomerAdmin from './src/Admin/Customer/Customer';
import Customer from './src/Storefront/Customer/Customer';
type Options = {
    domain: string;
    accessToken: string;
    apiVersion: string;
    buyerIp?: string;
    delegateToken?: string;
    adminToken: string;
};
declare class ShopifyClient {
    admin: {
        customer: CustomerAdmin;
    };
    storefront: {
        shop: Shop;
        customer: Customer;
        product: Product;
        collection: Collection;
        cart: Cart;
    };
    constructor(options: Options);
}
export default ShopifyClient;
