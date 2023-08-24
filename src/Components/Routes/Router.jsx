import {
    createBrowserRouter,

} from "react-router-dom";
import Home from "../Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import CardDetails from "../Home/CardDetails";
import SignIn from "../SignIn/SignIn";
import Main from "../Main/Main";
import LogIn from "../SignIn/LogIn";
import ForgetPass from "../SignIn/ForgetPass";
import ComingPage from "../ComingPage/ComingPage";
import ResourceCardDetails from "../Home/Resources/ResourceCardDetails";





const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />

            },
            {
                path: '/signUp',
                element: <SignIn />

            },
            {
                path: '/signIn',
                element: <LogIn />

            },
            {
                path: "/details/:id",
                element: <CardDetails />,
                loader: ({ params }) => fetch(`/details/${(params.id)}`)




            },
            {
                path: "/resource/:id",
                element: <ResourceCardDetails />,
                loader: ({ params }) => fetch(`/details/${(params.id)}`)




            },
            {
                path: "/forgetPass",
                element: <ForgetPass />,




            },



        ]


    },
    {
        path: "/ComingSoon",
        element: <ComingPage />,
        errorElement: <ErrorPage />,

    }
]);

export default router;