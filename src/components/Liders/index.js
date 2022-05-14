import React from 'react'
import Image from "next/image"
const Liders = () => {

     const data = [
          { img: '/assets/images/liders/1.webp', name: '', desc: '' },
          { img: '/assets/images/liders/2.webp', name: '', desc: '' },
          { img: '/assets/images/liders/3.webp', name: '', desc: '' },
          { img: '/assets/images/liders/4.webp', name: '', desc: '' },
          { img: '/assets/images/liders/5.webp', name: '', desc: '' },
          { img: '/assets/images/liders/6.webp', name: '', desc: '' },
          { img: '/assets/images/liders/7.webp', name: '', desc: '' },
          { img: '/assets/images/liders/8.webp', name: '', desc: '' },
     ]

     return (
          <section className='liders'>
               <div className="container">
                    <div className="main">
                         <h1 className="title title-black">Bizning Liderlar<span className='text-primary'>.</span></h1>
                         <div className="liders-grid">
                              {
                                   data.map((item, i) => (
                                        <div className='liders-grid-item' key={i}>
                                             <div className="item-img">
                                                  <img src={item.img} alt="" />
                                             </div>
                                             <div className="item-user">
                                                  <p className="user-name">Asilbek Asqarov</p>
                                                  <p className="user-desc">Bu yerda qandaydir uncha uzun bo‘lmagan qisa va yoqimli gap bo‘ladi.</p>
                                             </div>
                                        </div>
                                   ))
                              }
                         </div>
                    </div>
               </div>
          </section>
     )
}

export default Liders
