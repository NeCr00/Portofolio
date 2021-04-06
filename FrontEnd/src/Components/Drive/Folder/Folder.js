import React from 'react';
import FolderIcon from '@material-ui/icons/Folder';
import styles from './Folder.module.css'
function Folder(props){



function changePath(){
    props.handleSelectedFolder(props.name+'/')
}

    return(
        <button  disabled={props.disabled} className={styles.unselected} onClick= {()=>{changePath(); }}>
        <FolderIcon style={{fontSize:100}}> </FolderIcon>
        <p className={styles.text}> {props.name}</p>
        </button>
        
    )

}

export default Folder;