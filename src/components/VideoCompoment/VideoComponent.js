import React from 'react'
import video from '../../assets/maigovideo.mp4'
import classes from './VideoComponent.module.css'


const VideoComponent = () => {
   return (
      <div className={classes.videocontainer} >
         <video autoPlay={true} className={classes.video} muted loop>
            <source src={video} type="video/mp4"></source>
         </video>
      </div>
   )
}


export default VideoComponent;