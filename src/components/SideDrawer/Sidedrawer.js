import React from 'react'
import classes from './Sidedrawer.module.css'
import Backdrop from '../../misc/Backdrop/Backdrop'
import Toolbaritems from '../Toolbar/ToolbarItems/Toolbaritems'


const Sidedrawer = (props) => {


   let attachedClasses = [classes.SideDrawer, classes.Close];
   if (props.isopen) {
      attachedClasses = [classes.SideDrawer, classes.Open];
   }




   return (
      <>
         <div
            className={attachedClasses.join(' ')}
            onClick={props.close}>

            <Toolbaritems sidedrawer={true} />
         </div>
         <Backdrop hideclicked={props.close} show={props.isopen} />
      </>
   )
}



export default Sidedrawer;