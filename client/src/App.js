import React, { Component } from 'react';
import './App.css';
import {Switch,Route} from 'react-router-dom';

import Login from './Component/login';
import Logout from './Component/logout';
import Profile from './Component/Profile';

class App extends Component{
  render(){
    return (
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route exact path='/profile' component={Profile}/>
        <Route path= "/logout" component={Logout} />
      </Switch>    
    );
  }
}




 


export default App;


