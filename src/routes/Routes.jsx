import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/signup/Signup";
import Bookings from "../pages/bookings/Bookings";
import PrivateRoutes from "./PrivateRoutes";
import BookService from "../pages/bookservice/BookService";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/bookservice/:id',
                element: <PrivateRoutes><BookService></BookService></PrivateRoutes>,
            },
            {
                path: 'bookings',
                element: <PrivateRoutes><Bookings></Bookings></PrivateRoutes>
            }
        ]
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/signup',
        element: <Signup></Signup>
    },
]);

export default router;