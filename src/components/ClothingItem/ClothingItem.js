import React from 'react'
import classes from './ClothingItem.module.css'
import { Link } from 'react-router-dom';

const ClothingItem = (props) => {

   var apiendpoint = "https://mighty-atoll-69969.herokuapp.com/images/";

   const { imagename, name, price } = props.itemprops;

   apiendpoint += imagename;


   return (
      <Link
         className={props.fromdrawer ? classes.drawer : classes.container}
         to={`/clothing/${imagename}`}>
         <img src={apiendpoint} alt="" />
         <p className={classes.name}>{name}</p>
         <p className={classes.price}>{price}</p>
      </Link>
   )
}


export default ClothingItem;
