import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from  'react-router-dom'
import { Provider } from 'react-redux';
import store from './store';


import App from './components/App';
import Welcome from './components/Welcome/Welcome';
import Signup from './components/Auth/Signup/Signup';
import Signout from './components/Auth/Signout/Signout';
import Signin from './components/Auth/Signin/Signin'
import Feature from './components/Feature/Feature';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Route path="/" exact component={Welcome}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/signout" component={Signout}/>
                <Route path="/signin" component={Signin}/>
                <Route path="/feature" component ={Feature}/>
            </App>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
