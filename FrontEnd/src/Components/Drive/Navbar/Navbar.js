import React, { useState } from "react";
import styles from "./Navbar.module.css";
import SearchIcon from "@material-ui/icons/Search";
import GetAppIcon from "@material-ui/icons/GetApp";
import DriveImg from "./icons/drive.png";
import DeleteIcon from "@material-ui/icons/Delete";
import NewFolder from "./NewFolder";
import AddFile from "./AddFile";

function Navbar(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className={styles.Container}>
        <div className={styles.Logo}>
          <img className={styles.DriveImage} src={DriveImg} />
          <span className={styles.Figcaption}>My Drive</span>
        </div>

        <div className={styles.Searchbar}>
          <input className={styles.TextField} label="Search in Drive" />
        </div>

        <div className={styles.actionIcons}>
          <AddFile></AddFile>
          <NewFolder
            show={show}
            handleClose={handleClose}
            handleShow={handleShow}
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
