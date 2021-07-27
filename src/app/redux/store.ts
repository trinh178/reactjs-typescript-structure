import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { ReduxSlicesReducers } from 'modules';

// Or from '@reduxjs/toolkit/query/react'
import { apiReduxReducers, apiReduxMiddlewares } from 'services';

// Configure store
export const store = configureStore({
    reducer: {
        ...apiReduxReducers,
        ...ReduxSlicesReducers,
    },
    // Adding the api middleware enables caching, invalidation, polling,
    // and other useful features of `rtk-query`.
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiReduxMiddlewares),
    devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootStateProps = ReturnType<typeof store.getState>
export type AppDispatchProps = typeof store.dispatch

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
