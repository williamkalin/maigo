import React from 'react'
import classes from './ShoppingCart.module.css'
import cart from '../../../assets/shoppingcart.svg'
import { connect } from 'react-redux'


const ShoppingCart = (props) => {


   const { shoppingCartItems } = props;
   var numberOfItemsInCart;

   // useEffect(() => {

   //    if (shoppingCartItems) {
   //       numberOfItemsInCart = shoppingCartItems.length;
   //    }

   //    console.log(numberOfItemsInCart);
   // }, [shoppingCartItems])


   if (shoppingCartItems) {
      numberOfItemsInCart = shoppingCartItems.length;
   }

   var itemNumberDiv = <></>;

   if (numberOfItemsInCart >= 1) {

      itemNumberDiv =
         <div className={classes.cartcounter}>
            <p>{numberOfItemsInCart}</p>
         </div>


   }

   return (
      <div className={classes.shoppingcart} onClick={props.clicked} >
         <img src={cart} alt={'cart'}></img>
         {itemNumberDiv}
      </div>
   )
}



const mapStateToProps = state => {
   return {
      shoppingCartItems: state.clothes.shoppingCart,
   }

}



export default connect(mapStateToProps, null)(ShoppingCart);