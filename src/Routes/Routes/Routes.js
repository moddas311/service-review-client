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
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: '/clientReviews',
                element: <ClientReviews />
            }
        ]
    }
]);

export default routes;