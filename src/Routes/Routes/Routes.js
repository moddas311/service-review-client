import { createBrowserRouter } from "react-router-dom";
import Home from "../../components/Pages/Home/Home";
import Login from "../../components/Pages/Login/Login/Login";
import Register from "../../components/Pages/Login/Register/Register";
import Main from "../../layout/Main";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
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
            }
        ]
    }
]);

export default routes;