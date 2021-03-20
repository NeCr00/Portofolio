import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./Login.module.css";
function Login(props) {
<<<<<<< Updated upstream
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
=======
  
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [errMsg, setErrMsg] = useState("");
>>>>>>> Stashed changes

  const [errMsg, setErrMsg] = useState("");

  const checkCredentials = (event) => {
    event.preventDefault();
    const userInfo = {
      email: email,
      password: password,
    };
    axios
      .post("http://localhost:3001/auth", userInfo)
      .then((res) => {
        if (res.data.auth) {
          setErrMsg("");
          localStorage.setItem("jwtToken", res.data.accessToken);
          localStorage.setItem("isAuth", res.data.auth);
          props.history.push("/Dashboard");
        } else setErrMsg(res.data.message);
      })
      .catch((error) => {
        console.log(error);
      });
  };
<<<<<<< Updated upstream
  return (
    <div className = {styles.page}>
      <form className = {styles.form}>
        <h1 className ={styles.title}>My.Portofolio</h1>
        <div className={styles.inset}>
          <p>
            <label className = {styles.label} for="email">EMAIL ADDRESS</label>
=======


  useEffect(() => {
    const token = localStorage.getItem("jwtToken");
    axios
      .get("http://localhost:3001/verifyJwt", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        if (res.data.valid) {
          props.history.push("/Dashboard");
        }
      })
      .catch((error) => {
        localStorage.removeItem("jwtToken");
        props.history.push("/");
      });
  }, []);

  return (
    <div className={styles.page}>
      <form className={styles.form}>
        <h1 className={styles.title}>My.Portofolio</h1>
        <div className={styles.inset}>
          <p>
            <label className={styles.label} for="email">
              EMAIL ADDRESS
            </label>
>>>>>>> Stashed changes
            <input
              type="text"
              name="email"
              id="email"
              onChange={(event) => setEmail(event.target.value)}
            />
          </p>
          <p>
<<<<<<< Updated upstream
            <label className = {styles.label} for="password">PASSWORD</label>
=======
            <label className={styles.label} for="password">
              PASSWORD
            </label>
>>>>>>> Stashed changes
            <input
              type="password"
              name="password"
              id="password"
              onChange={(event) => setPassword(event.target.value)}
            />
          </p>
          <p className={styles.err}> {errMsg}</p>
          <p></p>
        </div>
<<<<<<< Updated upstream
        <p className={styles.container }>
          <span>Forgot password ?</span>
          <button className={styles.but} onClick={(event) => checkCredentials(event)}>
            Login
          </button>
        </p>
        
=======
        <p className={styles.container}>
          <span>Forgot password ?</span>
          <button
            className={styles.but}
            onClick={(event) => checkCredentials(event)}
          >
            Login
          </button>
        </p>
>>>>>>> Stashed changes
      </form>
    </div>
  );
}

export default Login;
