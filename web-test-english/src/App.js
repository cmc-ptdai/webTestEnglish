import React from 'react'
import './App.scss'
import Header from './components/header/index'
import TakeTest from './components/main/takeTest/TakeTest'
import Footer from './components/footer/Footer'

function App() {
  return (
    <div>
      <Header />
      <div className="content">
        <TakeTest/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
