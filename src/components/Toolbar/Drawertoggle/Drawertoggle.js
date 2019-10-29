import React from 'react'
import classes from './Drawertoggle.module.css'

const Drawertoggle = (props) => {

   return (
      <>
         <div className={classes.drawertoggle} onClick={props.clicked}>
            <div></div>
            <div></div>
            <div></div>
         </div>
      </>
   )
}

export default Drawertoggle;