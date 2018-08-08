import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from  'react-router-dom'
import { Provider } from 'react-redux';
import store from './store';


import App from './components/App';
import Welcome from './components/Welcome/Welcome';
import Signup from './components/Auth/Signup/Signup';
import Feature from './components/Feature/Feature'

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Route path="/" exact component={Welcome}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/feature" component ={Feature}/>
            </App>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
