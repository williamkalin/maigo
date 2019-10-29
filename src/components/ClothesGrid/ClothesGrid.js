import React from 'react'
import { connect } from 'react-redux';
import classes from './ClothesGrid.module.css'
import ClothingItem from '../ClothingItem/ClothingItem';

const ClothesGrid = (props) => {

   const { currentDisplayedClothes } = props;
   //console.log(currentDisplayedClothes)


   var gridItems = <></>;

   if (currentDisplayedClothes) {

      // console.log("now we have this");

      gridItems = currentDisplayedClothes.map(clothingitem => (

         <ClothingItem
            key={clothingitem.name}
            itemprops={clothingitem}
         />

      ))

   }

   return (
      <div className={classes.container} >
         {
            gridItems
         }
      </div>
   )
}



const mapStateToProps = state => {
   return {
      currentDisplayedClothes: state.clothes.currentClothesBySelect
   }

}


export default connect(mapStateToProps, null)(ClothesGrid);

