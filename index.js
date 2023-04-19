import Customer from './src/Storefront/Customer/Customer';
import Product from './src/Storefront/Product/Product';
import Collection from './src/Storefront/Collection/Collection';
import Cart from './src/Storefront/Cart/Cart';
import Checkout from './src/Storefront/Checkout/Checkout';
import Shop from './src/Storefront/Shop/Shop';

// Admin
import CustomerAdmin from './src/Admin/Customer/Customer';

class ShopifyClient {
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
      checkout: new Checkout(options),
    };
  }
}

export default ShopifyClient;
