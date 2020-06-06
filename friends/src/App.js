import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import NavBarComponent from "./components/NavBarComponent";
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
function App() {
  return (
      <Router>
        <div className="container">
            <NavBarComponent/>
        </div>
      </Router>
  );
}

export default App;
