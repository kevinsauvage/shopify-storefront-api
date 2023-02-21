import { addressFragment, customerFragment, variantFragment } from "../../fragment.js";

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

// cartAttributesUpdate
/* {
  "attributes": [
    {
      "key": "",
      "value": ""
    }
  ],
  "cartId": ""
} */
const cartAttributesUpdate = `
mutation cartAttributesUpdate($attributes: [AttributeInput!]!, $cartId: ID!, $first: Int, $after: String) {
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

// cartBuyerIdentityUpdate
/* {
  "buyerIdentity": {
    "countryCode": "",
    "customerAccessToken": "",
    "deliveryAddressPreferences": [
      {
        "deliveryAddress": {
          "address1": "",
          "address2": "",
          "city": "",
          "company": "",
          "country": "",
          "firstName": "",
          "lastName": "",
          "phone": "",
          "province": "",
          "zip": ""
        }
      }
    ],
    "email": "",
    "phone": ""
  },
  "cartId": ""
}
 */
const cartBuyerIdentityUpdate = `
mutation cartBuyerIdentityUpdate($buyerIdentity: CartBuyerIdentityInput!, $cartId: ID!, $first: Int, $after: String) {
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

// cartCreate
/* {
  "input": {
    "attributes": [
      {
        "key": "",
        "value": ""
      }
    ],
    "buyerIdentity": {
      "countryCode": "",
      "customerAccessToken": "",
      "deliveryAddressPreferences": [
        {
          "deliveryAddress": {
            "address1": "",
            "address2": "",
            "city": "",
            "company": "",
            "country": "",
            "firstName": "",
            "lastName": "",
            "phone": "",
            "province": "",
            "zip": ""
          }
        }
      ],
      "email": "",
      "phone": ""
    },
    "discountCodes": [
      ""
    ],
    "lines": [
      {
        "attributes": [
          {
            "key": "",
            "value": ""
          }
        ],
        "merchandiseId": "",
        "quantity": 1,
        "sellingPlanId": ""
      }
    ],
    "note": ""
  }
}
 */
const cartCreate = `
mutation cartCreate($cartInput: CartInput, $first: Int, $after: String) {
  cartCreate(input: $cartInput) {
    cart {
      ${cartFragment}
    }
  }
}`;

// cartDiscountCodesUpdate
/* {
  "cartId": "",
  "discountCodes": [
    ""
  ]
} */
const cartDiscountCodesUpdate = `
mutation cartDiscountCodesUpdate($cartId: ID!, $discountCodes: [String!],  $first: Int, $after: String ) {
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

// cartLinesAdd
/* {
  "cartId": "",
  "lines": [
    {
      "attributes": [
        {
          "key": "",
          "value": ""
        }
      ],
      "merchandiseId": "",
      "quantity": 1,
      "sellingPlanId": ""
    }
  ]
} */
const cartLinesAdd = `
mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!, $first: Int, $after: String) {
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

// cartLinesRemove
/* {
  "cartId": "",
  "lineIds": [
    ""
  ]
} */
const cartLinesRemove = `
mutation cartLinesRemove($cartId: ID!, $lines: [ID!]!, $first: Int, $after: String) {
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

// cartLinesUpdate
/* {
  "cartId": "",
  "lines": [
    {
      "attributes": [
        {
          "key": "",
          "value": ""
        }
      ],
      "id": "",
      "merchandiseId": "",
      "quantity": 1,
      "sellingPlanId": ""
    }
  ]
} */
const cartLinesUpdate = `
mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!, $first: Int, $after: String) {
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

// cartNoteUpdate
/* {
  "cartId": "",
  "note": ""
} */
const cartNoteUpdate = `
mutation cartNoteUpdate($cartId: ID!, $note: String, $first: Int, $after: String) {
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
query cartQuery($cartId: ID!, $first: Int, $after: String) {
  cart(id: $cartId) {
    ${cartFragment}
  }
}`;

const checkoutURL = `
query checkoutURL($cartId: ID!) {
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
