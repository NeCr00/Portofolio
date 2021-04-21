import React, { useState,useEffect } from "react";
import styles from "./File.module.css";
import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile";

/* File info:
    path
    name
    type

*/

function File(props) {
  const [selected, setSelected] = useState(false);

  function handleSelectedItem() {
    let file = { name: props.name, path: props.path };
    
    if (selected) setSelected(false);
    else setSelected(true);

    props.onClick(file)
  }



  return (
    <button
      className={selected ? styles.selected : styles.unselected}
      onClick={handleSelectedItem}
    >
      <InsertDriveFileIcon style={{ fontSize: 100, fill: "black" }}>
        {" "}
      </InsertDriveFileIcon>
      <p className={styles.text}> {props.name + "." + props.type}</p>
    </button>
  );
}

export default File;
