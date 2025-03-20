import Product from './src/Storefront/Product/Product';
import Collection from './src/Storefront/Collection/Collection';
import Cart from './src/Storefront/Cart/Cart';
import Shop from './src/Storefront/Shop/Shop';
// Admin
import CustomerAdmin from './src/Admin/Customer/Customer';
import Customer from './src/Storefront/Customer/Customer';
class ShopifyClient {
    admin;
    storefront;
    constructor(options) {
        this.admin = {
            customer: new CustomerAdmin(options),
        };
        this.storefront = {
            shop: new Shop(options),
            customer: new Customer(options),
            product: new Product(options),
            collection: new Collection(options),
            cart: new Cart(options),
        };
    }
}
export default ShopifyClient;
