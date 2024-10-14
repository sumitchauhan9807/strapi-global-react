import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage'
import { persistReducer ,persistStore } from 'redux-persist'
import {combineReducers} from "redux";
import langReducer from "./language";

const persistConfig = {
  key: 'root',
  storage
};
const reducers = combineReducers({
  language:langReducer,     
 });
const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck:false
  }),
});
export default () => {
  let persistor = persistStore(store)
  return { store, persistor }
}
