import React from 'react'
import './App.scss'
import 'antd/dist/antd.css';
import { Provider } from 'react-redux'
import store from './redux/store'
import {
  BrowserRouter as Router,
  // Switch,
  // Route
} from "react-router-dom"
import Home from './components/home'
// import Login from './components/login/index'
// import Admin from './components/admin'
import Header from './components/header/index'
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <Provider store= {store}>
      <Router>
        <Header/>
        <div className="content">
          {/* <Switch>
            <Route  exact path="/login"><Login/></Route>
            <Router exact  path="/"><Home/></Router>
            <Router  exact path="/admin"><Admin/></Router>
          </Switch> */}
          <Home/>
        </div>
        <Footer/>
      </Router>
    </Provider>
  );
}

export default App;
