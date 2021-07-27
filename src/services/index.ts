/**
 * Structure file requried
 */
import imageApi from './api/imageApi';

// Subscribe api redux-reducers here
export const apiReduxReducers = {
    [imageApi.reducerPath]: imageApi.reducer,
    // ..
};

// Subscribe api redux-middlewares here
export const apiReduxMiddlewares = [
    ...[imageApi.middleware],
    // ..
];
