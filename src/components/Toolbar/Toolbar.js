import React from 'react'
import classes from './Toolbar.module.css'
import ToolbarItems from './ToolbarItems/Toolbaritems'
import Logo from './Logo/Logo'
import ShoppingCart from './Shoppingcart/ShoppingCart'
import Drawertoggle from './Drawertoggle/Drawertoggle'

const Toolbar = (props) => {

   return (
      <div className={classes.Toolbar}>

         {/* add drawer toggle here which will be active depending on props passed down from Layout */}
         <Drawertoggle clicked={props.drawertoggleclickhandler} />

         <ToolbarItems />

         <Logo />

         <ShoppingCart clicked={props.drawercartclickhandler} />
      </div>
   )
}

export default Toolbar;