import React from 'react'
import './App.scss'
import Header from './components/header/index'
import TakeTest from './components/main/takeTest/TakeTest'

function App() {
  return (
    <div>
      <Header />
      <div className="content">
        <TakeTest/>
      </div>
    </div>
  );
}

export default App;
