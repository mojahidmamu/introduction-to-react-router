import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Component/Home/Home";
import Header from "./Component/Header/Header";
import User from "./Component/User/User";
import UserDetails from "./Component/Users/UserDetails/UserDetails";

const router = createBrowserRouter([
  {
    path: "home",
    element: <Home></Home>,
    children: [
      {
        path: "./User",
        loader: () =>  fetch('https://jsonplaceholder.typicode.com/users'),
        element: < User></User>
      }
    ]
  },
  {
    path: './user/:userId',
    element: <UserDetails></UserDetails>
  },
  {
    path: "./header",
    element: <Header></Header>
  },
  
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
     <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);
