import React from 'react';

import './App.css';
import Test from './Test';
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
            <Link to="/api/hello">About</Link>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <Test />
          </Route>
        </Switch>
      </div>
    </Router> 
  );
}

export default App;