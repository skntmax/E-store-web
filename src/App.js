import logo from './logo.svg';
import React from 'react';
import Login from './Login'
import './assets/css/login.css'
import { RouterProvider } from 'react-router-dom';
import router from './Router'
function App() {
  
   return (
     <React.Fragment>
      
     <RouterProvider router={router} />
     
     </React.Fragment>
     
     )
   
}

export default App;
