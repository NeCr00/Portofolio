import axios from "axios";
import React, { useState, useEffect, useReducer } from "react";
import Navbar from "../Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route, Link, useHistory as history } from 'react-router-dom';
import PageContent from '../PageContent/PageContent'
import './Dashboard.css'


function Dashbroad(props) {

    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

    useEffect(() => {
        const token = localStorage.getItem("jwtToken")
        axios.get('http://localhost:3001/verifyJwt', { headers: { Authorization: `Bearer ${token}` } }).then(res => {
            if (!res.data.valid) {
                localStorage.removeItem("jwtToken")

                props.history.push('/')

            }

        }).catch((error) => {
            localStorage.removeItem("jwtToken")
            props.history.push('/')
        })
    }, [])

    const [logout, setLogout] = useState(false)


    function Logout(e) {
        localStorage.removeItem("jwtToken");
        localStorage.removeItem("isAuth");
        props.history.push("/")

    }


    return (

        <div>
            <div className = "navbar">
                <Navbar logout={Logout}> </Navbar>
            </div>

            <div className="page-container">
                <PageContent class=".page-contain"> </PageContent>
            </div>

        </div>
    )

}

export default Dashbroad;