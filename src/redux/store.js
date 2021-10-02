import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import appReducer from "./appReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { persistStore } from "redux-persist";
const middleware = [thunk];
if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}
export const store = createStore(
  appReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);
export const persistor = persistStore(store);
export default { store, persistor };
