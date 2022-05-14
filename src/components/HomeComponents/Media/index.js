import React from 'react'
// import { Link } from 'react-router-dom'
import Icon from '../../../Components/Icon'

const Media = () => {
     return (
          <section className='media' id='media'>
               <div className="container">
                    <div className="main">
                         <h1 className="title title-white">Audiomaterial va radio<span className='text-primary'>.</span></h1>
                         <div className="main-image-wrapper">
                              <img src="/assets/images/3.webp" alt="" />
                              <div className="btn-wrapper top">
                                   <span className="btn-title">Audio 1.2</span>
                                   <div className="btn-box top">
                                        <div className="btn-play">
                                             <Icon className="icon" icon="play" />
                                        </div>
                                        <Icon className="icon" icon="sound-line-2" />
                                   </div>
                              </div>
                              <div className="btn-wrapper bottom">
                                   <span className="btn-title">Audio 8.2</span>
                                   <div className="btn-box top">
                                        <div className="btn-play">
                                             <Icon className="icon" icon="play" />
                                        </div>
                                        <Icon className="icon" icon="sound-line-2" />
                                   </div>
                              </div>
                         </div>
                         <p className="main-text">Materiallar barchasi bepul</p>
                         <p className="main-desc">Dars jarayonida siz uchun maxsus audiomateriallar va radio kompaniyalarining pullik obunalari bepul taqdim etiladi </p>
                         <div className="overflow-icons">
                              <Icon className="icon " icon="music" />
                              <Icon className="icon overflow-icon" icon="headphone" />
                         </div>
                    </div>
               </div>
               <div className="cycle"></div>
          </section>
     )
}

export default Media
