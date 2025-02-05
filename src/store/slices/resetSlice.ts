import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import cloneDeep from "lodash/cloneDeep";
import { resetState, setResetFlag } from "../actions";

interface ResetState {
    isReset: boolean;
}

const initialState: ResetState = {
    isReset: false,
};

const resetSlice = createSlice({
    name: "reset",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(resetState, () => ({ isReset: true })) // When resetting, set flag to true
            .addCase(setResetFlag, (state, action: PayloadAction<boolean>) => {
                state.isReset = action.payload;
            });
    },
});

export default resetSlice.reducer;
