import React,{useState} from 'react';
import styles from './Path.module.css'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
function Path(props){

 const [deletedPath,setDeletedPath] = useState('')   

function nextPath(){
    if(deletedPath!='/' ){
    props.handlePreviousPath(props.path+deletedPath)
    setDeletedPath('')}
}

function test (){
    var newpath = props.path;
    var path = newpath.split('/');
    console.log(path)
    var deleted = path.pop();
    var deleted2 = path.pop()
    setDeletedPath(deleted2 +'/')
    var previousPath = path.join('/')
    console.log(previousPath)
    props.handlePreviousPath(previousPath +"/")

}
    return(

        <div className={styles.Containerr} >
            <p className={styles.text}> {props.path}</p>
            <button className={styles.btn}> <ArrowBackIcon style={{fontSize:50,fill:'white'}} onClick={test}></ArrowBackIcon></button>
            <button className={styles.btn}><ArrowForwardIcon style={{fontSize:50,fill:'white'}} onClick={nextPath}></ArrowForwardIcon></button>
        </div>
        
    )
}

export default Path;