import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import UpdateProfile from "../Pages/UpdateProfile";
import HouseDetails from "../Pages/HouseDetails";
import Error from "../Pages/Error";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PrivateRoute from "../PriveatRoute/PrivateRoute";
import UserProfile from "../Pages/UserProfile";
import Contact from "../Pages/Contact";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/houseDetails/:id",
                element: <PrivateRoute><HouseDetails /></PrivateRoute>
            },
            {
                path: "/updateProfile",
                element: <PrivateRoute><UpdateProfile /></PrivateRoute>
            },
            {
                path: "/userProfile",
                element: <PrivateRoute><UserProfile /></PrivateRoute>
            },
            {
                path: "/contact",
                element: <PrivateRoute><Contact /></PrivateRoute>
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            }
        ]
    },
]);