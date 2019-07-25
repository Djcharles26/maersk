import React, {Component} from 'react';

import { BrowserRouter as Router, Route, Switch }  from 'react-router-dom';

import {Provider} from 'react-redux';
import store from './store';


import Landing from './components/main/landing';
import NavBarA from './components/main/navbarA';
import Footer from './components/main/footer';

import Routes from './router/Routes';
import setAuthorizationToken from './utils/setAuthorizationToken';
import { setCurrentUser } from './actions/authActions';
const jwt = require('jsonwebtoken');

if(localStorage.jwtToken){
  setAuthorizationToken(localStorage.jwtToken);
  store.dispatch(setCurrentUser(jwt.decode(localStorage.jwtToken)));
} 

class App extends Component {
  render(){
    return (
      <Provider store={ store }>

        <Router>

              <Route  component={NavBarA}/>
              <Switch className="App">
                <Route exact path='/' component={Landing}/>
                <Route component = { Routes } />


              </Switch>

            <Footer/>
          </Router>
        </Provider>
    );
  }
}

export default App;
