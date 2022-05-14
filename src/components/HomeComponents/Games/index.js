import React from 'react'
// import { Link } from 'react-router-dom'
import Icon from '../../Icon'

const Games = () => {
     return (
          <section className='games' id='games'>
               <div className="container">
                    <div className="main">
                         <h1 className="title title-black">Maxsus o‘yinlar<span className='text-primary'>.</span></h1>
                         <div className="main-image-wrapper">
                              <img src="/assets/images/6.webp" alt="" />
                              <div className="child-images">
                                   <img src="/assets/images/7.webp" alt="" />
                                   <img src="/assets/images/8.webp" alt="" />
                                   <img src="/assets/images/9.webp" alt="" />
                              </div>
                         </div>
                         <p className="main-text">Aqlingizni rivojlantiruvchi o‘yinlar</p>
                         <p className="main-desc">Sizni gapirtirib yuboradigan interaktiv o’yin va
                              musobaqalar bilan zeriktirmaymiz</p>
                         <div className="overflow-icons">
                              <Icon className="icon" icon="pockemon" />
                         </div>
                    </div>
               </div>
               <div className="cycle"></div>
          </section>
     )
}

export default Games
