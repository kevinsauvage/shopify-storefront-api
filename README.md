# @kevinsauvage/shopify-storefront-api

@kevinsauvage/shopify-storefront-api is a Node.js module that provides a client for interacting with the Shopify API. It includes classes for both the storefront and admin APIs, allowing you to retrieve and update data from your Shopify store programmatically.

## Installation


To install using npm:

```bash
npm install @kevinsauvage/shopify-storefront-api
```

Or, if you prefer Yarn:

```bash
yarn add @kevinsauvage/shopify-storefront-api
```

## Usage/Examples

You will need to import the ShopifyClient class and create a new instance with your Shopify store's credentials. Here's an example:

```javascript
import ShopifyClient from '@kevinsauvage/shopify-storefront-api';

const domain = process.env.NEXT_PUBLIC_SHOPIFY_SHOP_DOMAIN;
const accessToken = process.env.NEXT_PUBLIC_SHOPIFY_STORE_FRONT_ACCESS_TOKEN;
const adminToken = process.env.SHOPIFY_STORE_FRONT_ADMIN_TOKEN;
const apiVersion = '2023-01';

const getClient = (delegateToken, buyerIp) => {
  const config = {
    accessToken,
    adminToken,
    apiVersion,
    buyerIp,
    delegateToken,
    domain,
  };
  return new ShopifyClient(config);
};

export default getClient;
```

Once you have a client instance, you can use it to make API requests. For example:


```javascript
const {   
    "customerAccessToken": {
        "accessToken": "43d4531b6928217b74231b36577f49c257",
        "expiresAt": "2023-06-23T19:20:33Z"
    },
    "customerUserErrors": []
} = await getClient().storefront.customer.customerAccessTokenCreate({
    input: { email, password },
});

const user = await getClient().storefront.customer.queryCustomer({
    customerAccessToken,
});
```

This code creates a customer access token and queries a customer object using the storefront API. For more information about the available APIs and methods, please refer to the official Shopify API documentation.



## Storefront available method

### Cart

Here is a brief description of the methods available in the `Cart` class:

-   `cartAttributesUpdate`: This method is used to update the attributes of a cart.
-   `cartBuyerIdentityUpdate`: This method is used to update the identity of the buyer associated with a cart.
-   `cartCreate`: This method is used to create a new cart.
-   `cartDiscountCodesUpdate`: This method is used to update the discount codes associated with a cart.
-   `cartLinesAdd`: This method is used to add new lines to a cart.
-   `cartLinesRemove`: This method is used to remove lines from a cart.
-   `cartLinesUpdate`: This method is used to update the lines of a cart.
-   `cartNoteUpdate`: This method is used to update the note associated with a cart.
-   `cartQuery`: This method is used to query a cart.
-   `checkoutURL`: This method is used to retrieve the checkout URL associated with a cart.

### Checkout

Here is a brief description of the methods available in the `Checkout` class:

-   `checkoutAttributesUpdateV2`: This method is used to update the attributes of a checkout, such as the customer's shipping address or order notes.
-   `checkoutCompleteWithCreditCardV2`: This method is used to complete a checkout by charging the customer's credit card.
-   `checkoutCreate`: This method is used to create a new checkout.
-   `checkoutCustomerAssociateV2`: This method is used to associate a customer with a checkout.
-   `checkoutCustomerDisassociateV2`: This method is used to disassociate a customer from a checkout.
-   `checkoutDiscountCodeApplyV2`: This method is used to apply a discount code to a checkout.
-   `checkoutDiscountCodeRemove`: This method is used to remove a discount code from a checkout.
-   `checkoutLineItemsAdd`: This method is used to add line items to a checkout.
-   `checkoutLineItemsRemove`: This method is used to remove line items from a checkout.

### Collection

Here is a brief description of the methods available in the `Collection` class:

-   `collection`: This method retrieves a single collection from the Shopify Storefront API based on the given handle, filters, and other optional parameters. It returns an object containing information about the collection, its products, page info, and collection filters. 
-   `collections`: This method retrieves multiple collections from the Shopify Storefront API based on the given parameters. It returns an object containing an array of collections, page info, and other optional parameters.

### Customer

Here is a brief description of the methods available in the `Customer` class:

-   `customerAccessTokenCreate`: creates a customer access token
-   `customerAccessTokenCreateWithMultipass`: creates a customer access token using a multipass token
-   `customerAccessTokenDelete`: deletes a customer access token
-   `customerAccessTokenRenew`: renews a customer access token
-   `customerActivate`: activates a customer account
-   `customerActivateByUrl`: activates a customer account by URL
-   `customerAddressCreate`: creates a new address for a customer
-   `customerAddressDelete`: deletes an address for a customer
-   `customerAddressUpdate`: updates an existing address for a customer
-   `customerCreate`: creates a new customer account
-   `customerDefaultAddressUpdate`: updates a customer's default address
-   `customerRecover`: sends a password recovery email to a customer
-   `customerReset`: resets a customer's password
-   `customerResetByUrl`: resets a customer's password by URL
-   `customerUpdate`: updates an existing customer account
-   `queryCustomer`: queries for a customer account based on a customer access token

### Product

Here is a brief description of the methods available in the `Product` class:

-   `getProductByHandle`: Retrieves a product by its handle, with an option to specify language and additional identifiers. Returns a cleaned response data if there are no errors.
-   `productRecommendations`: Retrieves a list of recommended products based on a given product ID, with an option to specify language and additional identifiers. Returns a cleaned response data if there are no errors.
-   `getProducts`: Retrieves a list of products based on various search parameters, such as sort key, query, and language, with an option to specify additional identifiers. Returns a cleaned response data for the list of products and pagination information if there are no errors.

### Shop

Here is a brief description of the methods available in the `Shop` class:

-   `getShop`: Returns the shop information.
-   `getPrivacyPolicy`: Returns the privacy policy of the shop.
-   `getRefundPolicy`: Returns the refund policy of the shop.
-   `getShippingPolicy`: Returns the shipping policy of the shop.
-   `getSuscriptionPolicy`: Returns the subscription policy of the shop.
-   `getTermsOfService`: Returns the terms of service of the shop.
-   `getMenu`: Returns the menu of the shop.
-   `getPage`: Returns the page content for the given handle.
-   `getMetaObject`: Returns the meta object for the given handle.
-   `localization`: Returns the localization information for the given country code.


## Admin available method ( should only be called sever side )

### Customer

Here is a brief description of the methods available in the `Customer` class:

-  `getDelegateToken` - This method is used to retrieve a delegate access token for a customer. It takes an input object as a parameter and returns a response object that contains the delegate access token.  
-  `metafieldsSet` - This method is used to create or update metafields for a customer. It takes a metafields object as a parameter and returns a response object that contains the created or updated metafields.
