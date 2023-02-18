import {
  addressFragment,
  customerFragment,
  customerOrdersFragment,
  orderFragment,
  pageInfoFragment,
  variantFragment,
} from "./fragment.js";

// {
//  "input": {
//   "acceptsMarketing": true,
//    "email": "",
//    "firstName": "",
//    "lastName": "",
//   "password": "",
//   "phone": ""
//  }
// }
const queryRegister = `
mutation ($input: CustomerCreateInput!) {
  customerCreate(input: $input) {
    userErrors { field message }
  }
}`;

// customerAccessTokenCreate varables
// {
//  "input": {
//    "email": "",
//   "password": ""
//   }
// }
const customerAccessTokenCreate = `
mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
  customerAccessTokenCreate(input: $input) {
    customerAccessToken { accessToken expiresAt }
    customerUserErrors { message }
  }
}`;

// customerAccessTokenRenew variables
// {
// "customerAccessToken": ""
// }
const customerAccessTokenRenew = `
mutation ($token: String!) {
  customerAccessTokenRenew(customerAccessToken: $token) {
    customerAccessToken { accessToken expiresAt }
    userErrors { field message }
  }
}`;

// customerAccessTokenDelete variables
// {
// "customerAccessToken": ""
// }
const customerAccessTokenDelete = `
mutation customerAccessTokenDelete($customerAccessToken: String!) {
  customerAccessTokenDelete(customerAccessToken: $customerAccessToken) {
    deletedAccessToken
    deletedCustomerAccessTokenId
    userErrors { field message }
  }
}`;

// customerActivate variables:
// {
//   "id": "",
//   "input": {
//     "activationToken": "",
//     "password": ""
//   }
// }
const customerActivate = `
mutation customerActivate($id: ID!, $input: CustomerActivateInput!) {
  customerActivate(id: $id, input: $input) {
    customer { ${customerFragment} }
    customerAccessToken { accessToken expiresAt }
    customerUserErrors { field message }
  }
}`;

const queryCustomer = `
query customer ($token: String!) {
  customer(customerAccessToken: $token) {
    ${customerFragment}
  }
}`;

const querySendRecoverEmail = `
mutation customerRecover($email: String!) {
  customerRecover(email: $email) {
    customerUserErrors { field message }
  }
}`;

const queryResetPassword = `
mutation customerResetByUrl($password: String!, $resetUrl: URL!) {
  customerResetByUrl(password: $password, resetUrl: $resetUrl) {
      customerAccessToken { accessToken expiresAt }
      customerUserErrors { code field message}
  }
}`;

const queryCustomerOrders = `
query customer ($token: String!, $first: Int, $after: String) {
  customer(customerAccessToken: $token) {
    orders(first: $first, after: $after) {
      pageInfo {
        ${pageInfoFragment}
      }
      edges {
        node {
            ${orderFragment}
        }
      }
    }
  }
}`;

const queryDelegateAccessToken = `
mutation delegateAccessTokenCreate($input: DelegateAccessTokenInput!) {
  delegateAccessTokenCreate(input: $input) {
    delegateAccessToken { accessToken createdAt }
    userErrors { field message }
  }
}`;

const getOrderById = `
query ($id: ID!) {
  node(id: $id) {
    ... on Order {
        ${orderFragment}
        lineItems(first: 250) {
            edges {
                node {
                  quantity
                  title
                  quantity
                  variant {
                      ${variantFragment}
                  }
                }
            }
        }
    }
  }
}`;

const createAddress = `
mutation customerAddressCreate($address: MailingAddressInput!, $customerAccessToken: String!) {
  customerAddressCreate(address: $address, customerAccessToken: $customerAccessToken) {
    customerAddress {
      ${addressFragment}
    }
    customerUserErrors {
      message
    }
  }
}`;

const updateAddress = `
mutation customerAddressUpdate($address: MailingAddressInput!, $customerAccessToken: String!, $id: ID!) {
  customerAddressUpdate(address: $address, customerAccessToken: $customerAccessToken, id: $id) {
    customerAddress {
      ${addressFragment}
    }
    customerUserErrors {
      message
    }
  }
}`;

const queryCustomerAddresses = `
query customer ($token: String!) {
  customer(customerAccessToken: $token) {
    addresses(first: 100) {
      edges {
        node {
          ${addressFragment}
        }
      }
    }
  }
}
`;

const updateDefaultAddress = `
mutation customerDefaultAddressUpdate($addressId: ID!, $customerAccessToken: String!) {
  customerDefaultAddressUpdate(addressId: $addressId, customerAccessToken: $customerAccessToken) {
    customer {
      ${customerFragment}
    }
    customerUserErrors {
      message
    }
  }
}`;

const updateCustomer = `
mutation customerUpdate($customer: CustomerUpdateInput!, $customerAccessToken: String!) {
  customerUpdate(customer: $customer, customerAccessToken: $customerAccessToken) {
    customer { ${customerFragment} }
    customerAccessToken { accessToken expiresAt }
    customerUserErrors { message }
  }
}`;

const getCustomerAddressById = `
query ($id: ID!) {
  node(id: $id) {
    ... on MailingAddress {
        ${addressFragment}
    }
  }
}`;

const deleteAddressById = `
mutation customerAddressDelete($customerAccessToken: String!, $id: ID!) {
  customerAddressDelete(customerAccessToken: $customerAccessToken, id: $id) {
    customerUserErrors { message }
    deletedCustomerAddressId
  }
}`;

const customerQueries = {
  customerAccessTokenCreate,
  queryRegister,
  querySendRecoverEmail,
  queryResetPassword,
  queryCustomer,
  customerAccessTokenRenew,
  queryDelegateAccessToken,
  customerAccessTokenDelete,
  queryCustomerOrders,
  getOrderById,
  updateAddress,
  queryCustomerAddresses,
  createAddress,
  updateDefaultAddress,
  getCustomerAddressById,
  updateCustomer,
  deleteAddressById,
  customerActivate,
};

export default customerQueries;
