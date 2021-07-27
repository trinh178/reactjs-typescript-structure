/**
 * Structure file requried
 */
// Need to use the React-specific entry point to import createApi
import { createApi } from '@reduxjs/toolkit/query/react';
import { ownBaseQuery } from 'app/redux/query';

// ========================= Importable: Props types ========================= \\
// import { _template_Props } from '../types';
// =========================================================================== \\

// Define a service using `ownBaseQuery` and expected endpoints
const api = createApi({
    // ================== Editable: Name with suffix `Api` =================== \\
    reducerPath: '_template_Api',
    // ======================================================================= \\

    baseQuery: ownBaseQuery(),

    // ========================= Editable: Endpoints ========================= \\
    // eslint-disable-next-line no-unused-vars
    endpoints: (builder) => ({
        /*
        list: builder.query<ImageProps[], {}>({
            query: () => ({
                url: 'photos',
                method: 'GET',
            }),
        }),
        */
    }),
    // ======================================================================= \\
});

// ============================ Exportable: Hooks ============================ \\
// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
// eslint-disable-next-line no-empty-pattern
export const {
    // useListQuery,
    // ..
} = api;
// =========================================================================== \\

export default api;
