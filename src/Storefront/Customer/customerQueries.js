import {
  addressFragment,
  customerFragment,
  lineItemFragment,
  orderFragment,
  pageInfoFragment,
} from '../../fragment';

// {
//  "input": {
//    "email": "",
//   "password": ""
//   }
// }
const customerAccessTokenCreate = `
mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!, $language: LanguageCode) 
@inContext(language: $language)  {
  customerAccessTokenCreate(input: $input) {
    customerAccessToken { accessToken expiresAt }
    customerUserErrors { field message }
  }
}`;

// {
//  "multipassToken": ""
// }
const customerAccessTokenCreateWithMultipass = `
mutation customerAccessTokenCreateWithMultipass($multipassToken: String!, $language: LanguageCode) 
@inContext(language: $language)  {
  customerAccessTokenCreateWithMultipass(multipassToken: $multipassToken) {
    customerAccessToken { accessToken expiresAt }
    customerUserErrors { field message }
  }
}`;

// {
// "customerAccessToken": ""
// }
const customerAccessTokenDelete = `
mutation customerAccessTokenDelete($customerAccessToken: String!, $language: LanguageCode) 
@inContext(language: $language)  {
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
mutation ($customerAccessToken: String!, $language: LanguageCode) 
@inContext(language: $language)  {
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
mutation customerActivate($id: ID!, $input: CustomerActivateInput!, $language: LanguageCode) 
@inContext(language: $language)  {
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
mutation customerActivateByUrl($activationUrl: URL!, $password: String!, $language: LanguageCode) 
@inContext(language: $language)  {
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
mutation customerAddressCreate($address: MailingAddressInput!, $customerAccessToken: String!, $language: LanguageCode) 
@inContext(language: $language)  {
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
mutation customerAddressDelete($customerAccessToken: String!, $addressId: ID!, $language: LanguageCode) 
@inContext(language: $language)  {
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
mutation customerAddressUpdate($address: MailingAddressInput!, $customerAccessToken: String!, $addressId: ID!, $language: LanguageCode) 
@inContext(language: $language)  {
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
mutation customerDefaultAddressUpdate($addressId: ID!, $customerAccessToken: String!, $language: LanguageCode) 
@inContext(language: $language)  {
  customerDefaultAddressUpdate(addressId: $addressId, customerAccessToken: $customerAccessToken) {
    customer { ${customerFragment} }
    customerUserErrors { message }
  }
}`;

/* {
  "email": ""
} */
const customerRecover = `
mutation customerRecover($email: String!, $language: LanguageCode) 
@inContext(language: $language)  {
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
mutation customerReset($id: ID!, $input: CustomerResetInput!, $language: LanguageCode) 
@inContext(language: $language)  {
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
mutation customerResetByUrl($password: String!, $resetUrl: URL!, $language: LanguageCode) 
@inContext(language: $language)  {
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
mutation customerUpdate($customer: CustomerUpdateInput!, $customerAccessToken: String!, $language: LanguageCode) 
@inContext(language: $language)  {
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
query customer ($customerAccessToken: String!, $language: LanguageCode) 
@inContext(language: $language)  {
  customer(customerAccessToken: $customerAccessToken) {
    ${customerFragment}
  }
}`;

const queryCustomerMetafields = `
query customer ($customerAccessToken: String!, $metafields: [HasMetafieldsIdentifier!]!, $language: LanguageCode) 
@inContext(language: $language)  {
  customer(customerAccessToken: $customerAccessToken) {
    metafields(identifiers: $metafields) {
      value
      key
      updatedAt
    }
  }
}`;

const queryCustomerAddresses = `
query customer ($customerAccessToken: String!, $first: Int, $after: String, $language: LanguageCode) 
@inContext(language: $language)  {
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
query ($addressId: ID!, $language: LanguageCode) 
@inContext(language: $language)  {
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
query customer ($customerAccessToken: String!, $first: Int, $after: String, $language: LanguageCode) 
@inContext(language: $language)  {
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
query ($orderId: ID!, $first: Int, $after: String, $language: LanguageCode) 
@inContext(language: $language)  {
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
  queryCustomerMetafields,
  queryCustomerAddresses,
  queryCustomerAddressById,
  queryCustomerOrders,
  queryCustomerOrderById,
};

export default customerQueries;
