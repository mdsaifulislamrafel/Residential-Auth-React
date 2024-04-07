import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import UpdateProfile from "../Pages/UpdateProfile";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/updateProfile",
                element: <UpdateProfile />
            }
        ]
    },
]);