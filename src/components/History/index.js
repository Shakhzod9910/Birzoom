import React from 'react'

const History = () => {

     const data = [
          { img: '/assets/images/banners/1.webp', year: '2018', month: 'September', desc: '' },
          { img: '/assets/images/banners/2.webp', year: '2019', month: 'October', desc: '' },
          { img: '/assets/images/banners/3.webp', year: '2020', month: 'December', desc: '' },
          { img: '/assets/images/banners/4.webp', year: '2021', month: 'March', desc: '' },
     ]

     return (
          <section className='history'>
               <div className="container">
                    <div className="main">
                         <h1 className="title title-black">Bizning tarix<span className='text-primary'>.</span></h1>
                         <p className="title-desc">Vivamus varius ornare mollis vitae in donec arcu. Odio nam nascetur ut eget. Amet sed interdum ligula odio arcu faucibus non.</p>
                         <div className="history-grid">
                              {
                                   data.map((item, i) => (
                                        <div className={`history-grid-item ${i % 2 === 0 ? '' : 'reverse'}`} key={i}>
                                             <div className="item-banner">
                                                  <img src={item.img} alt="" />
                                             </div>
                                             <div className="item-info">
                                                  <div className="content">
                                                       <p className="date">
                                                            <span className="month">{item.month}</span>
                                                            <span className="slash">/</span>
                                                            <span className="year">{item.year}</span>
                                                       </p>
                                                       <p className="desc">Vivamus varius ornare mollis vitae in donec arcu. Odio nam nascetur ut eget. Amet sed interdum ligula odio arcu faucibus non ornare mollis vitae in donec .</p>
                                                  </div>
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

export default History
