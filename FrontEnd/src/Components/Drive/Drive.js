import React, { useState, useEffect } from "react";
import styles from "./Drive.module.css";
import Navbar from "./Navbar/Navbar";
import File from "./File/File";
import Folder from "./Folder/Folder";
import Path from "./Path/Path";
import axios from "axios";
import usePrevious from "./usePrevious";

function Drive(props) {
  const [path, setPath] = useState("/"); //State for keeping the current path
  const [folders, setFolders] = useState([]); //State for keeping the folders which current path contains and mapping it
  const [disabled,setDisabled] = useState(false) //State for disabling components to avoid double clicking and change the state

  function handleSelectedFolder(newPath) {  //When a folder selected, Folder component update drive state to new Path
    setPath(path + newPath);
  }

  function handlePreviousPath(newPath) {  //When backarrow is pressed, Path component set the new path one location before
    if (!newPath) setPath("/");
    else setPath(newPath);
  }

  useEffect(() => {
    setDisabled(true)     //Drive component request files and folders for the current path 
    axios .get("http://localhost:3001/Folders", { params: { Path: path } })
      .then((res) => {
        setFolders(res.data);
        console.log(res.data);
        setDisabled(false)
      })
      .catch((error) => {
        console.log(error);
      });
  }, [path]);

  return (
    <div className={styles.Drive}>
      <Navbar path={path}> </Navbar>
      <Path path={path} handlePreviousPath={handlePreviousPath}></Path>

      {folders.map((folder, i) => (
        <Folder
          key={i}
          handleSelectedFolder={handleSelectedFolder}
          name={folder.name}
          disabled={disabled}
        ></Folder>
      ))}
    </div>
  );
}

export default Drive;
