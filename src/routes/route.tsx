import { createBrowserRouter } from "react-router-dom";
import Login from "../components/auth/login"
import App from "../App";
import Register from "../components/auth/register";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },
        ]
    },

]);

