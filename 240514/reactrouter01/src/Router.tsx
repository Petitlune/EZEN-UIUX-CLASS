import React from "react";
import { createBrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import About from "./components/About";
import Root from "./Root";
import NotFound from "./NotFound";
import ErrorComponent from "./ErrorComponent";
import User from "./components/User";
import Followers from "./Followers";

//createBrowserRouter 라우터 이용하는 새로운 문법
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "", element: <Home />, errorElement: <ErrorComponent /> },
      { path: "about", element: <About /> },
      {
        path: "users/:userId",
        element: <User />,
        children: [{ path: "followers", element: <Followers /> }],
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
