import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { withRouter } from "react-router-dom";

function ProtectedRoute(props) {
  const token = localStorage.getItem("jwtToken");

  useEffect(() => {
    if (!token) props.history.push("/");

    axios
      .get("http://localhost:3001/verifyJwt", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
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

  return <div> {props.children} </div>;
}

export default withRouter(ProtectedRoute);
