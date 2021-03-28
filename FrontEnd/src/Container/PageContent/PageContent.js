import axios from "axios";
import React, {  useEffect } from "react";
import styles from "./PageContent.module.css";
import { useHistory } from "react-router-dom";
function PageContent(props) {
    
    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem("jwtToken");
        axios
          .get("http://localhost:3001/verifyJwt", {
            headers: { Authorization: `Bearer ${token}` },
          })
          .then((res) => {
            if (!res.data.valid) {
              localStorage.removeItem("jwtToken");
    
              history.push("/");
            }
          })
          .catch((error) => {
            localStorage.removeItem("jwtToken");
            history.push("/");
          });
      }, []);
    

  return <div className={styles.page}> {props.children} </div>;
}

export default PageContent;
