import React from 'react'
import './App.scss'
import Header from './components/header/index'
import TakeTest from './components/main/takeTest/TakeTest'
import Footer from './components/footer/Footer'
import { BrowserRouter as Router , Route , Switch  } from 'react-router-dom'
import Login from './components/main/login/Login'

function App() {
  return (
    <div>
      <Header />
      <Router>
          <Switch>
            <Route path='/' exact></Route>
            <Route path='/taketest' component={ TakeTest } ></Route>
            <Route path='/statistical'></Route>
            <Route path='/setting'></Route>
            <Route path='/login' component={ Login }></Route>
            <Route path='/:somestring'></Route>
          </Switch>
      </Router>
      <Footer/>
    </div>
  );
}

export default App;
