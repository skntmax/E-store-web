import React from 'react';
import { Switch , Route } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Product_Catalogue from './components/Dashboard/Product_Catalogue';
import HomePage from './components/HomePage/HomePage';
import Signup from './components/Signup/Signup';
export default function PrivateRouter() {
  return (
    <div>
     
     <Switch>    
     
         <Route  exact path="/" component={HomePage} />
         <Route  exact path="/signup" component={Signup} />
         <Route  exact path="/dashboard" component={Dashboard} />
         <Route  exact path="/catalogue" component={Product_Catalogue} />
       
         </Switch>
    </div>
    
  );
}
