import React from 'react';
import FolderIcon from '@material-ui/icons/Folder';
import styles from './Folder.module.css'
function Folder(){

    return(
        <button className={styles.unselected}>
        <FolderIcon style={{fontSize:100}}> </FolderIcon>
        <p className={styles.text}> Folder</p>
        </button>
        
    )

}

export default Folder;