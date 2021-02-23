import axios from "axios"
import React, { Component, useEffect } from "react"
import { Route, Redirect } from "react-router-dom"
import { withRouter } from "react-router-dom"

function ProtectedRoute(props) {

    useEffect(() => {
        const token = localStorage.getItem("jwtToken")
        if (!token)
            props.history.push("/")

        axios.get('http://localhost:3001/verifyJwt',{headers:{Authorization: `Bearer ${token}` } }).then(res => {
            if (!res.data.valid)
                props.history.push('/')
        }).catch((error) => {
            props.history.push('/')
        })
    }, [])



    return (
        <div> {props.children}</div>
    )
}


export default withRouter(ProtectedRoute)

