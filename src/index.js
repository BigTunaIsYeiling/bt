import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import Home from "./Routes/Home";
import Project from "./Routes/ProjectRoute";
import Store from "./Store";
const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route element={<Home />} index />
      <Route path="/:project" element={<Project />} />
    </Route>
  )
);
root.render(
  <Provider store={Store}>
    <RouterProvider router={router} />
  </Provider>
);