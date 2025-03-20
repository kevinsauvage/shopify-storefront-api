export {}; // Ensures TypeScript treats this file as a module

declare global {
  type ATTRIBUTE_TYPE = {
    key: string; // Key of the attribute
    value: string; // Value of the attribute
  };

  type COST_TYPE = {
    totalAmount: {
      amount: string; // Total amount of the cart
      currencyCode: string; // Currency code of the total amount
    };
    subtotalAmount: {
      amount: string; // Subtotal amount of the cart
      currencyCode: string; // Currency code of the subtotal amount
    };
    totalTaxAmount: {
      amount: string | null; // Total tax amount of the cart or null if not applicable
      currencyCode: string | null; // Currency code of the total tax amount or null if not applicable
    };
    totalDutyAmount: {
      amount: string | null; // Total duty amount of the cart or null if not applicable
      currencyCode: string | null; // Currency code of the total duty amount or null if not applicable
    };
  };

  type PAGE_INFO_TYPE = {
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    startCursor?: string | null;
    endCursor?: string | null;
  };

  type SEO_TYPE = {
    title: string;
    description: string;
  };

  type FILTER_TYPE = {
    id: string;
    label: string;
    type: 'SELECT' | 'MULTISELECT' | 'PRICE_RANGE' | 'LIST';
    values: Array<{
      id: string;
      label: string;
      count: number;
      input: string;
    }>;
  };

  type USER_ERROR_TYPE = { field: string; message: string };
}
