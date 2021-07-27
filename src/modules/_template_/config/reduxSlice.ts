/**
 * Structure file requried
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// ==================== Editable: State Props Types ==================== \\
interface TemplateStateProps {
    // ..
}
// ===================================================================== \\

const reduxSlice = createSlice({
    // ========================= Editable: Name ======================== \\
    name: '_template_',
    // ================================================================= \\

    // ==================== Editable: Initial State ==================== \\
    initialState: {
        // ..
    } as TemplateStateProps,
    // ================================================================= \\

    // ====================== Editable: Reducers ======================= \\
    reducers: {
        // eslint-disable-next-line no-unused-vars
        test: (state, action: PayloadAction<string>) => {
            // state.;
        },
        // ..
    },
    // ================================================================= \\
});

// ========================= Editable: Actions ========================= \\
export const {
    test,
    // ..
} = reduxSlice.actions;
// =====================================================================\\

export default reduxSlice;
