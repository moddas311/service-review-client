import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Pages/Blog/Blog";
import Details from "../../components/Pages/Details/Details/Details";
import ClientReviews from "../../components/Pages/Details/Details/Review/ClientReviews/ClientReviews";
import Review from "../../components/Pages/Details/Details/Review/Review";
import Error from "../../components/Pages/Error/Error";
import Home from "../../components/Pages/Home/Home";
import Login from "../../components/Pages/Login/Login/Login";
import Register from "../../components/Pages/Login/Register/Register";
import Profile from "../../components/Pages/Profile/Profile";
import Main from "../../layout/Main";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/blog',
                element: <Blog />
            },
            {
                path: '/details',
                element: <Details />
            },
            {
                path: '/profile',
                element: <Profile />
            }
            ,
            {
                path: '/review/:id',
                element: <Review />,
                loader: ({ params }) => fetch(`https://service-review-assignment11-server.vercel.app/services/${params.id}`)
            },
            {
                path: '/clientReviews',
                element: <PrivateRoutes><ClientReviews /></PrivateRoutes>
            }
        ]
    }
]);

export default routes;