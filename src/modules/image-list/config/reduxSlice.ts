/**
 * Structure file requried
 */
// eslint-disable-next-line no-unused-vars
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// ==================== Editable: State Props Types ==================== \\
interface MessageStateProps {
    // ..
}
// ===================================================================== \\

const reduxSlice = createSlice({
    // ========================= Editable: Name ======================== \\
    name: 'image',
    // ================================================================= \\

    // ==================== Editable: Initial State ==================== \\
    initialState: {
        // ..
    } as MessageStateProps,
    // ================================================================= \\

    // ====================== Editable: Reducers ======================= \\
    reducers: {
        // ..
    },
    // ================================================================= \\
});

// ========================= Editable: Actions ========================= \\
// eslint-disable-next-line no-empty-pattern
export const {
    // ..
} = reduxSlice.actions;
// =====================================================================\\

export default reduxSlice;
