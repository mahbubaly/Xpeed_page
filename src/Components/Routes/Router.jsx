import {
    createBrowserRouter,

} from "react-router-dom";
import Home from "../Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import { Children } from "react";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
        errorElement: <ErrorPage />,
        children: [
            {

            }
        ]


    },
]);

export default router;