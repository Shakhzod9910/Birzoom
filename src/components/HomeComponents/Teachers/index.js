import React from 'react'
import Icon from '../../Icon'
// import { Link } from 'react-router-dom'

const Teachers = () => {
     return (
          <section className='teachers' id='teachers'>
               <div className="container">
                    <div className="main">
                         <h1 className="title title-black">Tajribali ustozlar<span className='text-primary'>.</span></h1>
                         <img className='main-image' src="/assets/images/2.webp" alt="" />
                         <p className="main-text">Ustozlarning zo‘ri bizda</p>
                         <p className="main-desc">Siz uchun O‘zbekistondagi eng yaxshi o‘qituvchilar dars berishadi </p>
                         <div className="main-icons">
                              <Icon className="icon" icon="star" />
                              <Icon className="icon" icon="star" />
                              <Icon className="icon" icon="star" />
                              <Icon className="icon" icon="star" />
                              <Icon className="icon" icon="star" />
                         </div>
                    </div>
               </div>
               <div className="cycle"></div>
          </section>
     )
}

export default Teachers
