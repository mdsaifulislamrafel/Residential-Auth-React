import {
    createBrowserRouter,
} from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import UpdateProfile from "../Pages/UpdateProfile";
import HouseDetails from "../Pages/HouseDetails";

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
                path: "/houseDetails/:id",
                element: <HouseDetails />
            },
            {
                path: "/updateProfile",
                element: <UpdateProfile />
            }
        ]
    },
]);