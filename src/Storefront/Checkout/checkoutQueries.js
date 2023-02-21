import { addressFragment, checkoutFragment } from "../../fragment.js";

const returnFragment = `
checkout { ${checkoutFragment} }
checkoutUserErrors { field message }
`;

const checkoutAttributesUpdateV2 = `
mutation checkoutAttributesUpdateV2($checkoutId: ID!, $input: CheckoutAttributesUpdateV2Input!, $first: Int, $after: String) {
  checkoutAttributesUpdateV2(checkoutId: $checkoutId, input: $input) {
   ${returnFragment}
  }
}`;

const checkoutCompleteWithCreditCardV2 = `
mutation checkoutCompleteWithCreditCardV2($checkoutId: ID!, $payment: CreditCardPaymentInputV2!, $first: Int, $after: String) {
  checkoutCompleteWithCreditCardV2(checkoutId: $checkoutId, payment: $payment) {
    ${returnFragment}
    payment {
      billingAddress {
        ${addressFragment}
      }
      errorMessage
      nextActionUrl
    }
  }
}`;

const checkoutCreate = `
mutation checkoutCreate($input: CheckoutCreateInput!, $first: Int, $after: String) {
  checkoutCreate(input: $input) {
     ${returnFragment}
  }
}`;

const checkoutCustomerAssociateV2 = `
mutation checkoutCustomerAssociateV2($checkoutId: ID!, $customerAccessToken: String!, $first: Int, $after: String) {
  checkoutCustomerAssociateV2(checkoutId: $checkoutId, customerAccessToken: $customerAccessToken) {
    ${returnFragment}
  }
}`;

const checkoutCustomerDisassociateV2 = `
mutation checkoutCustomerDisassociateV2($checkoutId: ID!, $first: Int, $after: String) {
  checkoutCustomerDisassociateV2(checkoutId: $checkoutId) {
    ${returnFragment}
  }
}`;

const checkoutDiscountCodeApplyV2 = `
mutation checkoutDiscountCodeApplyV2($checkoutId: ID!, $discountCode: String!, $first: Int, $after: String) {
  checkoutDiscountCodeApplyV2(checkoutId: $checkoutId, discountCode: $discountCode) {
    ${returnFragment}
  }
}`;

const checkoutDiscountCodeRemove = `
mutation checkoutDiscountCodeRemove($checkoutId: ID!,  $first: Int, $after: String) {
  checkoutDiscountCodeRemove(checkoutId: $checkoutId) {
    ${returnFragment}
  }
}`;

const checkoutLineItemsAdd = `
mutation checkoutLineItemsAdd($checkoutId: ID!, $lineItems: [CheckoutLineItemInput!]!, $first: Int, $after: String) {
  checkoutLineItemsAdd(checkoutId: $checkoutId, lineItems: $lineItems) {
    ${returnFragment}
  }
}`;

const checkoutLineItemsRemove = `
mutation checkoutLineItemsRemove($checkoutId: ID!, $lineItems: [ID!]!, $first: Int, $after: String) {
  checkoutLineItemsRemove(checkoutId: $checkoutId, lineItemIds: $lineItems) {
    ${returnFragment}
  }
}`;

const checkoutLineItemsUpdate = `
mutation checkoutLineItemsUpdate($checkoutId: ID!, $lineItems: [CheckoutLineItemUpdateInput!]!, $first: Int, $after: String) {
  checkoutLineItemsUpdate(checkoutId: $checkoutId, lineItems: $lineItems) {
    ${returnFragment}
  }
}`;

const checkoutShippingAddressUpdateV2 = `
mutation checkoutShippingAddressUpdateV2($checkoutId: ID!, $shippingAddress: MailingAddressInput!, $first: Int, $after: String) {
  checkoutShippingAddressUpdateV2(checkoutId: $checkoutId, shippingAddress: $shippingAddress) {
    ${returnFragment}
  }
}`;

const queryCheckoutById = `
query($checkoutId: ID!, $first: Int, $after: String) {
  node(id: $checkoutId) {
    id
    ... on Checkout {
      ${checkoutFragment}
    }
  }
}`;

const checkoutQueries = {
  checkoutAttributesUpdateV2,
  checkoutCreate,
  checkoutCompleteWithCreditCardV2,
  checkoutCustomerAssociateV2,
  checkoutCustomerDisassociateV2,
  checkoutDiscountCodeApplyV2,
  checkoutDiscountCodeRemove,
  checkoutLineItemsAdd,
  checkoutLineItemsRemove,
  checkoutLineItemsUpdate,
  checkoutShippingAddressUpdateV2,
  queryCheckoutById,
};

export default checkoutQueries;
