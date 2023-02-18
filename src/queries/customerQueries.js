import { addressFragment, customerFragment, orderFragment, pageInfoFragment, variantFragment } from "./fragment.js";

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
const customerCreate = `
mutation ($input: CustomerCreateInput!) {
  customerCreate(input: $input) {
    userErrors { field message }
  }
}`;

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
    customerUserErrors { field message }
  }
}`;

// {
//  "multipassToken": ""
// }
const customerAccessTokenCreateWithMultipass = `
mutation customerAccessTokenCreateWithMultipass($multipassToken: String!) {
  customerAccessTokenCreateWithMultipass(multipassToken: $multipassToken) {
    customerAccessToken { accessToken expiresAt }
    customerUserErrors { field message }
  }
}`;

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

//  {
//   "activationUrl": "",
//   "password": ""
//  }
const customerActivateByUrl = `
mutation customerActivateByUrl($activationUrl: URL!, $password: String!) {
  customerActivateByUrl(activationUrl: $activationUrl, password: $password) {
    customer { ${customerFragment} }
    customerAccessToken { accessToken expiresAt }
    customerUserErrors { filed message }
  }
}
`;

const queryCustomer = `
query customer ($token: String!) {
  customer(customerAccessToken: $token) {
    ${customerFragment}
  }
}`;

const customerRecover = `
mutation customerRecover($email: String!) {
  customerRecover(email: $email) {
    customerUserErrors { field message }
  }
}`;

/* {
  "id": "",
  "input": {
    "password": "",
    "resetToken": ""
  }
} */
const customerReset = `
mutation customerReset($id: ID!, $input: CustomerResetInput!) {
  customerReset(id: $id, input: $input) {
    customer { ${customerFragment} }
    customerAccessToken { accessToken expiresAt }
    customerUserErrors { code field message}
  }
}
`;

/* {
  "password": "",
  "resetUrl": ""
} */
const customerResetByUrl = `
mutation customerResetByUrl($password: String!, $resetUrl: URL!) {
  customerResetByUrl(password: $password, resetUrl: $resetUrl) {
      customerAccessToken { accessToken expiresAt }
      customerUserErrors { code field message}
  }
}`;

/* {
  "token": "",
  "first":"",
  "after": ""
} */
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

/* {
  "address": {
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
  },
  "customerAccessToken": ""
} */
const customerAddressCreate = `
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

/* 
{
  "customerAccessToken": "",
  "id": ""
} */
const customerAddressDelete = `
mutation customerAddressDelete($customerAccessToken: String!, $id: ID!) {
  customerAddressDelete(customerAccessToken: $customerAccessToken, id: $id) {
    customerUserErrors { message }
    deletedCustomerAddressId
  }
}`;

/* {
  "address": {
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
  },
  "customerAccessToken": "",
  "id": ""
} */
const customerAddressUpdate = `
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

/* {
  "addressId": "",
  "customerAccessToken": ""
} */
const customerDefaultAddressUpdate = `
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

const customerUpdate = `
mutation customerUpdate($customer: CustomerUpdateInput!, $customerAccessToken: String!) {
  customerUpdate(customer: $customer, customerAccessToken: $customerAccessToken) {
    customer { ${customerFragment} }
    customerAccessToken { accessToken expiresAt }
    customerUserErrors { message }
  }
}`;

const queryCustomerAddressById = `
query ($id: ID!) {
  node(id: $id) {
    ... on MailingAddress {
        ${addressFragment}
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

const queryOrderById = `
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

const customerQueries = {
  customerCreate,
  customerAccessTokenCreate,
  customerAccessTokenCreateWithMultipass,
  customerAccessTokenRenew,
  customerAccessTokenDelete,
  customerActivate,
  customerActivateByUrl,
  customerRecover,
  customerResetByUrl,
  customerReset,
  customerUpdate,
  customerAddressCreate,
  customerAddressUpdate,
  customerDefaultAddressUpdate,
  customerAddressDelete,
  queryCustomer,
  queryDelegateAccessToken,
  queryCustomerOrders,
  queryOrderById,
  queryCustomerAddresses,
  queryCustomerAddressById,
};

export default customerQueries;
