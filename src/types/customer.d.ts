export {};

declare global {
  type CUSTOMER_ADDRESS_TYPE = {
    id: string;
    name: string;
    provinceCode: string | null;
    address1: string;
    address2: string;
    city: string;
    province: string;
    country: string;
    zip: string;
    phone?: string;
    firstName?: string;
    lastName?: string;
    company?: string;
    countryCode: string;
    countryCodeV2: string;
    formattedArea: string;
    latitude: number | null;
    longitude: number | null;
  };

  type CUSTOMER_ORDER_TYPE = {
    id: string;
    orderNumber: string;
    totalPrice: string;
    currencyCode: string;
  };

  type METAFIELD_TYPE = {
    id: string;
    namespace: string;
    key: string;
    value: string;
  };

  type CUSTOMER_TYPE = {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string | null;
    acceptsMarketing: boolean;
    createdAt: string;
    updatedAt: string;
    defaultAddress: CUSTOMER_ADDRESS_TYPE | null;
    addresses: CUSTOMER_ADDRESS_TYPE[];
    orders: CUSTOMER_ORDER_TYPE[];
    metafields: METAFIELD_TYPE[];
  };

  type CUSTOMER_ADDRESS_INPUT_TYPE = {
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

  type CUSTOMER_CREATE_INPUT_TYPE = {
    email: string;
    password: string;
    firstName?: string;
    lastName?: string;
  };
}
