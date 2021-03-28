import React, { Component, useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import image from "./images/portofolio.jpg";
import logoutimg from "./images/logout.png";
import Marks from "../Components/Marks/Marks";
import { withRouter } from "react-router-dom";
function Navbar(props) {
  function Logout(e) {
    localStorage.clear();

    props.history.push("/");
  }

  return (
    <div className={styles.fakeBody}>
      <div className={styles.sidebarHeader}>
        <img className={styles.userImage} src={image} />
        <p className={styles.userName}>Ioannis Christodoulakos </p>
        <div className={styles.logoutcontainer}>
          <button className={styles.btn} onClick={(e) => Logout(e)}>
            {" "}
            <img src={logoutimg} className={styles.logout} />{" "}
          </button>
        </div>
      </div>

      <div className={styles.sidebarMenu}>
        <div className={styles.sidebarButContainer}>
          <div className={styles.linkContainer}>
            <p className={styles.pi}>
              {" "}
              <a className={styles.link} href={"Dashboard"}>
                {" "}
                Main
              </a>{" "}
            </p>
          </div>

          <div className={styles.linkContainer}>
            <p className={styles.pi}>
              {" "}
              <a className={styles.link} href="Calendar">
                {" "}
                Calendar
              </a>{" "}
            </p>
          </div>

          <div className={styles.linkContainer}>
            <p className={styles.pi}>
              {" "}
              <a className={styles.link} href="Marks">
                {" "}
                Marks
              </a>{" "}
            </p>
          </div>

          <div className={styles.linkContainer}>
            <p className={styles.pi}>
              {" "}
              <a className={styles.link} href="Drive">
                {" "}
                Drive
              </a>{" "}
            </p>
          </div>

          <div className={styles.linkContainer}>
            <p className={styles.pi}>
              {" "}
              <a className={styles.link} href="ToDoList">
                {" "}
                To-Do-List
              </a>{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Navbar);
