import React from 'react'
import styles from './Drive.module.css'
import Navbar  from './Navbar/Navbar'
import File from './File/File'
import Folder from './Folder/Folder'
import Path from './Path/Path'

function Drive (props) {

 


    return (
        <div className={styles.Drive}>
       <Navbar > </Navbar>
       <Path></Path>
        <File></File>
       <Folder></Folder>
       </div>
    )
}

export default Drive