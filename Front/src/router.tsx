import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Catalog from "./pages/Catalog";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Panier from "./pages/Panier";

const router = createBrowserRouter([

  { path: "/", element: < HomePage />},
  { path: "/catalogue", element: < Catalog />},
  { path: "/about", element: < About />},
  { path: "/contact", element: < Contact />},
  { path: "/panier", element: < Panier />},
  
]);

export default router
