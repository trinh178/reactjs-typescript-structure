/**
 * Structure file requried
 */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// ==================== Editable: State Props Types ==================== \\
interface MessageStateProps {
    messageList: string[]
    // ..
}
// ===================================================================== \\

const reduxSlice = createSlice({
    // ========================= Editable: Name ======================== \\
    name: 'message',
    // ================================================================= \\

    // ==================== Editable: Initial State ==================== \\
    initialState: {
        messageList: [
            'Hello!',
            'Write your own',
        ],
        // ..
    } as MessageStateProps,
    // ================================================================= \\

    // ====================== Editable: Reducers ======================= \\
    reducers: {
        pushMessage: (state, action: PayloadAction<string>) => {
            // eslint-disable-next-line no-param-reassign
            state.messageList.push(action.payload);
        },
        // ..
    },
    // ================================================================= \\
});

// ========================= Editable: Actions ========================= \\
export const {
    pushMessage,
    // ..
} = reduxSlice.actions;
// =====================================================================\\

export default reduxSlice;
