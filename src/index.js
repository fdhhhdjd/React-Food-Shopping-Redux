import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
// import store from "./redux/store";
import App from "./App";
import { ChooseFoodProvider } from "./Context/ChooseFood";
import { store, persistor } from "./redux/store";
ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <ChooseFoodProvider>
        <App />
      </ChooseFoodProvider>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
