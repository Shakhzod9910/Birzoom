import React from 'react'
// import { Link } from 'react-router-dom'
import Icon from '../../../Components/Icon'

const Lessons = () => {
     return (
          <section className='lessons' id='lessons'>
               <div className="container">
                    <div className="main">
                         <h1 className="title title-black">Maxsus o‘quv darsligi<span className='text-primary'>.</span></h1>
                         <div className="main-image-wrapper">
                              <img src="/assets/images/4.webp" alt="" />
                         </div>
                         <p className="main-text">Kerakli darsliklar</p>
                         <p className="main-desc">Yaxshi va sifatli ta‘lim olishingiz uchun biz sizga
                              o‘zimiz ishlab chiqgan kitoblarni beramiz </p>
                         <div className="overflow-icons">
                              <Icon className="icon" icon="lesson" />
                         </div>
                    </div>
               </div>
               <div className="cycle"></div>
          </section>
     )
}

export default Lessons
