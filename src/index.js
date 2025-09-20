import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { AuthProvider, AuthContext } from "./context/AuthContext";
import { setLogoutHandler } from "./services/api";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthProvider>
      <AuthContext.Consumer>
        {({ forceLogout }) => {
          setLogoutHandler(forceLogout);
          return <App />;
        }}
      </AuthContext.Consumer>
    </AuthProvider>
  </React.StrictMode>
);

reportWebVitals();