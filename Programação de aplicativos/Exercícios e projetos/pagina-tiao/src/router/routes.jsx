import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Bar from "../pages/Bar";
import Sorveteria from "../pages/Sorveteria";
import Borracharia from "../pages/Borracharia";


const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/bar", element: <Bar/> },
  { path: "/sorveteria", element: <Sorveteria /> },
  { path: "/borracharia", element: <Borracharia /> },
]);

export default router;
