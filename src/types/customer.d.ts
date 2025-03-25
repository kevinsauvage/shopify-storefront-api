export {};

declare global {
  type CustomerOrderType = {
    cursor: string;
    id: string;
    name: string;
    fulfillmentStatus: string;
    currencyCode: string;
    customerUrl: string;
    email: string;
    financialStatus: string;
    orderNumber: number;
    phone: string | null;
    processedAt: string;
    subtotalPriceV2: MoneyV2Type;
    totalPriceV2: MoneyV2Type;
    totalRefundedV2: MoneyV2Type;
    totalShippingPriceV2: MoneyV2Type;
    totalTaxV2: MoneyV2Type;
    successfulFulfillments: FulfillmentType[];
    customAttributes: AttributeType[];
    shippingAddress: MailingAddressType;
    billingAddress: MailingAddressType;
  };

  type MetafieldType = {
    id: string;
    namespace: string;
    key: string;
    value: string;
  };

  type CustomerType = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string | null;
    acceptsMarketing: boolean;
    createdAt: string;
    updatedAt: string;
    defaultAddress: MailingAddressType | null;
    addresses: MailingAddressType[];
    orders: CustomerOrderType[];
    metafields: MetafieldType[];
  };

  type CustomerAddressInputType = {
    address1: string;
    address2?: string;
    city: string;
    province: string;
    country: string;
    zip: string;
    firstName?: string;
    lastName?: string;
    company?: string;
    phone?: string;
  };

  type CustomerCreateInputType = {
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
  };
}
