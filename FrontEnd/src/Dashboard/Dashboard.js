import axios from "axios";
import React, { useState, useEffect, useReducer } from "react";
import Navbar from "../Navbar/Navbar";
import PageContent from "../Container/PageContent/PageContent";
import styles from "./Dashboard.module.css";
import Main from "../Components/Main/Main";
import Cv from "../Components/Cv/Cv";
import Marks from '../Components/Marks/Marks'
import Calendar from '../Components/Calendar/Calendars'
function Dashbroad(props) {
  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    axios
      .get("http://localhost:3001/verifyJwt", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        if (!res.data.valid) {
          localStorage.removeItem("jwtToken");

          props.history.push("/");
        }
      })
      .catch((error) => {
        localStorage.removeItem("jwtToken");
        props.history.push("/");
      });
  }, []);

  const [logout, setLogout] = useState(false);

  function Logout(e) {
    localStorage.clear();
    props.history.push("/");
  }

  return (
    <div>
      <Navbar logout = {(e)=> Logout(e)}></Navbar>
      
      <PageContent> <Marks> </Marks> </PageContent>
    </div>
  );
}

export default Dashbroad;
