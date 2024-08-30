import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App, { appRouter } from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { store } from "./utils/store.js";
import { Provider } from "react-redux";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRouter} />
    </Provider>
  </StrictMode>
);
