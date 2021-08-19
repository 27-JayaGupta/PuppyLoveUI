import React, { useState } from 'react';
import {BrowserRouter as Router,Switch,Route, Redirect} from "react-router-dom";
import SignUp from './Components/authentication/SignUp';
import SignIn from './Components/authentication/SignIn';
import ForgetPassword from './Components/authentication/ForgetPassword';
import Dashboard from './Components/dashboard/Dashboard';
import {Auth} from './context/AuthContext';

export default function RoutingComponent(props) {
    const {CurrentUser}=Auth();
 
    return (   
    <Router >
      <Switch>
        <Route exact path="/" >
            {CurrentUser && <Redirect to="/home" />}
            {(CurrentUser ===null)&& ( <Redirect to="/login" />)}
        </Route>
        <Route exact path="/login" children={<SignIn/>} />
        <Route exact path="/signup" children={<SignUp />}/>
        <Route exact path="/forget" children={<ForgetPassword />}/>
        <Route exact path="/dashboard" children={<Dashboard/>} />

      </Switch>
    </Router>
       
    )
}
