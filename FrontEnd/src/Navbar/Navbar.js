import React, { Component, useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import image from './portofolio.jpg'
function Navbarr(props) {
  return (
    <div className={styles.fakeBody}>
      <div className={styles.sidebarHeader}>
        <img className={styles.userImage}  src={image}/>
        <p className={styles.userName}>Ioannis Christodoulakos </p>
      </div>
   
      <div className={styles.sidebarMenu}>
       
        <div className={styles.sidebarButContainer}>

          <div className = {styles.linkContainer}> 
         <a className = {styles.link} href='444'> Dashboard</a> 
          </div>

          <div className = {styles.first}> 
         <p className={styles.pi}> <a className = {styles.link} href='444'> Calendar</a> </p>
         </div>

         <div className = {styles.linkContainer}> 
         <p className={styles.pi}> <a className = {styles.link} href='444'> Marks</a> </p>
          </div>

          <div className = {styles.linkContainer}> 
         <p className={styles.pi}> <a className = {styles.link} href='444'> Drive</a> </p>
          </div>

          <div className = {styles.linkContainer}> 
         <p className={styles.pi}> <a className = {styles.link} href='444'> To-Do-List</a> </p>
          </div>

          </div>
          
        </div>

      </div>
     
    
  );
}

export default Navbarr;
