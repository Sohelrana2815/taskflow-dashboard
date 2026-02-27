import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import SmoothScrolling from "./components/layout/SmoothScroll";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SmoothScrolling>
      <RouterProvider router={router} />
    </SmoothScrolling>
  </StrictMode>,
);
