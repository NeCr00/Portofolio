import React, { useState } from "react";
import styles from "./Navbar.module.css";
import AddIcon from "@material-ui/icons/Add";
import { Modal, Button } from "react-bootstrap";
function AddFile(props) {
  const [selectedFiles, setSelectedFiles] = useState(null);

  function fileSelected(event) {
    setSelectedFiles(event.target.files);
    const hi = event.target.files;
    console.log(hi);
  }

  function handleUpload() {
    console.log(selectedFiles)
  }

  function closeModal(close){
    if(selectedFiles)
    close()
  }


  return (
    <>
      <button className={styles.btn} onClick={handleUpload}>
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
          <input className={styles.fileUpload} type="file" onChange={event=>fileSelected(event)}></input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={()=>{handleUpload(); closeModal(props.handleClose);}}>Upload</Button>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddFile;
