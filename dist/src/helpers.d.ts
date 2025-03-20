export declare const cleanGraphQLResponse: (data: any) => any;
export declare const findPageInfo: (obj: unknown) => PAGE_INFO_TYPE | null;
export declare const findFilters: (obj: unknown) => Array<FILTER_TYPE> | null;
interface PaginationVariables {
    after?: string;
    before?: string;
    first?: number;
    last?: number;
    [key: string]: unknown;
}
export declare const adjustPaginationVariables: ({ after, before, first, ...rest }: PaginationVariables) => PaginationVariables;
export {};
