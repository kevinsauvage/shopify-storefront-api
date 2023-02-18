export const queryDelegateAccessToken = `
mutation delegateAccessTokenCreate($input: DelegateAccessTokenInput!) {
  delegateAccessTokenCreate(input: $input) {
    delegateAccessToken { accessToken createdAt }
    userErrors { field message }
  }
}`;
