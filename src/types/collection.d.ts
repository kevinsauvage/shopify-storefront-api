export {};

declare global {
  type COLLECTION_TYPE = {
    handle: string;
    description: string;
    title: string;
    id: string;
    image: string | null;
    seo: SEO_TYPE;
    products: Array<PRODUCT_TYPE>;
    filters: Array<FILTER_TYPE>;
    pageInfo: PAGE_INFO_TYPE;
  };
}
