export {}; // Ensures TypeScript treats this file as a module

declare global {
  type ApiVersionType = {
    displayName: string; // The human-readable name of the version.
    handle: string; // The unique identifier of an ApiVersion (YYYY-MM or unstable).
    supported: boolean; // Indicates whether the version is actively supported.
  };

  type MoneyV2Type = {
    amount: string; // The monetary value as a string to preserve precision.
    currencyCode: string; // The currency in ISO 4217 format (e.g., "USD").
  };

  type AppliedGiftCardType = {
    id: string; // A globally unique ID.
    amountUsed: MoneyV2Type; // The amount deducted from the gift card.
    balance: MoneyV2Type; // The remaining balance on the gift card.
    lastCharacters: string; // The last characters of the gift card.
    presentmentAmountUsed: MoneyV2Type; // The amount applied to the checkout in its currency.
  };

  type AttributeType = {
    key: string; // The key or name of the attribute (e.g., "customersFirstOrder").
    value?: string | null; // The value of the attribute (e.g., "true"). It can be null or undefined.
  };

  type CostType = {
    totalAmount: MoneyV2Type;
    subtotalAmount: MoneyV2Type;
    totalTaxAmount: {
      amount: string | null; // Total tax amount of the cart or null if not applicable
      currencyCode: string | null; // Currency code of the total tax amount or null if not applicable
    };
    totalDutyAmount: {
      amount: string | null; // Total duty amount of the cart or null if not applicable
      currencyCode: string | null; // Currency code of the total duty amount or null if not applicable
    };
  };

  type MailingAddressType = {
    id: string;
    address1: string;
    address2: string;
    city: string;
    company: string;
    country: string;
    countryCodeV2: string;
    firstName: string;
    formatted: string[];
    formattedArea: string;
    lastName: string;
    latitude?: number;
    longitude?: number;
    name: string;
    phone: string;
    province: string;
    provinceCode: string;
    zip: string;
  };

  type PageInfoType = {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor?: string | null;
    endCursor?: string | null;
  };

  type SeoType = {
    title: string;
    description: string;
  };

  type FilterType = {
    id: string;
    label: string;
    type: 'BOOLEAN' | 'LIST' | 'PRICE_RANGE';
    values: Array<{
      id: string;
      label: string;
      count: number;
      input: string;
    }>;
  };

  type UserErrorType = {
    message: string; // Error message
    field: Array<string>; // Fields associated with the error
    code: string; // Error code
  };

  type CustomerAccessTokenType = {
    accessToken: string; // The access token for the customer
    expiresAt: string; // The expiration date of the access token
  };

  type FulfillmentType = {
    id: string; // Unique identifier for the fulfillment
    status: string; // Status of the fulfillment (e.g., "FULFILLED", "UNFULFILLED")
    trackingCompany: string | null; // Name of the tracking company or null if not applicable
    trackingInfo: Array<{
      number: string; // Tracking number
      url: string | null; // URL to track the shipment or null if not applicable
      company: string | null; // Name of the tracking company or null if not applicable
    }>; // Array of tracking information
    trackingNumbers: Array<string>; // Array of tracking numbers
    trackingUrls: Array<string>; // Array of tracking URLs
  };
}
