import React, { useState, useEffect } from "react";
import styles from "./Drive.module.css";
import Navbar from "./Navbar/Navbar";
import File from "./File/File";
import Folder from "./Folder/Folder";
import Path from "./Path/Path";
import axios from "axios";
import useForceUpdate from "use-force-update";

function Drive(props) {
  const [path, setPath] = useState("/"); //State for keeping the current path
  const [folders, setFolders] = useState([]); //State for keeping the folders which current path contains and mapping it
  const [files, setFiles] = useState([]); // State for storing files from axios request and mapping in drive
  const [disabled, setDisabled] = useState(false); //State for disabling components to avoid double clicking and change the state
  const [render, setrender] = useState(false); //State for rendering the
  const [searchIsActive, setSearchIsActive] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedFiles, setSelectedFiles] = useState([]);

  function HandleSelectedFile(file) {
    var elementIndex = -1;
    if (selectedFiles.length > 0) {
      elementIndex = selectedFiles.findIndex(
        (element) => element.name === file.name && element.path == file.path
      );
    }
    let files = selectedFiles;

    if (elementIndex != -1) {
      delete files[elementIndex];
      files.length--;
      setSelectedFiles(files);
    } else {
      files.push(file);

      setSelectedFiles(files);
    }
    console.log(selectedFiles);
  }

  function handleDownload() {
    const files = selectedFiles;
    console.log(1);
    if (files) {
      axios({
        url: "http://localhost:3001/DownloadFiles",
        method: "GET",
        responseType: "blob",
      }).then((response) => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "file.pdf");
        document.body.appendChild(link);
        link.click();
      });
    }
  }

  function handleSelectedFolder(newPath) {
    //When a folder selected, Folder component update drive state to new Path
    setPath(path + newPath);
  }

  function handlePreviousPath(newPath) {
    //When backarrow is pressed, Path component set the new path one location before
    if (!newPath) setPath("/");
    else setPath(newPath);
  }

  function renderPage() {
    setrender(!render);
    //setPath (newPath)
  }

  function enableSearch() {
    setSearchIsActive(true);
  }

  useEffect(() => {
    if (searchInput.length < 1) {
      setSearchIsActive(false);
    } else {
      axios
        .get("http://localhost:3001/SearchResults", {
          params: { searchInput: searchInput },
        })
        .then((res) => {
          setSearchResults(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [searchInput]);

  useEffect(() => {
    setDisabled(true); //Drive component request files and folders for the current path
    setSelectedFiles([]);
    console.log(selectedFiles);
    axios
      .get("http://localhost:3001/Folders", { params: { Path: path } })
      .then((res) => {
        setFolders(res.data);

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
  }, [path, render]);

  if (!searchIsActive)
    return (
      <div className={styles.Drive}>
        <Navbar
          path={path}
          renderPage={renderPage}
          enableSearch={enableSearch}
          onChange={(input) => setSearchInput(input)}
          handleDownload = {handleDownload}
        ></Navbar>
        <Path path={path} handlePreviousPath={handlePreviousPath} ></Path>

        {folders.map((folder, i) => (
          <Folder
            key={i}
            handleSelectedFolder={handleSelectedFolder}
            name={folder.name}
            disabled={disabled}
          ></Folder>
        ))}

        {files.map((file, i) => (
          <File
            key={file.idfiles}
            name={file.name}
            type={file.type}
            path={file.path}
            onClick={HandleSelectedFile}
          ></File>
        ))}
      </div>
    );
  else
    return (
      <div className={styles.Drive}>
        <Navbar
          path={path}
          renderPage={renderPage}
          onChange={(input) => setSearchInput(input)}
        ></Navbar>
        {searchResults.map((file, i) => (
          <File
            key={i}
            name={file.name}
            type={file.type}
            onClick={HandleSelectedFile}
          ></File>
        ))}
      </div>
    );
}

export default Drive;
