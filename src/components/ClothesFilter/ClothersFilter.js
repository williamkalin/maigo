import React from 'react'
import classes from './ClothesFilter.module.css'
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index'

const ClothesFilter = (props) => {

   const { color, currentcolor, fit, currentfit, material, currentmaterial, onValueChange } = props;

   var totalform = <></>;




   if (color && fit && material) {

      totalform = <div className={classes.container}>
         <form className={classes.form}>

            {/* color start */}
            <div className={classes.selectorcontainer}>
               <label htmlFor="color">Color</label>
               <select
                  name="color"
                  id="color"
                  value={currentcolor}
                  onChange={onValueChange}>
                  {createjsx(color)}
               </select>
            </div>
            {/* color end */}

            {/* material start */}
            <div className={classes.selectorcontainer}>
               <label htmlFor="material">Material</label>
               <select
                  name="material"
                  id="material"
                  value={currentmaterial}
                  onChange={onValueChange}>
                  {createjsx(material)}
               </select>
            </div>
            {/* material end */}

            {/* fit start */}
            <div className={classes.selectorcontainer}>
               <label htmlFor="fit">Fit</label>
               <select
                  name="fit"
                  id="fit"
                  value={currentfit}
                  onChange={onValueChange}>
                  {createjsx(fit)}
               </select>
            </div>
            {/* fit end */}
         </form>
      </div>

   }


   return (
      totalform
   )
}


const createjsx = (array) => {
   return array = array.map((item, index) => {
      return <option value={item} key={index}>{item}</option>
   })

}



const mapStateToProps = state => {
   return {
      color: state.clothes.color,
      material: state.clothes.material,
      fit: state.clothes.fit,
      currentcolor: state.clothes.currentcolor,
      currentmaterial: state.clothes.currentmaterial,
      currentfit: state.clothes.currentfit,

   }
}

const mapDispatchToprops = dispatch => {

   return {

      onValueChange: (event) => dispatch(actions.changeCurrentValue(event))
   }

}







export default connect(mapStateToProps, mapDispatchToprops)(ClothesFilter);



// colour,size,fit,material