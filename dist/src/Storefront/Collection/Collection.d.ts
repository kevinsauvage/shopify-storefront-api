import ShopifyStorefrontApi from '../ShopifyStorefrontApi';
declare class Collection extends ShopifyStorefrontApi {
    collection: (variables: {
        handle: string;
        filters?: unknown | undefined;
        first?: number | undefined;
        before?: string | undefined;
        after?: string | undefined;
        sortKey?: string | undefined;
        identifiers?: unknown[] | undefined;
        language?: string | undefined;
    }) => Promise<{
        collection: COLLECTION_TYPE;
        pageInfo: PAGE_INFO_TYPE;
        collectionFilters: Array<FILTER_TYPE>;
    } | null>;
    collections: (variables: {
        first?: number;
        after?: string;
        before?: string;
        sortKey?: string;
        firstProducts?: number;
        afterProducts?: string;
        beforeProducts?: string;
        productsSortKey?: string;
        language?: string;
        identifiers?: unknown[];
    }) => Promise<{
        collections: Array<COLLECTION_TYPE>;
        pageInfo: PAGE_INFO_TYPE;
    }>;
}
export default Collection;
