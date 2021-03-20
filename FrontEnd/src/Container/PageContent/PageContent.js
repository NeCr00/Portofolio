import React from 'react'
import styles from './PageContent.module.css'
function  PageContent (props)  {

return(

    <div className = {styles.page}> {props.children} </div>
    
)

}

export default PageContent;