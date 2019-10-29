import React, { useEffect } from 'react'
import classes from './Logo.module.css'
import { Link } from 'react-router-dom'



const Logo = () => {


   useEffect(() => {


   }, []);


   return (
      <Link className={classes.logo}
         to="/">
         MAIGO
         {/* FIX this should link to the main page */}
      </Link>
   )
}


export default Logo;