import axios from '../../axiosdefault';
import * as actionTypes from './actionTypes';


/////////////////////////////////////////
/////////////////////////////FETCHING CLOTHES FROM DB
export const fetchTypeOfItems = (APIendpoint) => {

   return dispatch => axios.get(APIendpoint)
      .then(response => {
         dispatch(setCurrentClothes(response.data))
      })
      .catch(error => {
         dispatch(setCurrentClothesFailed());
      })

}

export const setCurrentClothes = (clothes) => {

   return {
      type: actionTypes.SET_TYPE_ITEMS,
      clothes: clothes
   }
}

export const setCurrentClothesFailed = (clothes) => {
   return {
      type: actionTypes.FAILED_SET_TYPE_ITEMS,
      clothes: clothes
   }
}



/////////////////////////////////////////
/////////////////////////////CHANGE CURRENT SELECTED VALUES


export const changeCurrentValue = (event) => {

   return {
      type: actionTypes.SET_SELECTOR_VALUE,
      event: event
   }

}

/////////////////////////////////////////
/////////////////////////////ADD ITEM TO CART


export const setCartItem = (clothingitem) => {

   return {
      type: actionTypes.SET_CART_VALUE,
      clothingitem: clothingitem
   }

}


/////////////////////////////////////////
/////////////////////////////FETCH NAVBAR LINKS

export const fetchNavbarLinks = () => {

   return dispatch => axios.get("/uniquetypes")
      .then(response => {
         dispatch(setCurrentLinks(response.data))
      })
      .catch(error => {
         dispatch(setCurrentLinksFailed());
      })

}


export const setCurrentLinks = (uniquelinks) => {

   return {
      type: actionTypes.SET_UNIQUE_LINKS,
      uniquelinks
   }
}

export const setCurrentLinksFailed = () => {
   return {
      type: actionTypes.FAILED_SET_UNIQUE_LINKS
   }
}