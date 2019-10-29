import React, { useEffect, useState } from 'react'
import classes from './Clothing.module.css'
import axios from '../../axiosdefault'
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import VideoComponent from '../../components/VideoCompoment/VideoComponent'



const Clothing = (props) => {


   const { addItemToCart } = props;

   const clothingname = props.location.pathname.split("/")[2];

   var [currentClothing, setcurrentCloting] = useState(null);



   useEffect(() => {
      axios.get(`/clothing/${clothingname}`)
         .then(response => {
            //console.log(response.data[0])
            setcurrentCloting(response.data[0]);
         })
         .catch(error => {

         })
   }, [clothingname]);

   var clothingimagedesc = <></>;



   if (currentClothing) {
      clothingimagedesc = <>
         <div className={classes.imagecontainer}>
            <img src={`https://mighty-atoll-69969.herokuapp.com/images/${clothingname}`} alt="" />
         </div>
         <div className={classes.clothingcontainer}>
            <h2 className={classes.h2}>{currentClothing.name}</h2>
            <h3 className={classes.containeritems}>price {currentClothing.price}$</h3>
            <h3 className={classes.containeritems}>Gender {currentClothing.gender}</h3>
            <h3 className={classes.containeritems}>Fit {currentClothing.fit}</h3>
            <h3 className={classes.containeritems}>Material {currentClothing.material}</h3>
            <h3 className={classes.containeritems}>Currently in stock? {currentClothing.available}</h3>
            <p className={classes.containeritems}>{currentClothing.description}</p>
            <button className={classes.button} onClick={() => addItemToCart(currentClothing)}><p>Add to cart</p></button>

         </div>
      </>


   }

   return (
      <div className={classes.container}>
         <VideoComponent />
         <div className={classes.innercontainer}>
            {clothingimagedesc}
         </div>
      </div>
   )
}



const mapDispatchToprops = dispatch => {

   return {
      addItemToCart: (newCartItem) => dispatch(actions.setCartItem(newCartItem))
   }

}




export default connect(null, mapDispatchToprops)(Clothing);