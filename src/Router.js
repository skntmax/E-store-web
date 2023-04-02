import { createBrowserRouter } from "react-router-dom";
import Login from './Login'
import Error from './Error'
import './assets/css/login.css'
import Temp from "./Temp";
import Dashboard from './components/common/Dashboard/Index'
import Cart from "./components/cart/Cart";
import OrderHistory from "./components/OrderHistory/OrderHistory";

const router = createBrowserRouter([
    {
      path: "/",
      element:  <div className="login_page">   <Login /> </div> ,
      exact:true,
      errorElement: <Error /> ,
    },

    {
      path: "/temp",
      element: <Temp />,
      exact:true,
      errorElement: <Error /> ,
    },

    {
      path: "/Dashboard/:username",
      element: <Dashboard />,
      exact:true,
      errorElement: <Error /> ,
    },

    
    {
      path: "/cart",
      element: <Cart />,
      exact:true,
      errorElement: <Error /> ,
    },
    

    {
      path: "/orders",
      element: <OrderHistory />,
      exact:true,
      errorElement: <Error /> ,
    },







  ]);


  export default router