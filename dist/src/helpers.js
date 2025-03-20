// @ts-nocheck
export const cleanGraphQLResponse = (data) => {
    let result = Array.isArray(data) ? [] : {};
    if (typeof data !== 'object')
        return data;
    const keys = Object.keys(data);
    keys.forEach((key) => {
        result =
            typeof key === 'string' && key === 'edges'
                ? cleanGraphQLResponse(data.edges.map((edge) => ({ cursor: edge.cursor, ...edge.node })))
                : Object.assign(result, { [key]: data[key] ? cleanGraphQLResponse(data[key]) : null });
    });
    return result;
};
export const findPageInfo = (obj) => {
    if (obj && typeof obj === 'object') {
        if (obj.pageInfo) {
            return obj.pageInfo;
        }
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                const result = findPageInfo(obj[key]);
                if (result) {
                    return result;
                }
            }
        }
    }
    return null;
};
export const findFilters = (obj) => {
    if (obj && typeof obj === 'object') {
        if (obj.filters) {
            return obj.filters;
        }
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                const result = findFilters(obj[key]);
                if (result) {
                    return result;
                }
            }
        }
    }
    return null;
};
export const adjustPaginationVariables = ({ after, before, first, ...rest }) => {
    const variables = {
        ...rest,
        first: after ? first || 10 : undefined, // Forward pagination
        after: after || undefined, // Cursor for next page
        last: before ? first || 10 : undefined, // Backward pagination
        before: before || undefined, // Cursor for previous page
    };
    if (!after && !before) {
        variables.first = first || 10; // Default to forward pagination
    }
    return variables;
};
