import React from 'react';

import './App.css';
import Test from './Test';
import Chart from './components/Chart';
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
  return(
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/polar">Polar Area Chart</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Test />
          </Route>
          <Route exact path="/polar">
            <Chart/>
          </Route>
        </Switch>
      </div>
    </Router> 
  );
}

export default App;