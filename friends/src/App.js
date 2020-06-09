import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import NavBarComponent from "./components/NavBarComponent";
import Login from "./components/Login";
import Friends from "./components/Friends";
import PrivateRoute from "./components/PrivateRoute";


function App() {
  return (
      <Router>
        <div className="container">
            <NavBarComponent/>
            <Switch>
                <PrivateRoute extact path="/protected" component={Friends}/>
                <Route path="/login" component={Login} />
                <Route component={Login}/>
            </Switch>
        </div>

      </Router>
  );
}

export default App;
