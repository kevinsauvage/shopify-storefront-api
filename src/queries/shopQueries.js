const getShop = `
query {
  shop {
    description
    name
    primaryDomain {
      host
      url
    }
  }
}`;

const getPrivacyPolicy = `
query {
  shop {
    privacyPolicy {
  		id
			body
			title
    }
  }
}`;

const getRefundPolicy = `
query {
  shop {
    refundPolicy {
			id
			body
			title
    }
  }
}`;

const getShippingPolicy = `
query {
  shop {
    shippingPolicy {
			id
			body
			title
    }
  }
}`;

const getTermsOfService = `
query {
  shop {
    termsOfService {
			id
			body
			title
    }
  }
}`;

const getSuscriptionPolicy = `
query {
  shop {
    subscriptionPolicy {
			id
			body
			title
    }
  }
}`;

const getMenu = `
query ($handle: String!) {
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
query ($handle: String!) {
  page(handle: $handle) {
    bodySummary
    handle
    id
    data: metafield(namespace: "custom", key: "data") {
      value
      type
    }
  }
}
`;

const getMetaObject = `
query ($handle: MetaobjectHandleInput) {
  metaobject(handle: $handle) {
    fields {
      key
      value
    }
  }
}
`;

const queryMetaObjects = `
query getMetaObjects(
  $type: String!,
  $sortKey: String,
  $first: Int,
  $reverse: Boolean
){
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
query getBlogByHandle($handle: String!) {
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
  getSuscriptionPolicy,
};

export default shopQueries;
