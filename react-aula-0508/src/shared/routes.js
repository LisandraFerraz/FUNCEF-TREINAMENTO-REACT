import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/home";
import Funcionalidades from "../Pages/functionalities";
import UserDetails from "../Pages/user-details";
import UserDetailsComponent from "../Pages/user-details";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/funcionalidades",
    element: <Funcionalidades />,
  },
  {
    path: "/user-details",
    element: <UserDetailsComponent />,
  },
]);
