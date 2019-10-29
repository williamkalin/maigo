import React from 'react'
import classes from './Backdrop.module.css'

const Backdrop = (props) => {

   var backrop = <div></div>

   if (props.show) {
      backrop = <div className={classes.backdrop} onClick={props.hideclicked}>

      </div>
   }

   return (
      backrop
   )
}


export default Backdrop;
