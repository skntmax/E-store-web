import React ,{createContext ,useState} from 'react'
import './App.css';
import './asssets/style.css'

import PrivateRouter from './PrivateRouter';

import {
  BrowserRouter ,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {

  return (
     
    
    <div  >

           <BrowserRouter>
                 <PrivateRouter />
           </BrowserRouter>
  
    </div>
  );
}

export default App;
