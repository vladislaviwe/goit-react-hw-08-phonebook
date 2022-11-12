import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import contactsReducer from "./contacts/contacts-slice";
import filterReducer from "./filter/filter-slice";
import authReducer from "./auth/auth-slice";

const persistConfig = {
    key: "token",
    storage,
    whitelist: ["token"],
}

const pesistedReducer = persistReducer(persistConfig, authReducer);

export const store = configureStore({
    reducer: {
        auth: pesistedReducer,
        contacts: contactsReducer,
        filter: filterReducer,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false
    })
});

export const persistor = persistStore(store);


