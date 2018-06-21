import React, { Component } from 'react';
import {
  Route,
  Redirect, // 重定向路由
} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index.js'
import Login from './page/login/Login.js';
import Home from './page/home/Home.js';
import './App.css';

// 此页的Redirect 是router4的重定向。如有需要 请看官网。
class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <div className="App">
              <div>
                <Route exact path="/" render={() => (
                  true ? (
                    <Redirect to="/login"/>
                  ) : (
                    <Home />
                  )
                )}/>
                <Route path="/home" component={Home}/>
                <Route path="/login" component={Login}/>
              </div>
          </div>
        </Provider>
      
    );
  }
}

export default App;
