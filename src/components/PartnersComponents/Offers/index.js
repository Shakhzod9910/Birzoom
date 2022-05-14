import React from 'react'

const Offers = () => {
     return (
          <section className='offers'>
               <div className="container">
                    <div className="main">
                         <h1 className="title title-black">Nimalarni taklif etamiz<span className='text-primary'>.</span></h1>
                         <p className="title-desc">Ma’noli qandaydir gap yozing iltimos</p>

                         <div className="offers-grid">

                              <div className={`offers-grid-item`}>
                                   <div className="item-banner">
                                        <img src='/assets/images/partnership/2.webp' alt="" />
                                   </div>
                                   <div className="item-info">
                                        <div className="content">
                                             <p className="title">Kelishilgan narx</p>
                                             <p className="desc">Vivamus varius ornare mollis vitae in donec arcu. Odio nam nascetur ut eget. Amet sed interdum ligula odio arcu faucibus non ornare mollis vitae in donec.</p>
                                        </div>
                                   </div>
                              </div>

                              <div className={`offers-grid-item`}>
                                   <div className="item-banner">
                                        <img src='/assets/images/partnership/3.webp' alt="" />
                                   </div>
                                   <div className="item-info">
                                        <div className="content">
                                             <p className="title">Uydan o‘rganasiz</p>
                                             <p className="desc">Vivamus varius ornare mollis vitae in donec arcu. Odio nam nascetur ut eget. Amet sed interdum ligula odio arcu faucibus non ornare mollis vitae in donec.</p>
                                        </div>
                                   </div>
                              </div>

                              <div className={`offers-grid-item`}>
                                   <div className="item-banner">
                                        <img src='/assets/images/partnership/4.webp' alt="" />
                                   </div>
                                   <div className="item-info">
                                        <div className="content">
                                             <p className="title">Ajoyib o‘qituvchilar</p>
                                             <p className="desc">Vivamus varius ornare mollis vitae in donec arcu. Odio nam nascetur ut eget. Amet sed interdum ligula odio arcu faucibus non ornare mollis vitae in donec.</p>
                                        </div>
                                   </div>
                              </div>

                         </div>

                         <h1 className="title title-black">Bizning hamkorlar<span className='text-primary'>.</span></h1>
                         <p className="title-desc partners">Tillarni tez va qulay o‘rganishingiz uchun biz sizga ushbu
                              joyda foydali bo‘lgan yangiliklarni ulashib boramiz</p>

                         <div className="partners-grid">
                              <img src="/assets/images/partnership/5.webp" alt="" />
                              <img src="/assets/images/partnership/6.webp" alt="" />
                              <img src="/assets/images/partnership/5.webp" alt="" />
                              <img src="/assets/images/partnership/6.webp" alt="" />
                              <img src="/assets/images/partnership/5.webp" alt="" />
                              <img src="/assets/images/partnership/6.webp" alt="" />
                         </div>

                    </div>
               </div>
          </section>
     )
}

export default Offers
