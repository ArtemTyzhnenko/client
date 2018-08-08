import React  from 'react';
import Header from './Header/Header'
import './App.css';

export default ({ children })=>{
    return (
      <div className="app">
          <Header className="header"/>
          <div className="content">
              {children}
          </div>
      </div>
    );
}