import React from 'react'
import './App.scss'
import Header from './components/header/index'
import TakeTest from './components/main/takeTest/TakeTest'
import Footer from './components/footer/Footer'
import 'antd/dist/antd.css';
import { Provider } from 'react-redux'
import store from './redux/store'

const App = () => {
  return (
    <Provider store= {store}>
      <Header />
      <div className="content">
        <TakeTest/>
      </div>
      <Footer/>
    </Provider>
  );
}

export default App;
