import React, { useState, useEffect } from "react";
import styles from "./Drive.module.css";
import Navbar from "./Navbar/Navbar";
import File from "./File/File";
import Folder from "./Folder/Folder";
import Path from "./Path/Path";
import axios from "axios";
import usePrevious from "./usePrevious";

function Drive(props) {
  const [path, setPath] = useState("/");
  const [folders, setFolders] = useState([]);

  function handleSelectedFolder(newPath) {
    setPath(path + newPath);
  }

  function handlePreviousPath(newPath) {
    if (!newPath) setPath("/");
    else setPath(newPath);
  }

  useEffect(() => {
    axios
      .get("http://localhost:3001/Folders", { params: { Path: path } })
      .then((res) => {
        setFolders(res.data);
        console.log(res.data);
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
        ></Folder>
      ))}
    </div>
  );
}

export default Drive;
