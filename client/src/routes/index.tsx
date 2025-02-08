import { createBrowserRouter } from "react-router-dom";
import { AuthTemplate, MainTemplate } from "../templates";
import { AddNew, Home, SignIn, SignUp } from "../pages";

export const ROOT = "/";
export const LOGIN = "/sign-in";
export const REGISTER = "/sign-up";
export const ADD = "/add";

export const router = createBrowserRouter([
  {
    element: <AuthTemplate />,
    children: [
      {
        path: LOGIN,
        element: <SignIn />,
      },
      {
        path: REGISTER,
        element: <SignUp />,
      },
    ],
  },
  {
    path: ROOT,
    element: <MainTemplate />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: ADD,
        element: <AddNew />,
      },
    ],
  },
]);
