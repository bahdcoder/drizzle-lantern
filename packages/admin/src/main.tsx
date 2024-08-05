import React from "react";
import ReactDOM from "react-dom/client";
import { RootLayout } from "./layouts/root";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { ResourceIndex } from "./pages/resource_index/resource_index";
import { ResourceDetail } from "./pages/resource_detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/resources/:resourceSlug",
        element: <ResourceIndex />,
      },
      {
        path: "/resources/:resourceSlug/items/:itemId",
        element: <ResourceDetail />,
      },
    ],
  },
]);

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <Dashboard /> */}
  </React.StrictMode>
);
