import { configureStore } from "@reduxjs/toolkit";
import rootReducers from "./reducers";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'reducer',
    storage: storage,
    whitelist: ["cart"],
};

const presistedReducer = persistReducer(persistConfig, rootReducers as any);
const store = configureStore({
    reducer: presistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});
const persistor = persistStore(store);
export { persistor, store };