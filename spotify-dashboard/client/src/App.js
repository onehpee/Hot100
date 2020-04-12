import React from 'react';
import './App.css';
//import 'index.css'
import Chart from './components/Chart.js';
import Polar from './components/Polar';
import Help from './components/Help';
import Nav from './components/Nav';
import logo from './assets/logo.png';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
      <header className="app-header">
        <img className="logo" src={logo}/>
        <code> Discover Team Hachi</code>               
      </header>
        
        <Nav/>
        <Route path="/" Component={App}/>
        <Route path="/Chart" component={Chart}/>
        <Route path="/Polar" component={Polar}/>
        <Route path="/help" component={Help}/>
      </div>
    </Router>
  )
}

export default App
