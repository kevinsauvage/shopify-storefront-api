export const imageFragment = `
src
altText
small:  url(transform: { maxHeight: 100, maxWidth: 100, crop: CENTER, preferredContentType: WEBP })
medium:  url(transform: { maxHeight: 400, maxWidth: 400, crop: CENTER, preferredContentType: WEBP })
large:  url(transform: { maxHeight: 600, maxWidth: 600, crop: CENTER, preferredContentType: WEBP })
blurDataURL: url(transform: {maxHeight: 4, maxWidth: 4, crop: CENTER,  preferredContentType: WEBP})
width
height`;

export const addressFragment = `
id
name
address1
address2
city
country
company
countryCode
countryCodeV2
firstName
formattedArea
lastName
latitude
longitude
phone
province
provinceCode
zip
`;

export const variantFragment = `
id
availableForSale
quantityAvailable
title
sku
weight
weightUnit
compareAtPriceV2 {
  amount
  currencyCode
}
selectedOptions {
  name
  value
}
image {
  ${imageFragment}
}
priceV2 {
  amount
  currencyCode
}
product {
  handle
  title
  collections(first: 1) {
    nodes {
        handle
    }
  }
}

`;

export const checkoutFragment = `
webUrl
completedAt
createdAt
currencyCode
email
id
totalPrice {
  amount
  currencyCode
}
subtotalPrice {
  amount
  currencyCode
}
shippingLine {
  price {
    amount
    currencyCode
  }
}
orderStatusUrl
lineItemsSubtotalPrice {
  amount
  currencyCode
}

shippingAddress {
  ${addressFragment}
}

lineItems(first: $first, after: $after) {
  edges {
    node {
      id
      title
      quantity
      variant {
          ${variantFragment}
      }
    }
  }
}`;

export const productFragment = `
handle
id
title
availableForSale
descriptionHtml
images(first: 20) {
  edges {
    node {
      ${imageFragment}
    }
  }
}
priceRange {
  maxVariantPrice {
    amount
    currencyCode
  }
  minVariantPrice {
    amount
    currencyCode
  }
}
productType
tags
title
options {
  id
  name
  values
}
totalInventory
vendor
collections(first: 1) {
  edges {
    node {
      handle
    }
  }
}
variants(first: 8) {
  edges {
    node {
      ${variantFragment}
    }
  }
}
metafields(identifiers: $identifiers) {
  key
  value
}
`;

export const customerFragment = `
id
firstName
lastName
acceptsMarketing
email
phone
defaultAddress {
 ${addressFragment}
}`;

export const orderFragment = `
id
name
fulfillmentStatus
currencyCode
customerUrl
email
financialStatus
orderNumber
phone
processedAt
subtotalPriceV2 {
  amount
  currencyCode
}
totalPriceV2 {
  amount
  currencyCode
}
totalRefundedV2 {
  currencyCode
  amount
}
totalShippingPriceV2 {
  amount
  currencyCode
}
totalTaxV2 {
  amount
  currencyCode
}
successfulFulfillments(first: 10) {
  trackingCompany
  trackingInfo(first: 10) {
    number
    url
  }
}
customAttributes {
  key
  value
}
shippingAddress {
  id
  address1
  address2
  city
  company
  country
  countryCodeV2
  firstName
  formatted
  formattedArea
  lastName
  name
  phone
  province
  provinceCode
  zip
}`;

export const collectionFragment = `
handle
description
title
id
image {
  src
  altText
  small:  url(transform: { maxHeight: 200, maxWidth: 400, crop: CENTER, preferredContentType: WEBP })
  medium:  url(transform: { maxHeight: 300, maxWidth: 500, crop: CENTER, preferredContentType: WEBP })
  large:  url(transform: { maxHeight: 400, maxWidth: 600, crop: CENTER, preferredContentType: WEBP })
  blurDataURL: url(transform: {maxHeight: 2, maxWidth: 4, crop: CENTER,  preferredContentType: WEBP})
  width
  height
}
seo {
  description
  title
}`;

export const filterFragment = `
id
label
type
values {
  id
  label
  count
  input
}`;

export const pageInfoFragment = `
hasNextPage
hasPreviousPage
endCursor
startCursor`;

export const lineItemFragment = `
currentQuantity
quantity
title
discountedTotalPrice {
  amount
  currencyCode
}
originalTotalPrice {
  amount
  currencyCode
}
customAttributes {
  key
  value
}
discountAllocations {
  allocatedAmount {
    amount
    currencyCode
  }
}
variant {
  image {
    ${imageFragment}
  }
  title
}
`;
