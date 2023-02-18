import { addressFragment, customerFragment, variantFragment } from "../fragment.js";

const lineFragment = `
id
quantity
merchandise {
  ... on ProductVariant {
    ${variantFragment}
  }
}
attributes {
  key
  value
}
`;

const cartFragment = `
  id
  createdAt
  updatedAt
  checkoutUrl
  totalQuantity
  lines(first: $first, after: $after) {
    edges {
      node {
        ${lineFragment}
      }
    }
  }
  attributes {
    key
    value
  }
  cost {
    totalAmount {
      amount
      currencyCode
    }
    subtotalAmount {
      amount
      currencyCode
    }
    totalTaxAmount {
      amount
      currencyCode
    }
    totalDutyAmount {
      amount
      currencyCode
    }
  }
  buyerIdentity {
    email
    phone
    customer {
      ${customerFragment}
    }
    countryCode
    deliveryAddressPreferences {
      ... on MailingAddress {
        ${addressFragment}
      }
    }
  }
`;

const createCart = `
mutation createCart($cartInput: CartInput, $first: Int, $after: String) {
  cartCreate(input: $cartInput) {
    cart {
      ${cartFragment}
    }
  }
}`;

const cartQuery = `
query cartQuery($cartId: ID!, $first: Int, $after: String) {
  cart(id: $cartId) {
    ${cartFragment}
  }
}`;

const updateCartLines = `
mutation updateCartLines($cartId: ID!, $lines: [CartLineUpdateInput!]!, $first: Int, $after: String) {
  cartLinesUpdate(cartId: $cartId, lines: $lines) {
    cart {
      ${cartFragment}
    }
    userErrors {
      field
      message
    }
  }
}`;

const updateCartBuyerIdentity = `
mutation updateCartBuyerIdentity($buyerIdentity: CartBuyerIdentityInput!, $cartId: ID!, $first: Int, $after: String) {
  cartBuyerIdentityUpdate(buyerIdentity: $buyerIdentity, cartId: $cartId) {
    cart {
      ${cartFragment}
    }
    userErrors {
      field
      message
    }
  }
}`;

const checkoutURL = `
query checkoutURL($cartId: ID!) {
  cart(id: $cartId) {
    checkoutUrl
  }
}`;

// To test
const updateCartDiscountCodes = `
mutation updateCartDiscountCodes($cartId: ID!, $discountCodes: [String!],  $first: Int, $after: String ) {
  cartDiscountCodesUpdate(cartId: $cartId, discountCodes: $discountCodes) {
    cart {
      ${cartFragment}
    }
    userErrors {
      field
      message
    }
  }
}`;

// To test
const updateCartAttributes = `
mutation updateCartAttributes($attributes: [AttributeInput!]!, $cartId: ID!, $first: Int, $after: String) {
  cartAttributesUpdate(attributes: $attributes, cartId: $cartId) {
    cart {
      ${cartFragment}
    }
    userErrors {
      field
      message
    }
  }
}`;

// To test
const updateCartNote = `
mutation updateCartNote($cartId: ID!, $note: String, $first: Int, $after: String) {
  cartNoteUpdate(cartId: $cartId, note: $note) {
    cart {
      ${cartFragment}
    }
    userErrors {
      field
      message
    }
  }
}`;

// To test
const cartSelectedDeliveryOptionsUpdate = `
mutation cartSelectedDeliveryOptionsUpdate($cartId: ID!, $selectedDeliveryOptions: [CartSelectedDeliveryOptionInput!]!, $first: Int, $after: String) {
  cartSelectedDeliveryOptionsUpdate(cartId: $cartId, selectedDeliveryOptions: $selectedDeliveryOptions) {
    cart {
      ${cartFragment}
    }
    userErrors {
      field
      message
    }
  }
}`;

const removeCartLines = `
mutation removeCartLines($cartId: ID!, $lineIds: [ID!]!, $first: Int, $after: String) {
  cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
    cart {
      ${cartFragment}
    }
    userErrors {
      field
      message
    }
  }
}`;

const addCartLines = `
mutation addCartLines($cartId: ID!, $lines: [CartLineInput!]!, $first: Int, $after: String) {
  cartLinesAdd(cartId: $cartId, lines: $lines) {
    cart {
      ${cartFragment}  
    }
    userErrors {
      field
      message
    }
  }
}

`;

const cartQueries = {
  createCart,
  cartQuery,
  updateCartLines,
  updateCartBuyerIdentity,
  checkoutURL,
  updateCartDiscountCodes,
  updateCartAttributes,
  updateCartNote,
  removeCartLines,
  addCartLines,
  cartSelectedDeliveryOptionsUpdate,
};

export default cartQueries;
