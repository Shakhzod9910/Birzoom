import React, { useEffect, useState } from 'react'
import MainLoader from '../../src/components/Loaders/MainLoader'

const Blogs = () => {


     const data = [
          { img: '/assets/images/blogs/6.webp' },
          { img: '/assets/images/blogs/7.webp' },
          { img: '/assets/images/blogs/8.webp' },
          { img: '/assets/images/blogs/9.webp' },
          { img: '/assets/images/blogs/10.webp' },
          { img: '/assets/images/blogs/11.webp' },
          { img: '/assets/images/blogs/12.webp' },
          { img: '/assets/images/blogs/13.webp' },
          { img: '/assets/images/blogs/6.webp' },
          { img: '/assets/images/blogs/7.webp' },
          { img: '/assets/images/blogs/8.webp' },
          { img: '/assets/images/blogs/9.webp' },
          { img: '/assets/images/blogs/10.webp' },
          { img: '/assets/images/blogs/11.webp' },
          { img: '/assets/images/blogs/12.webp' },
          { img: '/assets/images/blogs/13.webp' },
     ]

     const [loading, setLoading] = useState(true)

     useEffect(() => {
          setTimeout(() => setLoading(false), 300)
     }, [])

     return (
          <section className='blogs'>
               <MainLoader loading={loading} />
               <div className="container">
                    <div className="main">
                         <h1 className="title title-black">Blog<span className='text-primary'>.</span></h1>
                         <p className="title-desc">Tillarni tez va qulay o‘rganishingiz uchun biz sizga ushbu joyda foydali bo‘lgan yangiliklarni ulashib boramiz</p>
                         <div className="head-grid">
                         </div>
                         <div className="body-grid">
                              {
                                   data.map((item, i) => (
                                        <div className='item-grid' key={i}>
                                             <div className="img">
                                                  <img src={item.img} alt="" />
                                             </div>
                                             <div className="info">
                                                  <p className="info-date">San’at  / 12.02.2020</p>
                                                  <p className="info-title">Muhimlik darajasiga etibor qarating</p>
                                                  <p className="info-desc">Bu yerda qandaydir uncha uzun bo‘lmagan qisa va yoqimli gap bo‘ladi.</p>
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

export default Blogs
