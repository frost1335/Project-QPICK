import { createRoot } from "react-dom/client";

import { BrowserRouter } from "react-router-dom";

import "./index.scss";
import App from "./App";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
