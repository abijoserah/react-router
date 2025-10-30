import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";

// page components

import Article from "./pages/Article";

// router creation

const router = createBrowserRouter([
  {
    path: "/articles/:id",
    element: <Article />,
  },
]);

// rendering

const rootElement = document.getElementById("root");

if (rootElement != null) {
  ReactDOM.createRoot(rootElement).render(
    <RouterProvider router={router} />
  );
}
