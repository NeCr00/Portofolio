import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Login.css"
function Login(props) {

  const [email, setEmail] = useState("")

  const [password, setPassword] = useState("")

  const [errMsg, setErrMsg] = useState("")


  useEffect(() => {
    let isAuth = localStorage.getItem('isAuth')
    console.log(isAuth)
    if(isAuth) {
       props.history.push('/Dashboard')
    }

 }, [])


  const checkCredentials = (event) => {
    event.preventDefault();
    const userInfo = {
      email: email,
      password: password
    }
    axios.post('http://localhost:3001/auth', userInfo).then((res => {

      if (res.data.auth) {
        setErrMsg("")
        localStorage.setItem("jwtToken",res.data.accessToken)
        localStorage.setItem("isAuth",res.data.auth)
        props.history.push("/Dashboard")
        
      }
      else
        setErrMsg(res.data.message)

    })
    ).catch((error) => {
      console.log(error)
    });

  }
  return (
    <div>
      <form>
        <h1>My.Portofolio</h1>
        <div class="inset">

          <p>
          
            <label for="email">EMAIL ADDRESS</label>
            <input type="text" name="email" id="email" onChange={(event) => setEmail(event.target.value)} />
          </p>
          <p>
            <label for="password">PASSWORD</label>
            <input type="password" name="password" id="password" onChange={(event) => setPassword(event.target.value)} />
          </p>
          <p class="err"> {errMsg}</p>
          <p>

          </p>
        </div>
        <p class="p-container">
          <span>Forgot password ?</span>
          <button class="but" onClick={(event) => checkCredentials(event)} >Login</button>
        </p>
        {props.auth}
      </form>
    </div>

  )
}

export default Login;