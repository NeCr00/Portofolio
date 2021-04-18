import React, { useState } from "react";
import styles from "./Navbar.module.css";
import AddIcon from "@material-ui/icons/Add";
import { Modal, Button } from "react-bootstrap";
import axios from "axios";

function AddFile(props) {
  const [selectedFiles, setSelectedFiles] = useState();
  const [disabled, setDisabled] = useState(false);

  function fileSelected(event) {
    setSelectedFiles(event.target.files);
    console.log(props.path)
  }

  function handleUpload() {
    if(selectedFiles){
    const data = new FormData();
    data.append("file", selectedFiles[0]);
    data.append("path" ,props.path )
    axios
      .post("http://localhost:3001/upload", data)
      .then((response) => {
        console.log(response);
       setTimeout(props.render,3000)
      })
      .catch((error) => console.log(error));
    }
    setSelectedFiles(null)
  }

function CloseModal(){
  if(selectedFiles) 
    props.handleClose()
}

  return (
    <>
      <button className={styles.btn}>
        <AddIcon style={{ fontSize: 50 }} onClick={props.handleShow}>
          {" "}
        </AddIcon>

        <p>Add Files</p>
      </button>

      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Upload a File </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input
            className={styles.fileUpload}
            type="file"
            onChange={(event) => fileSelected(event)}
          ></input>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            onClick={() => {
              handleUpload();
              CloseModal();
            }}
          >
            Upload
          </Button>
          <Button variant="secondary" onClick={props.CloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddFile;
