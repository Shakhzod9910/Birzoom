import React from 'react'
import Icon from '../../Icon'
// import { Link } from 'react-router-dom'

const VideoLessons = () => {
     return (
          <section className='video-lessons' id='video-lessons'>
               <div className="container">
                    <div className="main">
                         <h1 className="title title-white">Videodarslar<span className='text-primary'>.</span></h1>
                         <div className="main-image-wrapper">
                              <img src="/assets/images/5.webp" alt="" />
                         </div>
                         <p className="main-text">Materiallar barchasi bepul</p>
                         <p className="main-desc">Dars jarayonida siz uchun maxsus audiomateriallar va radio kompaniyalarining pullik obunalari bepul taqdim etiladi </p>
                         <div className="overflow-icons">
                              <Icon className="icon" icon="triangle" />
                              <Icon className="icon" icon="recorder" />
                         </div>
                    </div>
               </div>
               <div className="cycle"></div>
          </section>
     )
}

export default VideoLessons
