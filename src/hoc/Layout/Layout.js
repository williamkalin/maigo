import React from 'react'
import classes from './Layout.module.css'
import Toolbar from '../../components/Toolbar/Toolbar'
import Footer from '../../components/Footer/Footer'
import { useState } from 'react';
import Sidedrawer from '../../components/SideDrawer/Sidedrawer';
import CartDrawer from '../../components/CartDrawer/CartDrawer'


const Layout = (props) => {


   const [showSideDrawer, setShowSideDrawer] = useState(false);
   const [showSideCart, setShowSideCart] = useState(false);




   const sideDrawerClosedHandler = () => {
      setShowSideDrawer(false);
   }
   const sideDrawerOpenHandler = () => {
      setShowSideDrawer(!showSideDrawer);
   }


   const sideCartClosedHandler = () => {
      setShowSideCart(false);
   }
   const sideCartOpenHandler = () => {
      setShowSideCart(!showSideDrawer);
   }


   return (

      <>

         <Sidedrawer
            isopen={showSideDrawer}
            close={sideDrawerClosedHandler}
         />

         <CartDrawer
            isopen={showSideCart}
            close={sideCartClosedHandler}
         />


         <div className={classes.makeflex}>
            <Toolbar drawertoggleclickhandler={sideDrawerOpenHandler} drawercartclickhandler={sideCartOpenHandler} />

            {props.children}
            <Footer />
         </div>
      </>

   )
}
export default Layout;

