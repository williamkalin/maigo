import React from 'react'
import video from '../../assets/maigovideo.mp4'
import classes from './VideoComponent.module.css'


const VideoComponent = () => {

   const divStyle = {
      "position": "absolute",
      "top": "0",
      "width": "100%",
      "height": "100%",
      "zIndex": "-1000",
   }

   return (
      <div style={divStyle} >
         <video autoPlay={true} className={classes.video} muted loop>
            <source src={video} type="video/mp4"></source>
         </video>
      </div>
   )
}


export default VideoComponent;