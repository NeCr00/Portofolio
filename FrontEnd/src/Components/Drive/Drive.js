import React, { useState, useEffect } from "react";
import styles from "./Drive.module.css";
import Navbar from "./Navbar/Navbar";
import File from "./File/File";
import Folder from "./Folder/Folder";
import Path from "./Path/Path";
import axios from "axios";
import useForceUpdate from 'use-force-update';


function Drive(props) {

  const [path, setPath] = useState("/"); //State for keeping the current path
  const [folders, setFolders] = useState([]); //State for keeping the folders which current path contains and mapping it
  const [files, setFiles] = useState([]); // State for storing files from axios request and mapping in drive
  const [disabled, setDisabled] = useState(false); //State for disabling components to avoid double clicking and change the state
  const [render,setrender] = useState(false) //State for rendering the

  function handleSelectedFolder(newPath) {
    //When a folder selected, Folder component update drive state to new Path
    setPath(path + newPath);
  }

  function handlePreviousPath(newPath) {
    //When backarrow is pressed, Path component set the new path one location before
    if (!newPath) setPath("/");
    else setPath(newPath);
  }

function change(newPath){
  setrender(!render)
  //setPath (newPath)
}
  useEffect(() => {
    setDisabled(true); //Drive component request files and folders for the current path
    axios
      .get("http://localhost:3001/Folders", { params: { Path: path } })
      .then((res) => {
        setFolders(res.data);
        console.log(res.data);
        setDisabled(false);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .get("http://localhost:3001/Files", { params: { Path: path } })
      .then((res) => {
        setFiles(res.data);
        setDisabled(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [path,render]);

  return (
    <div className={styles.Drive}>
      <Navbar path={path} render={change}>  </Navbar>
      <Path path={path} handlePreviousPath={handlePreviousPath}></Path>

      {folders.map((folder, i) => (
        <Folder
          key={i}
          handleSelectedFolder={handleSelectedFolder}
          name={folder.name}
          disabled={disabled}
        ></Folder>
      ))}

      {files.map((file, i) => (
        <File key={i} name={file.name} type={file.type}></File>
      ))}
      <button onClick={change}> Click me</button>
    </div>
  );
}

export default Drive;
