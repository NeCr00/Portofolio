import axios from "axios";
import { useState } from "react";
import "./Login.css"
function Login() {

  const [state, setState] = useState({
    email: "",
    password: ""
  });


  const handleInputChange = (event) => {
    setState((prevProps) => ({
      ...prevProps,
      [event.target.name]: event.target.value
    }));
  };

  const checkCredentials = () => {
    const userInfo = {
      email: state.email,
      password: state.password
    }

    axios.post('http://localhost:3001/auth',userInfo).then((res => {
      console.log(res)
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
          <input type="text" name="email" id="email" value={state.email} onChange={handleInputChange} />
        </p>
        <p>
          <label for="password">PASSWORD</label>
          <input type="password" name="password" id="password" value={state.password} onChange={handleInputChange} />
        </p>
        <p>
          <input type="checkbox" name="remember" id="remember" />
          <label for="remember">Remember me for 14 days</label>
        </p>
      </div>
      <p class="p-container">
        <span>Forgot password ?</span>
        <input type="submit" name="go" id="go" value="Log in" onClick={() => checkCredentials()} />
      </p>
    </form>



  </div>




)

}

export default Login;