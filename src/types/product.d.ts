export {};

declare global {
  type PRICE_RANGE_TYPE = {
    maxVariantPrice: {
      amount: string;
      currencyCode: 'USD' | 'CAD' | 'EUR' | 'GBP' | 'AUD' | 'JPY' | 'CNY';
    };
    minVariantPrice: {
      amount: string;
      currencyCode: 'USD' | 'CAD' | 'EUR' | 'GBP' | 'AUD' | 'JPY' | 'CNY';
    };
  };

  type PRODUCT_OPTION_TYPE = {
    id: string;
    name: string;
    values: Array<string>;
  };

  type IMAGE_TYPE = {
    id: string;
    src: string;
    altText: string | null;
    small: string;
    medium: string;
    large: string;
    blurDataURL: string;
    width: number;
    height: number;
  };

  type PRODUCT_VARIANT_TYPE = {
    cursor?: string | null;
    id?: string | null;
    availableForSale?: boolean | null;
    quantityAvailable?: number | null;
    title?: string | null;
    sku?: string | null;
    weight?: number | null;
    weightUnit?: 'KILOGRAMS' | 'GRAMS' | 'OUNCES' | 'POUNDS' | null;
    compareAtPriceV2?: {
      amount?: string | null;
      currencyCode?: 'USD' | 'CAD' | 'EUR' | 'GBP' | 'AUD' | 'JPY' | 'CNY' | null;
    } | null;
    selectedOptions?: Array<{
      name?: string | null;
      value?: string | null;
    }> | null;
    image?: IMAGE_TYPE | null;
    priceV2?: {
      amount?: string | null;
      currencyCode?: 'USD' | 'CAD' | 'EUR' | 'GBP' | 'AUD' | 'JPY' | 'CNY' | null;
    } | null;
  };

  type PRODUCT_TYPE = {
    id: string;
    title: string;
    handle: string;
    description: string;
    vendor: string;
    productType: string;
    tags: Array<string>;
    totalInventory: number;
    options: Array<PRODUCT_OPTION_TYPE>;
    images: Array<IMAGE_TYPE>;
    priceRange: PRICE_RANGE_TYPE;
    variants: Array<PRODUCT_VARIANT_TYPE>;
    collections: Array<{
      cursor: string | null;
      handle: string;
    }>;
    metafields: Array<METAFIELD_TYPE>;
  };
}
