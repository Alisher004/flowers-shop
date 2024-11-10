import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Notfound from "./pages/Notfound";
import Wishlist from "./pages/Wishlist";
import Cart from "./pages/Cart";
import Acount from "./pages/Acount";

export const myRouter = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children:[
            {
                path: "/",
                element: <Home />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path:"register",
                element: <Register />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "*",
                element: <Notfound />
            },
            {
                path: "listcom",
                element: <Wishlist />
            },
            {
                path: "cartcom",
                element: <Cart />
            },
            {
                path: "acountcom",
                element: <Acount />
            }
        ]
    }

    
])