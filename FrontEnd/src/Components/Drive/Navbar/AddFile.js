import React, { useState } from "react";
import styles from "./Navbar.module.css";
import AddIcon from "@material-ui/icons/Add";
import Dropzone from 'react-dropzone-uploader'

function AddFile() {
  return (
    <button className={styles.btn} >
    
      <AddIcon style={{ fontSize: 50 }}> </AddIcon>
      <p>Add Files</p>
    </button>
  );
}

export default AddFile;
