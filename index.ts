import Product from './src/Storefront/Product/Product';
import Collection from './src/Storefront/Collection/Collection';
import Cart from './src/Storefront/Cart/Cart';
import Shop from './src/Storefront/Shop/Shop';

// Admin
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

class ShopifyClient {
  admin: { customer: CustomerAdmin };

  storefront: {
    shop: Shop;
    customer: Customer;
    product: Product;
    collection: Collection;
    cart: Cart;
  };

  constructor(options: Options) {
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
