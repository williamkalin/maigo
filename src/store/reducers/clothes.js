import * as actionTypes from '../actions/actionTypes';



const initialState = {
   currentClothes: null,
   currentClothesBySelect: null,
   shoppingCart: null,
   uniqueLinks: null,
   gender: null,
   color: null,
   material: null,
   fit: null,
   error: null,
   currentcolor: "any",
   currentmaterial: "any",
   currentfit: "any"
}




const reducer = (state = initialState, action) => {
   switch (action.type) {

      case actionTypes.SET_TYPE_ITEMS:
         return updateCurrentClothes(state, action);

      case actionTypes.SET_SELECTOR_VALUE:
         return updateCurrentSelectorValues(state, action);

      case actionTypes.SET_CART_VALUE:
         return updateCartObject(state, action);

      case actionTypes.SET_UNIQUE_LINKS:
         return updateUniqueLinks(state, action);

      default:
         return state;
   }
}


const updateCurrentClothes = (state, action) => {

   var clothesProperties = getUniqueProperties(action.clothes);

   var resetSelectors = {
      currentcolor: "any",
      currentmaterial: "any",
      currentfit: "any"
   }

   return { ...state, currentClothes: action.clothes, currentClothesBySelect: action.clothes, ...clothesProperties, ...resetSelectors, };

}


const updateUniqueLinks = (state, action) => {


   return { ...state, uniqueLinks: action.uniquelinks }

}


const updateCurrentSelectorValues = (state, action) => {

   var newselectorvalue = getNewSelectorValues(action.event);

   var newSelectClothes = changeCurentlySelectedClothes(state, newselectorvalue)

   return { ...state, ...newselectorvalue, currentClothesBySelect: newSelectClothes }

}


const updateCartObject = (state, action) => {

   var cart = [];
   if (state.shoppingCart != null) {

      state.shoppingCart.forEach((item, index) => {
         cart.push(item);
      })

      cart.push(action.clothingitem);

   } else {

      cart.push(action.clothingitem);
   }



   return { ...state, shoppingCart: cart }

}


///////////////////////////////////////////////////////
//////////////////////HELPER FUNCTIONS

const getUniqueProperties = (clothes) => {

   var fit = new Set();
   var color = new Set();
   var material = new Set();
   var gender = clothes[0].gender;

   clothes.forEach((value, key) => {

      color.add(value.color);
      fit.add(value.fit);
      material.add(value.material);

   })

   fit = ["any", ...fit];
   color = ["any", ...color];
   material = ["any", ...material];

   return ({ fit, color, material, gender })

}

const getNewSelectorValues = (event) => {

   var key = "current" + event.target.name;
   var value = event.target.value;
   return { [key]: value }
}


const changeCurentlySelectedClothes = (state, newselectorvalue) => {

   var changedselector = Object.keys(newselectorvalue)[0];
   var newSelectClothes = state.currentClothes;
   var newSelectors = {}

   //color
   if (changedselector === "currentcolor") {
      newSelectors.currentcolor = newselectorvalue.currentcolor;
   } else { newSelectors.currentcolor = state.currentcolor }
   //fit
   if (changedselector === "currentfit") {
      newSelectors.currentfit = newselectorvalue.currentfit;
   } else { newSelectors.currentfit = state.currentfit }
   //material
   if (changedselector === "currentmaterial") {
      newSelectors.currentmaterial = newselectorvalue.currentmaterial;
   } else { newSelectors.currentmaterial = state.currentmaterial }


   //filter by color
   if (newSelectors.currentcolor !== "any") {
      newSelectClothes = newSelectClothes.filter(clothing => {
         // console.log("clothing.color", clothing.color)
         // console.log("newSelectors.currentcolor", newSelectors.currentcolor)
         // console.log("color", clothing.color === newSelectors.currentcolor)
         return clothing.color === newSelectors.currentcolor
      });
   }

   //filter by fit  
   if (newSelectors.currentfit !== "any") {
      newSelectClothes = newSelectClothes.filter(clothing => clothing.fit === newSelectors.currentfit);
   }

   //filter by material  
   if (newSelectors.currentmaterial !== "any") {
      newSelectClothes = newSelectClothes.filter(clothing => clothing.material === newSelectors.currentmaterial);
   }

   // console.log("SEL CLOTHES", newSelectClothes)
   //console.log("newselectorvalues", newSelectors);
   return newSelectClothes;


}





export default reducer;