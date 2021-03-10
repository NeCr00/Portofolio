import axios from "axios";
import React, { useState, useEffect, useReducer } from "react";
import Navbar from "../Navbar/Navbar";
import PageContent from "../Container/PageContent/PageContent";
import styles from "./Dashboard.module.css";
import Main from "../Components/Main/Main";
import Cv from '../Components/Cv/Cv'
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
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("isAuth");
    props.history.push("/");
  }

  return (
    <div>
      <Navbar></Navbar>

      <PageContent>
        
      </PageContent>
    </div>
  );
}

export default Dashbroad;
