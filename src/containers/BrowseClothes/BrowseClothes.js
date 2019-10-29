import React, { useEffect } from 'react'
import classes from './BrowseClothes.module.css'
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';
import ClothesFilter from '../../components/ClothesFilter/ClothersFilter'
import ClothesGrid from '../../components/ClothesGrid/ClothesGrid'
import VideoComponent from '../../components/VideoCompoment/VideoComponent'

const BrowseClothes = (props) => {

   const currentRoute = props.location.pathname;
   const { onFetchClothes } = props;

   useEffect(() => {

      onFetchClothes(currentRoute);

   }, [currentRoute, onFetchClothes]);


   //console.log(props.location.pathname);
   return (
      <div className={classes.container}>
         <VideoComponent />
         <ClothesFilter />
         {/* here we place the actual clothes component, we will have to listen to changes in  either one of (current -- color,material,fit). to trigger a RE-evaluation of currentlyDisplayedClothes. or perhaps chain that functionality after changing the state when we change the state intially */}
         <ClothesGrid />

      </div>
   )
}


const mapDispatchToprops = dispatch => {

   return {
      onFetchClothes: (APIendpoint) => dispatch(actions.fetchTypeOfItems(APIendpoint))
   }

}


export default connect(null, mapDispatchToprops)(BrowseClothes);