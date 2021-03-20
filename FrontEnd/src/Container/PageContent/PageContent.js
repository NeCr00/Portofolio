import React from 'react'
<<<<<<< Updated upstream
import './PageContent.css'
=======
import styles from './PageContent.module.css'
>>>>>>> Stashed changes
function  PageContent (props)  {

return(

<<<<<<< Updated upstream
    <div> {props.children} </div>

=======
    <div className = {styles.page}> {props.children} </div>
    
>>>>>>> Stashed changes
)

}

export default PageContent;