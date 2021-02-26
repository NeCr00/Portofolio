
import React, { Component, useEffect, useState } from "react"
import { BrowserRouter as Router, Switch, Route, Link, useHistory as history } from 'react-router-dom';
import { withRouter } from "react-router-dom"
import './Navbar.css'

function Navbarr(props) {



    return (
      <div className = "fake-body">
        <div class="page-wrapper chiller-theme toggled">
        <a id="show-sidebar" class="btn btn-sm btn-dark" href="#">
          <i class="fas fa-bars"></i>
        </a>
        <nav id="sidebar" class="sidebar-wrapper">
          <div class="sidebar-content">
            <div class="sidebar-brand">
              <p>My Portofolio</p>
              <div id="close-sidebar">
                <i class="fas fa-times"></i>
              </div>
            </div>
            <div class="sidebar-header">
              <div class="user-pic">
                <img class="img-responsive img-rounded" src="https://raw.githubusercontent.com/azouaoui-med/pro-sidebar-template/gh-pages/src/img/user.jpg" alt="User picture"/>
              </div>
              <div class="user-info">
                <span class="user-name">
                  <strong>NeCro</strong>
                </span>
                
                <button class = "logout-btn" onClick = {(e) =>{props.logout()}}> Logout</button>
              </div>
            </div>
           
            
        
            <div class="sidebar-menu">
              <ul>
                <li class="header-menu">
                  <span>General</span>
                </li>
                <li class="sidebar-dropdown">
                  <a href="Dashboard">
                    <i class="fa fa-tachometer-alt"></i>
                    <span>Dashboard</span>
                  </a>
                 
                </li>
                <li class="sidebar-dropdown">
                  <a href="#">
                    <i class="fa fa-shopping-cart"></i>
                    <span>E-commerce</span>
                    
                  </a>
                  <div class="sidebar-submenu">
                    <ul>
                      <li>
                        <a href="#">Products
      
                        </a>
                      </li>
                      <li>
                        <a href="#">Orders</a>
                      </li>
                      <li>
                        <a href="#">Credit cart</a>
                      </li>
                    </ul>
                  </div>
                </li>

                <li class="sidebar-dropdown">
                  <a href="#">
                    <i class="far fa-gem"></i>
                    <span>Components</span>
                  </a>
                 
                </li>
                <li class="sidebar-dropdown">
                  <a href="#">
                    <i class="fa fa-chart-line"></i>
                    <span>Charts</span>
                  </a>
                  <div class="sidebar-submenu">
                    <ul>
                      <li>
                        <a href="#">Pie chart</a>
                      </li>
                      <li>
                        <a href="#">Line chart</a>
                      </li>
                      <li>
                        <a href="#">Bar chart</a>
                      </li>
                      <li>
                        <a href="#">Histogram</a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li class="sidebar-dropdown">
                  <a href="#">
                    <i class="fa fa-globe"></i>
                    <span>Maps</span>
                  </a>
                  <div class="sidebar-submenu">
                    <ul>
                      <li>
                        <a href="#">Google maps</a>
                      </li>
                      <li>
                        <a href="#">Open street map</a>
                      </li>
                    </ul>
                  </div>
                </li>
               
                <li>
                  <a href="#">
                    <i class="fa fa-calendar"></i>
                    <span>Calendar</span>
                  </a>
                </li>
               
              </ul>
            </div>
         
          </div>
         
          
        </nav>
       
        
      </div>
      </div>
    
    )

}

export default Navbarr ;