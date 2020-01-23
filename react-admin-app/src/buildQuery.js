import buildFieldList from './buildFieldList';

const buildQuery = introspectionResults => (raFetchType, resourceName, params) => {
    const resource = introspectionResults.resource.find(r => r.type.name === resourceName);

    switch (raFetchType) {
        case 'GET_ONE':
            return {
                query: gql`query ${resource[raFetchType].name}($id: ID) {
                    data: ${resource[raFetchType].name}(id: $id) {
                        ${buildFieldList(introspectionResults, resource, raFetchType)}
                    }
                }`,
                variables: params, // params = { id: ... }
                parseResponse: response => response.data,
            }
            break;
        // ... other types handled here
    }
}
