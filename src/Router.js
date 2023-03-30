import { createBrowserRouter } from "react-router-dom";
import Login from './Login'
import Error from './Error'
import './assets/css/login.css'
import Temp from "./Temp";
import Dashboard from './components/common/Dashboard/Index'


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
      // errorElement: <Error /> ,
    },




  ]);


  export default router