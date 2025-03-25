import { addressFragment, customerFragment, variantFragment } from '../../fragment';

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
  note
  appliedGiftCards {
    id
    amountUsed {
      amount
      currencyCode
    }
    balance {
      amount
      currencyCode
    } 
    lastCharacters
    presentmentAmountUsed {
      amount
      currencyCode
    }
  }
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
  discountCodes {
    applicable
    code
  }
  buyerIdentity {
    email
    phone
    countryCode
    customer {
      ${customerFragment}
    }
    deliveryAddressPreferences {
      ... on MailingAddress {
        ${addressFragment}
      }
    }
  }
`;

const cartAttributesUpdate = `
mutation cartAttributesUpdate($attributes: [AttributeInput!]!, $cartId: ID!, $first: Int, $after: String, $language: LanguageCode) 
@inContext(language: $language) {
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

const cartBuyerIdentityUpdate = `
mutation cartBuyerIdentityUpdate($buyerIdentity: CartBuyerIdentityInput!, $cartId: ID!, $first: Int, $after: String, $language: LanguageCode) 
@inContext(language: $language) {
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

const cartCreate = `
mutation cartCreate($cartInput: CartInput, $first: Int, $after: String, $language: LanguageCode) 
@inContext(language: $language) {
  cartCreate(input: $cartInput) {
    cart {
      ${cartFragment}
    }
  }
}`;

const cartDiscountCodesUpdate = `
mutation cartDiscountCodesUpdate($cartId: ID!, $discountCodes: [String!],  $first: Int, $after: String, $language: LanguageCode) 
@inContext(language: $language) {
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

const cartLinesAdd = `
mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!, $first: Int, $after: String, $language: LanguageCode) 
@inContext(language: $language) {
  cartLinesAdd(cartId: $cartId, lines: $lines) {
    cart {
      ${cartFragment}  
    }
    userErrors {
      field
      message
    }
  }
}`;

const cartLinesRemove = `
mutation cartLinesRemove($cartId: ID!, $lines: [ID!]!, $first: Int, $after: String, $language: LanguageCode) 
@inContext(language: $language) {
  cartLinesRemove(cartId: $cartId, lineIds: $lines) {
    cart {
      ${cartFragment}
    }
    userErrors {
      field
      message
    }
  }
}`;

const cartLinesUpdate = `
mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!, $first: Int, $after: String, $language: LanguageCode) 
@inContext(language: $language) {
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

const cartNoteUpdate = `
mutation cartNoteUpdate($cartId: ID!, $note: String, $first: Int, $after: String, $language: LanguageCode) 
@inContext(language: $language) {
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

const cartQuery = `
query cartQuery($cartId: ID!, $first: Int, $after: String, $language: LanguageCode) 
@inContext(language: $language) {
  cart(id: $cartId) {
    ${cartFragment}
  }
}`;

const checkoutURL = `
query checkoutURL($cartId: ID!, $language: LanguageCode) 
@inContext(language: $language) {
  cart(id: $cartId) {
    checkoutUrl
  }
}`;

const cartQueries = {
  cartAttributesUpdate,
  cartBuyerIdentityUpdate,
  cartCreate,
  cartDiscountCodesUpdate,
  cartLinesAdd,
  cartLinesRemove,
  cartLinesUpdate,
  cartNoteUpdate,
  cartQuery,
  checkoutURL,
};

export default cartQueries;
