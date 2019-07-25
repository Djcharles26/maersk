import React  from 'react';
import {  Route, Switch } from 'react-router-dom';

// common components
import Alert from '../components/common/Alert';
import NotFound from '../components/common/NotFound';
import SignIn from '../components/auth/signIn';
import SignUp from '../components/auth/signUp';
import Home from '../components/main/home';
import PrivateRoute from '../router/PrivateRoute';
//auth components


const Routes =  () => {

    return (
    
        <div>
            <div>
                <Alert/>
                <Switch>
                    {/* TODO: This route most be private until you login */}
                    <PrivateRoute exact path='/home' component={ Home } />
                    <Route exact path='/auth/signIn' component={ SignIn } />
                    <Route exact path='/auth/signUp' component={ SignUp } />
                    <Route component={ NotFound } />
                </Switch>
            </div>
        </div>
    );
};
  
  export default Routes;