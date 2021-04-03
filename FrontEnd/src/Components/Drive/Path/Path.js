import React,{useState} from 'react';
import styles from './Path.module.css'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
function Path(props){




    return(

        <div className={styles.Containerr} >
            <p className={styles.text}>{props.path}</p>
            <button className={styles.btn}> <ArrowBackIcon style={{fontSize:50,fill:'white'}}></ArrowBackIcon></button>
            <button className={styles.btn}><ArrowForwardIcon style={{fontSize:50,fill:'white'}}></ArrowForwardIcon></button>
        </div>
        
    )
}

export default Path;