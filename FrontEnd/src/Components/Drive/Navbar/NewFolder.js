import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import FolderIcon from "@material-ui/icons/Folder";
import styles from './Navbar.module.css'
import axios from 'axios';
function NewFolder(props) {

 const [folderName, setFolderName] = useState("");
 

 function handleSumbit(){ // make post request to save new Folder on the current Path
   console.log(folderName)
   const data = {
     path:props.path,
     name:folderName
   }
     if(folderName){
       axios.post("http://localhost:3001/NewFolder",data).then((res)=>{
          
       }).catch((error)=>{
         console.log(error)
       })
     }
    
 }
 


    
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
          <input type="text" onChange={(e)=> setFolderName(e.target.value)}></input>
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
