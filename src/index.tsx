import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { AuthProvider } from "state/AuthProvider";
import { CoursesProvider } from "state/CoursesProvider";

ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <CoursesProvider>
        <App />
      </CoursesProvider>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
