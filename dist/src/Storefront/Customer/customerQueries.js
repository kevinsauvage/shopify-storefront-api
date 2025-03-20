import { addressFragment, customerFragment, lineItemFragment, orderFragment, pageInfoFragment, } from '../../fragment';
const customerAccessTokenCreate = `
  mutation customerAccessTokenCreate(
    $input: CustomerAccessTokenCreateInput!, 
    $language: LanguageCode
  ) @inContext(language: $language) {
    customerAccessTokenCreate(input: $input) {
      customerAccessToken {
        accessToken
        expiresAt
      }
      customerUserErrors {
        field
        message
      }
    }
  }
`;
const customerAccessTokenCreateWithMultipass = `
  mutation customerAccessTokenCreateWithMultipass(
    $multipassToken: String!, 
    $language: LanguageCode
  ) @inContext(language: $language) {
    customerAccessTokenCreateWithMultipass(multipassToken: $multipassToken) {
      customerAccessToken {
        accessToken
        expiresAt
      }
      customerUserErrors {
        field
        message
      }
    }
  }
`;
const customerAccessTokenDelete = `
  mutation customerAccessTokenDelete(
    $customerAccessToken: String!, 
    $language: LanguageCode
  ) @inContext(language: $language) {
    customerAccessTokenDelete(customerAccessToken: $customerAccessToken) {
      deletedAccessToken
      deletedCustomerAccessTokenId
      userErrors {
        field
        message
      }
    }
  }
`;
const customerAccessTokenRenew = `
  mutation customerAccessTokenRenew(
    $customerAccessToken: String!, 
    $language: LanguageCode
  ) @inContext(language: $language) {
    customerAccessTokenRenew(customerAccessToken: $customerAccessToken) {
      customerAccessToken {
        accessToken
        expiresAt
      }
      userErrors {
        field
        message
      }
    }
  }
`;
const customerActivate = `
  mutation customerActivate(
    $id: ID!, 
    $input: CustomerActivateInput!, 
    $language: LanguageCode
  ) @inContext(language: $language) {
    customerActivate(
      id: $id, 
      input: $input
    ) {
      customer {
        ${customerFragment}
      }
      customerAccessToken {
        accessToken
        expiresAt
      }
      customerUserErrors {
        field
        message
      }
    }
  }
`;
const customerActivateByUrl = `
  mutation customerActivateByUrl(
    $activationUrl: URL!, 
    $password: String!, 
    $language: LanguageCode
  ) @inContext(language: $language) {
    customerActivateByUrl(
      activationUrl: $activationUrl, 
      password: $password
    ) {
      customer {
        ${customerFragment}
      }
      customerAccessToken {
        accessToken
        expiresAt
      }
      customerUserErrors {
        field
        message
      }
    }
  }
`;
const customerAddressCreate = `
  mutation customerAddressCreate(
    $address: MailingAddressInput!, 
    $customerAccessToken: String!, 
    $language: LanguageCode
  ) @inContext(language: $language) {
    customerAddressCreate(
      address: $address, 
      customerAccessToken: $customerAccessToken
    ) {
      customerAddress {
        ${addressFragment}
      }
      customerUserErrors {
        field
        message
      }
    }
  }
`;
const customerAddressDelete = `
  mutation customerAddressDelete(
    $customerAccessToken: String!, 
    $addressId: ID!, 
    $language: LanguageCode
  ) @inContext(language: $language) {
    customerAddressDelete(
      customerAccessToken: $customerAccessToken, 
      id: $addressId
    ) {
      deletedCustomerAddressId
      customerUserErrors {
        field
        message
      }
    }
  }
`;
const customerAddressUpdate = `
  mutation customerAddressUpdate(
    $address: MailingAddressInput!, 
    $customerAccessToken: String!, 
    $addressId: ID!, 
    $language: LanguageCode
  ) @inContext(language: $language) {
    customerAddressUpdate(
      address: $address, 
      customerAccessToken: $customerAccessToken, 
      id: $addressId
    ) {
      customerAddress {
        ${addressFragment}
      }
      customerUserErrors {
        field
        message
      }
    }
  }
`;
const customerCreate = `
  mutation customerCreate($input: CustomerCreateInput!) {
    customerCreate(input: $input) {
      customer {
        ${customerFragment}
      }
      userErrors {
        field
        message
      }
    }
  }
`;
const customerDefaultAddressUpdate = `
  mutation customerDefaultAddressUpdate(
    $addressId: ID!, 
    $customerAccessToken: String!, 
    $language: LanguageCode
  ) @inContext(language: $language) {
    customerDefaultAddressUpdate(
      addressId: $addressId, 
      customerAccessToken: $customerAccessToken
    ) {
      customer {
        ${customerFragment}
      }
      customerUserErrors {
        field
        message
      }
    }
  }
`;
const customerRecover = `
  mutation customerRecover(
    $email: String!, 
    $language: LanguageCode
  ) @inContext(language: $language) {
    customerRecover(email: $email) {
      customerUserErrors {
        field
        message
      }
    }
  }
`;
const customerReset = `
  mutation customerReset(
    $id: ID!, 
    $input: CustomerResetInput!, 
    $language: LanguageCode
  ) @inContext(language: $language) {
    customerReset(
      id: $id, 
      input: $input
    ) {
      customer {
        ${customerFragment}
      }
      customerAccessToken {
        accessToken
        expiresAt
      }
      customerUserErrors {
        field
        message
      }
    }
  }
`;
const customerResetByUrl = `
  mutation customerResetByUrl(
    $password: String!, 
    $resetUrl: URL!, 
    $language: LanguageCode
  ) @inContext(language: $language) {
    customerResetByUrl(
      password: $password, 
      resetUrl: $resetUrl
    ) {
      customer {
        ${customerFragment}
      }
      customerAccessToken {
        accessToken
        expiresAt
      }
      customerUserErrors {
        field
        message
      }
    }
  }
`;
const customerUpdate = `
  mutation customerUpdate(
    $customer: CustomerUpdateInput!, 
    $customerAccessToken: String!, 
    $language: LanguageCode
  ) @inContext(language: $language) {
    customerUpdate(
      customer: $customer, 
      customerAccessToken: $customerAccessToken
    ) {
      customer {
        ${customerFragment}
      }
      customerAccessToken {
        accessToken
        expiresAt
      }
      customerUserErrors {
        field
        message
      }
    }
  }
`;
const queryCustomer = `
  query customer(
    $customerAccessToken: String!, 
    $language: LanguageCode
  ) @inContext(language: $language) {
    customer(customerAccessToken: $customerAccessToken) {
      ${customerFragment}
    }
  }
`;
const queryCustomerMetafields = `
  query customer(
    $customerAccessToken: String!, 
    $metafields: [HasMetafieldsIdentifier!]!, 
    $language: LanguageCode
  ) @inContext(language: $language) {
    customer(customerAccessToken: $customerAccessToken) {
      metafields(identifiers: $metafields) {
        key
        value
        updatedAt
      }
    }
  }
`;
const queryCustomerAddresses = `
  query customer(
    $customerAccessToken: String!, 
    $first: Int, 
    $last: Int, 
    $before: String, 
    $after: String, 
    $language: LanguageCode
  ) 
  @inContext(language: $language) {
    customer(customerAccessToken: $customerAccessToken) {
      addresses(
        first: $first, 
        last: $last, 
        before: $before, 
        after: $after
      ) {
        edges {
          cursor
          node {
            ${addressFragment}
          }
        }
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
      }
    }
  }
`;
const queryCustomerOrders = `
  query customerOrders(
    $customerAccessToken: String!, 
    $first: Int, 
    $last: Int, 
    $before: String, 
    $after: String, 
    $sortKey: OrderSortKeys, 
    $reverse: Boolean, 
    $language: LanguageCode
  ) 
  @inContext(language: $language) {
    customer(customerAccessToken: $customerAccessToken) {
      orders(first: $first, last: $last, before: $before, after: $after, sortKey: $sortKey, reverse: $reverse) {
        edges {
          cursor
        }
        totalCount
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
  }
`;
// TODO: IMPLEMENT ON THE FRONT
const queryCustomerOrderById = `
  query customerOrderById(
    $orderId: ID!, 
    $first: Int, 
    $last: Int, 
    $before: String, 
    $after: String, 
    $language: LanguageCode
  ) @inContext(language: $language) {
    node(id: $orderId) {
      ... on Order {
        ${orderFragment}
        lineItems(
          first: $first, 
          last: $last, 
          before: $before, 
          after: $after
        ) {
          edges {
            node {
              ${lineItemFragment}
            }
          }
          pageInfo {
            ${pageInfoFragment}
          }
        }
      }
    }
  }
`;
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
    queryCustomerOrders,
    queryCustomerOrderById,
};
export default customerQueries;
