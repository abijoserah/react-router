import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import { App } from "./App";
import About from "./pages/About";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        element: <About />,
        path: "/about"
      },
      {
        element: <Home />,
        path: "/"
      }
    ]

  }
])

const rootElement = document.getElementById("root");

if (rootElement != null) {
  ReactDOM.createRoot(rootElement).render(
    <RouterProvider router={router} />
  );
}