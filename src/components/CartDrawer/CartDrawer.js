import React from 'react'
import classes from './CartDrawer.module.css'
import Backdrop from '../../misc/Backdrop/Backdrop'
import { connect } from 'react-redux'
import ClothingItem from '../ClothingItem/ClothingItem'
import { Link } from 'react-router-dom';


const CartDrawer = (props) => {

   const { clothesIncart } = props;
   let attachedClasses = [classes.SideDrawer, classes.Close];
   if (props.isopen) {
      attachedClasses = [classes.SideDrawer, classes.Open];
   }





   var gridItems = <></>;


   if (clothesIncart) {

      // console.log("now we have this");

      gridItems = clothesIncart.map((clothingitem, index) => (

         <ClothingItem
            key={index}
            itemprops={clothingitem}
            fromdrawer={true}
         />

      ))

   }


   return (
      <>
         <div
            className={attachedClasses.join(' ')}
            onClick={props.close}>
            <h2>Cart</h2>
            {gridItems}
            {clothesIncart ? <Link to="/" className={classes.link}><p>Checkout</p></Link> : <></>}
         </div>
         <Backdrop hideclicked={props.close} show={props.isopen} />
      </>
   )
}

const mapStateToProps = state => {

   return {
      clothesIncart: state.clothes.shoppingCart,
   }


}



export default connect(mapStateToProps, null)(CartDrawer);