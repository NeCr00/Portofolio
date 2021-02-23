
import './App.css';
import Login from './Login/Login.js'
import { BrowserRouter as Router, Switch, Route, Link, useHistory as history } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Dashboard from './Dashboard/Dashboard'
import ProtectedRoute from './Login/ProtectedRoute'

function App() {

  const [isAuth, setIsAuth] = useState(false);

  const handleAuth = () => {

    setIsAuth(true);
    console.log(isAuth)
  }

  return (
    <div>

      <Router>
        <Switch>

          <Route path="/" exact component={Login} />

          <ProtectedRoute>
            <Route path="/Dashboard" component={Dashboard}></Route>
          </ProtectedRoute>



          <Route path="*">
            <div>404 Not found </div>
          </Route>

        </Switch>
      </Router >

    </div>
  );
}

export default App;
