import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import FolderIcon from "@material-ui/icons/Folder";
import styles from './Navbar.module.css'

function NewFolder(props) {

 const [folderName, setFolderName] = useState("");
 

 function handleSumbit(){
     if(folderName)
         console.log(folderName);

    
 }
 
 /* Folder info:
    path
    name
    type

*/


    
  return (
    <>
    <button className={styles.btn}>
      <FolderIcon style={{ fontSize: 50 }} onClick={props.handleShow}></FolderIcon>
      <p>Add folder</p>
      </button>
      
      
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>New Folder Name </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" placeholder="Folder Name" onChange={(e)=> setFolderName(e.target.value)}></input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={()=>{
              handleSumbit();
              props.handleClose();
          }}>
            Create
          </Button>

          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NewFolder;
