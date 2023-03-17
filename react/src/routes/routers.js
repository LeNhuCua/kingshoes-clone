import Adidas from "../pages/Adidas";
import Detail from "../pages/Detail";
import Home from "../pages/Home";

import Introduce from "../pages/Introduce";
import Nike from "../pages/Nike";
import ShoppingCart from "../pages/ShoppingCart";


const  routes = [
    {
        path: "/",
        exact:true,
        element: Home
    },
    {
        path: "/introduce",
        exact:true,
        element: Introduce
    },
    {
        path: "/productDetail/:alias",
        exact:true,
        element: Detail
    },
    {
        path: "/shoppingCart",
        exact:true,
        element: ShoppingCart
    },    {
        path: "/adidas",
        exact:true,
        element: Adidas
    },
    {
        path: "/nike",
        exact:true,
        element: Nike
    },

]
export default routes;

