import Customer from "./src/Storefront/Customer/Customer.js";
import Product from "./src/Storefront/Product/Product.js";
import Collection from "./src/Storefront/Collection/Collection.js";
import Cart from "./src/Storefront/Cart/Cart.js";
import Checkout from "./src/Storefront/Checkout/Checkout.js";
import Shop from "./src/Storefront/Shop/Shop.js";

// Admin
import CustomerAdmin from "./src/Admin/Customer/Customer.js";

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
