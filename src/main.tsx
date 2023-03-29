import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import { persistor, store } from "./redux/store";
import { GoogleOAuthProvider } from "@react-oauth/google";

import App from "./App";
import "./index.css";

let clientId = import.meta.env.VITE_CLIENT_ID;
if (!clientId) {
  console.log("clientId is undefined");
  clientId = "";
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <GoogleOAuthProvider clientId={clientId}>
    <React.StrictMode>
      <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
          <Provider store={store}>
            <App />
          </Provider>
        </PersistGate>
      </BrowserRouter>
    </React.StrictMode>
  </GoogleOAuthProvider>
);
