import React from "react";
import Header from "./Component/Header";
import Login from "./Component/Login";
import SignUp from "./Component/SignUp";
import { createBrowserRouter, Outlet } from "react-router-dom";
import Products from "./Component/Products";
import CreateProduct from "./Component/CreateProduct";

const App = () => {
  return (
    <>
      <div className="app">
        <Header />
        <Outlet />
      </div>
    </>
  );
};

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Products />,
      },
      {
        path: "/createProduct",
        element: <CreateProduct />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <SignUp />,
      },
    ],
  },
]);

export default App;
