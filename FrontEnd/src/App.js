import Login from "./Login/Login.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,withRouter 
} from "react-router-dom";
import React from "react";
import Dashboard from "./Dashboard/Dashboard";
import ProtectedRoute from "./Login/ProtectedRoute";
import Calendar from "./Components/Calendar/Calendars";
import Navbar from "./Navbar/Navbar";
import PageContent from "./Container/PageContent/PageContent";
import Marks from "./Components/Marks/Marks";
import List from "./Components/ToDoList/ToDoList";
import Drive from "./Components/Drive/Drive";

function App(props) {

  

  

  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />

          <ProtectedRoute>
            <Navbar > </Navbar>
            <PageContent>
              <Route path="/Dashboard" exact component={Dashboard}></Route>

              <Route path="/Calendar" exact component={Calendar}></Route>

              <Route path="/Marks" exact component={Marks}></Route>

              <Route path="/Drive" exact component={Drive}></Route>

              <Route path="/ToDoList" exact component={List}></Route>
            </PageContent>
          </ProtectedRoute>

          <Route path="*">
            <div> Not Valid Path</div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default withRouter(App);
