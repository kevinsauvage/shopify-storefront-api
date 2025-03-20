export {};

declare global {
  type BUYER_IDENTITY_TYPE = {
    email: string | null; // Email of the buyer or null if not provided
    phone: string | null; // Phone number of the buyer or null if not provided
    customer: {
      id: string | null; // Unique identifier for the customer or null if not applicable
      displayName: string | null; // Display name of the customer or null if not applicable
    } | null; // Customer object or null if not applicable
    countryCode: string; // Country code of the buyer
    deliveryAddressPreferences: {
      id: string; // Unique identifier for the delivery address preference
      label: string; // Label of the delivery address preference
      address: {
        id: string; // Unique identifier for the address
        address1: string | null; // First line of the address or null if not provided
        address2: string | null; // Second line of the address or null if not provided
        city: string | null; // City of the address or null if not provided
        province: string | null; // Province of the address or null if not provided
        country: string | null; // Country of the address or null if not provided
        zip: string | null; // ZIP code of the address or null if not provided
      } | null; // Address object or null if not applicable
    }[]; // Array of delivery address preferences
  };

  type CART_LINE_TYPE = {
    cursor: string | null; // Cursor for pagination
    id: string; // Unique identifier for the cart line
    quantity: number; // Quantity of the item in the cart line
    merchandise: {
      id: string; // Unique identifier for the merchandise
      title: string; // Title of the merchandise
      image: {
        url: string; // URL of the merchandise image
        altText: string | null; // Alt text for the image
      } | null; // Image object or null if not available
      product: {
        id: string; // Unique identifier for the product
        title: string; // Title of the product
      }; // Product object
    }; // Merchandise object
    attributes: ATTRIBUTE_TYPE[]; // Array of custom attributes for the cart line
  };

  type CART_TYPE = {
    id: string; // Unique identifier for the cart
    createdAt: string; // Timestamp of when the cart was created
    updatedAt: string; // Timestamp of when the cart was last updated
    checkoutUrl: string; // URL to proceed to checkout
    totalQuantity: number; // Total number of items in the cart
    note: string | null; // Optional note associated with the cart
    lines: CART_LINE_TYPE[]; // Array of items in the cart
    attributes: ATTRIBUTE_TYPE[]; // Array of custom attributes for the cart
    cost: COST_TYPE; // Cost details of the cart
    discountCodes: string[]; // Array of applied discount codes
    buyerIdentity: BUYER_IDENTITY_TYPE; // Information about the buyer
  };

  type CART_LINE_INPUT_TYPE = {
    attributes: ATTRIBUTE_TYPE[]; // Array of custom attributes for the cart line
    merchandiseId: string; // Unique identifier for the merchandise
    quantity: number; // Quantity of the item in the cart line
    metafields: {
      key: string; // Key of the metafield
      type: string; // Type of the metafield
      value: string; // Value of the metafield
    }[]; // Array of metafields for the cart line
  };

  type CART_INPUT_TYPE = {
    buyerIdentity: BUYER_IDENTITY_TYPE; // Information about the buyer
    discountCodes: string[]; // Array of discount codes to apply
    lines: CART_LINE_TYPE;
  };
}
