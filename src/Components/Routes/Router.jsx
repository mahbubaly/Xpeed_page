import {
    createBrowserRouter,

} from "react-router-dom";
import Home from "../Home/Home";
import ErrorPage from "../ErrorPage/ErrorPage";
import CardDetails from "../Home/CardDetails";
import Main from "../Main/Main";
import ComingPage from "../ComingPage/ComingPage";
import ResourceCardDetails from "../Home/Resources/ResourceCardDetails";
import HtmlProducts from "../HtmlProductPage/HtmlProducts";
import FigmaProducts from "../FigmaProductPage/FigmaProducts";
import HtmlCardDetails from "../HtmlProductPage/HtmlCardDetails";
import Contact from "../Home/Contacts/Contact";
import UltimateAccess from "../Home/GetUltimateAccess/UltimateAccess";
import FigmaCardsDetailsPage from './../FigmaProductPage/FigmaCardsDetailsPage';





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
                path: "/contact",
                element: <Contact />




            },
            {
                path: "/viewAllHtmlTemplate",
                element: <HtmlProducts />




            },
            {
                path: "/GetUltimateAccess",
                element: <UltimateAccess />




            },
            {
                path: "/viewAllHtmlTemplate/details/:id",
                element: <HtmlCardDetails />,
                loader: ({ params }) => fetch(`/viewAllHtmlTemplate/details/${(params.id)}`)




            },
            {
                path: "/viewAllFigmaTemplate/details/:id",
                element: <FigmaCardsDetailsPage />,
                loader: ({ params }) => fetch(`/viewAllFigmaTemplate/details/${(params.id)}`)




            },
            {
                path: "/viewAllFigmaTemplate",
                element: <FigmaProducts />




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