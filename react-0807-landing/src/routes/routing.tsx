import { createBrowserRouter } from "react-router-dom";
import Homepage from "../Pages/home";
import Login from "../Pages/login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
