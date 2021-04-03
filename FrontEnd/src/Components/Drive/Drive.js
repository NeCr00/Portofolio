import React,{ useState,useEffect} from 'react'
import styles from './Drive.module.css'
import Navbar  from './Navbar/Navbar'
import File from './File/File'
import Folder from './Folder/Folder'
import Path from './Path/Path'
import axios from 'axios'

function Drive (props) {
   
const [path,setPath] = useState('/')
const [folders,setFolders] = useState([]) 

function handleSelectedFolder (newPath){
        setPath(path+newPath)
    }
    
useEffect(() => {
    var Path = path
    axios.get("http://localhost:3001/Folders",Path).then( (res)=>{
        setFolders(res.data)
    }).catch((error)=>{
        console.log(error)
    })
},[])

    return (
        <div className={styles.Drive}>
       <Navbar > </Navbar>
       <Path path = {path}></Path>
        <File></File>
       <Folder handleSelectedFolder = {handleSelectedFolder}></Folder>
       {folders.map((folder,i)=>(
           <Folder key={i} handleSelectedFolder = {handleSelectedFolder} name={folder.name}></Folder>
       ))}
       </div>
    )
}

export default Drive