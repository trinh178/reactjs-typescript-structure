/**
 * Structure file requried
 */
import imageListModule from './image-list';
import aboutModule from './message';

// Subscribe redux slice reducer here
export const ReduxSlicesReducers = {
    [imageListModule.reduxSlice.name]: imageListModule.reduxSlice.reducer,
    [aboutModule.reduxSlice.name]: aboutModule.reduxSlice.reducer,
    // ..
};
