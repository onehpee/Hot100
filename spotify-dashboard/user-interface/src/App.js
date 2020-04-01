import React from 'react';
import './App.css';
//import 'index.css'
import Chart from './Chart.js';
import Polar from './Polar';
import Help from './Help';
import Web from './Web';
import Nav from './Nav';
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <h1> Discover Team Hachi </h1>
        <Nav/>
        <Route path="/" Component={App}/>
        <Route path="/Chart" component={Chart}/>
        <Route path="/Polar" component={Polar}/>
        <Route path="/help" component={Help}/>
        <Route path="/web" component={Web}/>
      </div>
    </Router>
  )
}

export default App
