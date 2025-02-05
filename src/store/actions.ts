import { createAction } from "@reduxjs/toolkit";

export const resetState = createAction("RESET_STATE");
export const setResetFlag = createAction<boolean>("SET_RESET_FLAG");
