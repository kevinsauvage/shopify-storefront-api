export const queryDelegateAccessToken = `
mutation delegateAccessTokenCreate($input: DelegateAccessTokenInput!) {
  delegateAccessTokenCreate(input: $input) {
    delegateAccessToken { accessToken createdAt }
    userErrors { field message }
  }
}`;

export const metafieldsSet = `
mutation MetafieldsSet($metafields: [MetafieldsSetInput!]!) {
  metafieldsSet(metafields: $metafields) {
    metafields {
      key
      namespace
      value
      createdAt
      updatedAt
    }
    userErrors {
      field
      message
      code
    }
  }
}`;
