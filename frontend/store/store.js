import { createStore } from "redux";
import { applyMiddleware } from "redux";
import RootReducer from "../reducers/root_reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage
};

const persistedReducer = persistReducer(persistConfig, RootReducer)

const configureStore = (preloadedState = {}) => {
  return createStore(persistedReducer, preloadedState, applyMiddleware(thunk, logger));
}


export default configureStore;