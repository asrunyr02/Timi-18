import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Layout } from "./Layout";
import { NotFound } from "./pages/NotFound";
import { Products } from "./pages/Products";
import { Product } from "./pages/Product";
import { Categories } from "./pages/Categories";
import { CategoryDetail } from "./pages/CategoryDetail";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "about", Component: About },
      { path: "*", Component: NotFound },
      { path: "products", Component: Products },
      { path: "product/:id", Component: Product },
      { path: "Categories", Component: Categories },
      { path: "categories/:slug", Component: CategoryDetail },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
