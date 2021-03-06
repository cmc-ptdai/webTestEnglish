import React from 'react'
// import Footer from './footer/Footer'
import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import router from '../router'
import Menu from './Menu/index';

const Home = () => {
  return (
    <>
      <Router>
        <Menu/>
        <Switch>
          {
            router.map((item, index) => {
              const {Component} = item
              return (
                <Route path={item.path} exact={item.exact} key={index}>
                  <Component />
                </Route>
              )
            })
          }
        </Switch>
      </Router>
    </>
  );
}

export default Home;
