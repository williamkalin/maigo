import React from 'react'
import classes from './Mainpage.module.css';
import VideoComponent from '../../components/VideoCompoment/VideoComponent'





const Mainpage = () => {


   return (
      <div className={classes.mainpage}>

         <VideoComponent />
         <div className={classes.maindiv} >
            <h1>
               MAIGO
         </h1>
         </div>


      </div>
   )
}
export default Mainpage;