import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import nodesReducer from "./slices/nodesSlice";
import edgesReducer from "./slices/edgesSlice";
import historyReducer from "./slices/historySlice";
import resetReducer from "./slices/resetSlice";

const persistConfig = {
    key: "root",
    storage,
};

const rootReducer = combineReducers({
    nodes: nodesReducer,
    edges: edgesReducer,
    history: historyReducer,
    reset: resetReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
