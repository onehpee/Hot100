import React from 'react';
import './App.css';
//import 'index.css'
import Chart from './components/Chart.js';
import Polar from './components/Polar';
import Help from './components/Help';
import Nav from './components/Nav';
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
      </div>
    </Router>
  )
}

export default App
