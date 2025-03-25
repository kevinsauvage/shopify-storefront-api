export {};

declare global {
  type PriceRangeType = {
    maxVariantPrice: {
      amount: string;
      currencyCode: 'USD' | 'CAD' | 'EUR' | 'GBP' | 'AUD' | 'JPY' | 'CNY';
    };
    minVariantPrice: {
      amount: string;
      currencyCode: 'USD' | 'CAD' | 'EUR' | 'GBP' | 'AUD' | 'JPY' | 'CNY';
    };
  };

  type ProductOptionType = {
    id: string;
    name: string;
    values: Array<string>;
  };

  type ImageType = {
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

  type ProductVariantType = {
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
    image?: ImageType | null;
    priceV2?: {
      amount?: string | null;
      currencyCode?: 'USD' | 'CAD' | 'EUR' | 'GBP' | 'AUD' | 'JPY' | 'CNY' | null;
    } | null;
  };

  type ProductType = {
    id: string;
    title: string;
    handle: string;
    description: string;
    vendor: string;
    productType: string;
    tags: Array<string>;
    totalInventory: number;
    options: Array<ProductOptionType>;
    images: Array<ImageType>;
    priceRange: PriceRangeType;
    variants: Array<ProductVariantType>;
    collections: Array<{
      cursor: string | null;
      handle: string;
    }>;
    metafields: Array<MetafieldType>;
  };
}
