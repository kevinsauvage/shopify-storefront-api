// eslint-disable-next-line import/prefer-default-export
export const cleanGraphQLResponse = (data) => {
  let result = Array.isArray(data) ? [] : {};

  if (typeof data !== 'object') return data;

  const keys = Object.keys(data);
  keys.forEach((key) => {
    result =
      typeof key === 'string' && key === 'edges'
        ? cleanGraphQLResponse(data.edges.map((edge) => edge.node))
        : Object.assign(result, { [key]: data[key] ? cleanGraphQLResponse(data[key]) : null });
  });

  return result;
};
