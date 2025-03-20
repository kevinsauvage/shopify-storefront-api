const getShop = `
  query ($language: LanguageCode) @inContext(language: $language) {
    shop {
      description
      name
      moneyFormat
      shipsToCountries
      primaryDomain {
        host
        url
      }
      brand {
        shortDescription
        slogan
        logo {
          image {
            height
            src
            width
            altText
          }
        }
      }
    }
  }`;
const getPrivacyPolicy = `
  query ($language: LanguageCode) @inContext(language: $language) {
    shop {
      privacyPolicy {
        id
        body
        title
      }
    }
  }`;
const getRefundPolicy = `
  query ($language: LanguageCode) @inContext(language: $language) {
    shop {
      refundPolicy {
        id
        body
        title
      }
    }
  }`;
const getShippingPolicy = `
  query ($language: LanguageCode) @inContext(language: $language) {
    shop {
      shippingPolicy {
        id
        body
        title
      }
    }
  }`;
const getTermsOfService = `
  query ($language: LanguageCode) @inContext(language: $language) {
    shop {
      termsOfService {
        id
        body
        title
      }
    }
  }`;
const getSubscriptionPolicy = `
  query ($language: LanguageCode) @inContext(language: $language) {
    shop {
      subscriptionPolicy {
        id
        body
        title
      }
    }
  }`;
const getMenu = `
  query ($handle: String!, $language: LanguageCode) @inContext(language: $language) {
    menu(handle: $handle) {
      id
      items {
        id
        resourceId
        tags
        title
        type
        url
        items {
          id
          resourceId
          tags
          title
          type
          url
          items {
            id
            resourceId
            tags
            title
            type
            url
          }
        }
      }
    }
  }`;
const getPage = `
  query ($handle: String!, $language: LanguageCode) @inContext(language: $language) {
    page(handle: $handle) {
      bodySummary
      handle
      id
      data: metafield(namespace: "custom", key: "data") {
        value
        type
      }
    }
  }`;
const getMetaObject = `
  query ($handle: MetaobjectHandleInput, $language: LanguageCode) @inContext(language: $language) {
    metaobject(handle: $handle) {
      fields {
        key
        value
      }
    }
  }`;
const queryMetaObjects = `
  query getMetaObjects(
    $type: String!,
    $sortKey: String,
    $first: Int,
    $reverse: Boolean, 
    $language: LanguageCode
  ) @inContext(language: $language) {
    metaobjects(
      type: $type,
      sortKey: $sortKey,
      first: $first,
    ) {
      edges {
        node {
          id
          fields {
            key
            value
          }
          handle
          updatedAt
          type
        }
      }
    }
  }`;
const getBlogByHandle = `
  query getBlogByHandle(
    $handle: String!, 
    $language: LanguageCode) 
    @inContext(language: $language) {
      blog(handle: $handle) {
        id
        title
        articles(first: 5) {
          edges {
            node {
              id
              title
            }
          }
        }
      }
    }
  `;
const localization = `
  query ($countryCode: CountryCode) @inContext(country: $countryCode) {
    localization {
      availableCountries {
        currency {
          isoCode
          name
          symbol
        }
        isoCode
        name
        unitSystem
      }
      country {
        currency {
          isoCode
          name
          symbol
        }
        isoCode
        name
        unitSystem
      }
    }
  }`;
const shopQueries = {
    getShop,
    getMenu,
    getPage,
    getPrivacyPolicy,
    getRefundPolicy,
    getShippingPolicy,
    getTermsOfService,
    queryMetaObjects,
    getMetaObject,
    getSubscriptionPolicy,
    getBlogByHandle,
    localization,
};
export default shopQueries;
