
import './App.css';
import Login from './Login/Login.js'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import React   from 'react';
function App() {
  return (
    
<Router> 
   <Route path = "/" exact component = {Login}></Route>
</Router>


  );
}

export default App;
