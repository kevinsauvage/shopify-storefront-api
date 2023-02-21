import {
  addressFragment,
  customerFragment,
  lineItemFragment,
  orderFragment,
  pageInfoFragment,
} from "../../fragment.js";

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
const customerAccessTokenDelete = `
mutation customerAccessTokenDelete($customerAccessToken: String!) {
  customerAccessTokenDelete(customerAccessToken: $customerAccessToken) {
    deletedAccessToken
    deletedCustomerAccessTokenId
    userErrors { field message }
  }
}`;

// {
// "customerAccessToken": ""
// }
const customerAccessTokenRenew = `
mutation ($customerAccessToken: String!) {
  customerAccessTokenRenew(customerAccessToken: $customerAccessToken) {
    customerAccessToken { accessToken expiresAt }
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
    customerAddress { ${addressFragment} }
    customerUserErrors { message }
  }
}`;

/*
{
  "customerAccessToken": "",
  "id": ""
} */
const customerAddressDelete = `
mutation customerAddressDelete($customerAccessToken: String!, $addressId: ID!) {
  customerAddressDelete(customerAccessToken: $customerAccessToken, id: $addressId) {
    customerUserErrors { field message }
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
mutation customerAddressUpdate($address: MailingAddressInput!, $customerAccessToken: String!, $addressId: ID!) {
  customerAddressUpdate(address: $address, customerAccessToken: $customerAccessToken, id: $addressId) {
    customerAddress { ${addressFragment} }
    customerUserErrors { message }
  }
}`;

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
    customer { ${customerFragment} }
    userErrors { field message }
  }
}`;

/* {
  "addressId": "",
  "customerAccessToken": ""
} */
const customerDefaultAddressUpdate = `
mutation customerDefaultAddressUpdate($addressId: ID!, $customerAccessToken: String!) {
  customerDefaultAddressUpdate(addressId: $addressId, customerAccessToken: $customerAccessToken) {
    customer { ${customerFragment} }
    customerUserErrors { message }
  }
}`;

/* {
  "email": ""
} */
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
}`;

/* {
  "password": "",
  "resetUrl": ""
} */
const customerResetByUrl = `
mutation customerResetByUrl($password: String!, $resetUrl: URL!) {
  customerResetByUrl(password: $password, resetUrl: $resetUrl) {
      customer { ${customerFragment} }
      customerAccessToken { accessToken expiresAt }
      customerUserErrors { code field message}
  }
}`;

/* {
  "customer": {
    "acceptsMarketing": true,
    "email": "",
    "firstName": "",
    "lastName": "",
    "password": "",
    "phone": ""
  },
  "customerAccessToken": ""
} */
const customerUpdate = `
mutation customerUpdate($customer: CustomerUpdateInput!, $customerAccessToken: String!) {
  customerUpdate(customer: $customer, customerAccessToken: $customerAccessToken) {
    customer { ${customerFragment} }
    customerAccessToken { accessToken expiresAt }
    customerUserErrors { message }
  }
}`;

// {
// "customerAccessToken": ""
// }
const queryCustomer = `
query customer ($customerAccessToken: String!) {
  customer(customerAccessToken: $customerAccessToken) {
    ${customerFragment}
  }
}`;

const queryCustomerAddresses = `
query customer ($customerAccessToken: String!, $first: Int, $after: String) {
  customer(customerAccessToken: $customerAccessToken) {
    addresses(first: $first, after: $after) {
      edges {
        node {
          ${addressFragment}
        }
      }
    }
  }
}
`;

const queryCustomerAddressById = `
query ($addressId: ID!) {
  node(id: $addressId) {
    ... on MailingAddress {
      ${addressFragment}
    }
  }
}`;

/* {
  "customerAccessToken": "",
  "first":"",
  "after": ""
} */
const queryCustomerOrders = `
query customer ($customerAccessToken: String!, $first: Int, $after: String) {
  customer(customerAccessToken: $customerAccessToken) {
    orders(first: $first, after: $after) {
      totalCount
      pageInfo { ${pageInfoFragment} }
      edges {
        node {
          ${orderFragment}
        }
      }
    }
  }
}`;

const queryCustomerOrderById = `
query ($orderId: ID!, $first: Int, $after: String) {
  node(id: $orderId) {
    ... on Order {
      ${orderFragment}
      lineItems(first: $first, after: $after) {
        edges {
          node {
            ${lineItemFragment}
          }
        }
      }
    }
  }
}`;

const customerQueries = {
  customerAccessTokenCreate,
  customerCreate,
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
  queryCustomerAddresses,
  queryCustomerAddressById,
  queryCustomerOrders,
  queryCustomerOrderById,
};

export default customerQueries;
