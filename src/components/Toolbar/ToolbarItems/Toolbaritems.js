import React from 'react'
import { NavLink, withRouter } from 'react-router-dom';
import classes from './Toolbaritems.module.css';
import { connect } from 'react-redux';


const Toolbaritems = (props) => {


   const { uniquelinks } = props;

   var menlinks = <></>;
   var womenlinks = <></>;

   if (uniquelinks) {

      menlinks = uniquelinks.men.map((category, index) => (
         <li key={index}>
            <NavLink
               to={`/men/${category}`}
               className={classes.dropdowncontentlink}
               activeClassName={classes.active}>
               {category}
            </NavLink>
         </li>))

      womenlinks = uniquelinks.women.map((category, index) => (
         <li key={index} >
            <NavLink
               to={`/women/${category}`}
               className={classes.dropdowncontentlink}
               activeClassName={classes.active}>
               {category}
            </NavLink>
         </li >
      ))



   }

   var navigationitems = classes.navigationitems;
   var dropdowncontent = classes.dropdowncontent;


   if (props.sidedrawer) {
      navigationitems = classes.navigationitemssidedrawer;
      dropdowncontent = classes.dropdowncontentsidedrawer;
   }


   return (
      <ul className={navigationitems}>
         <li>
            <NavLink
               to="/men/men"
               activeClassName={classes.active}
               className={props.location.pathname.split("/")[1] === "men" ? classes.navigationitem : ""}
            >
               MEN
             </NavLink>
            <ul className={dropdowncontent}>
               {/* !!! the men and women categories will not be loaded on the first render cycle which will probably make us need to extract this code and insert it conditionally */}
               {
                  menlinks
               }
            </ul>
         </li>
         <li>
            <NavLink
               to="/women/women"
               activeClassName={classes.active}
               className={props.location.pathname.split("/")[1] === "women" ? classes.navigationitem : ""}>
               WOMEN
      </NavLink>
            <ul className={dropdowncontent}>
               {
                  womenlinks
               }
            </ul>
         </li>
      </ul >
   )
}



const mapStateToProps = state => {
   return {
      uniquelinks: state.clothes.uniqueLinks
   }

}



export default connect(mapStateToProps, null)(withRouter(Toolbaritems));

// we need to consume our state here to see what sections both women and men have and then set the dropdown to those, this will happen automatically if we jsut use a Effect hook in the APP.js
