
import React from "react";
import Login from "./login";
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
import Home from "./Home";
import Signup from "./signUp";
import "./style.css";


function App() {
  return (
    <div className="page-container">
      <div className="content-wrap">
        <Router>
          <div className="App">
            <div>
            
              <Switch>
                <Route path="/Home" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path='/' exact component={Home} />
                <Route path="/signUp" component={ Signup } />
    
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default App;
