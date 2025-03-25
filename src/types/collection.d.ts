export {};

declare global {
  type CollectionType = {
    handle: string;
    description: string;
    title: string;
    id: string;
    image: string | null;
    seo: SeoType;
    products: Array<ProductType>;
    filters: Array<FilterType>;
    pageInfo: PageInfoType;
  };
}
