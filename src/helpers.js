// eslint-disable-next-line import/prefer-default-export
export const cleanGraphQLResponse = (data) => {
  let result = Array.isArray(data) ? [] : {};

  if (typeof data !== 'object') return data;

  const keys = Object.keys(data);
  keys.forEach((key) => {
    result =
      typeof key === 'string' && key === 'edges'
        ? cleanGraphQLResponse(data.edges.map((edge) => ({ cursor: edge.cursor, ...edge.node })))
        : Object.assign(result, { [key]: data[key] ? cleanGraphQLResponse(data[key]) : null });
  });

  return result;
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
