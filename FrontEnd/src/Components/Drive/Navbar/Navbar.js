import React, { useState } from "react";
import styles from "./Navbar.module.css";
import SearchIcon from "@material-ui/icons/Search";
import GetAppIcon from "@material-ui/icons/GetApp";
import DriveImg from "./icons/drive.png";
import DeleteIcon from "@material-ui/icons/Delete";
import NewFolder from "./NewFolder";
import AddFile from "./AddFile";

function Navbar(props) {
  const [showFile, setShowFile] = useState(false);
  const [showFolder, setShowFolder] = useState(false);

  const handleCloseFile = () => setShowFile(false);
  const handleShowFile = () => setShowFile(true);

  const handleCloseFolder = () => setShowFolder(false);
  const handleShowFolder = () => setShowFolder(true);


  return (
    <>
      <div className={styles.Container}>
        <div className={styles.Logo}>
          <img className={styles.DriveImage} src={DriveImg} />
          <span className={styles.Figcaption}>My Drive</span>
        </div>

        <div className={styles.Searchbar}>
          <input className={styles.TextField} placeholder="Search in Drive" />
        </div>
    
        <div className={styles.actionIcons}>
          <AddFile
            show={showFile}
            path={props.path}
            handleClose={handleCloseFile}
            handleShow={handleShowFile}
            render={props.render}
          ></AddFile>

          <NewFolder
            show={showFolder}
            path={props.path}
            render={props.render}
            handleClose={handleCloseFolder}
            handleShow={handleShowFolder}
          >
            {" "}
          </NewFolder>

          <button className={styles.btn}>
            <GetAppIcon style={{ fontSize: 50 }}></GetAppIcon>
            <p>Download</p>
          </button>

          <button className={styles.btn}>
            <DeleteIcon style={{ fontSize: 50 }}></DeleteIcon>
            <p>Delete File</p>
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
