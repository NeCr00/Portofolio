import React, { useState, useEffect } from "react";
import styles from "./File.module.css";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";

/* File info:
    path
    name
    type

*/

function File(props) {
  const [selected, setSelected] = useState(false);
  const [key,setKey] = useState(props.key);
  function handleSelectedItem() {
    if (selected) setSelected(false);
    else setSelected(true);
  }

  function AddselectedFile() {
    let file = { name: props.name, path: props.path, type:props.type };
    props.onClick(file);
  }

  return (
    <button
      className={selected ? styles.selected : styles.unselected}
      onClick={() => {
        handleSelectedItem();
        AddselectedFile();
      }}
    >
      <InsertDriveFileIcon style={{ fontSize: 100, fill: "black" }}>
        {" "}
      </InsertDriveFileIcon>
      <p className={styles.text}> {props.name + "." + props.type}</p>
    </button>
  );
}

export default File;
