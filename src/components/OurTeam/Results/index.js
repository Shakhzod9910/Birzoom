import React from 'react'
import Icon from '../../Icon';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const Results = () => {

     const { ref, inView } = useInView()

     return (
          <section className="results">
               <div className="container">
                    <div className="main">
                         <h1 className="title title-black">Nega aynan biz<span className='text-primary'>.</span></h1>
                         <p className="title-desc">Ta’lim berishingiz uchun bizda yetarlicha sabablar bor</p>
                         <div className="feature-boxes">

                              <div className="feature-boxes-box">
                                   <div className="head-box">
                                        <div className="icon-wrapper">
                                             <Icon className="icon" icon="star-o" />
                                             <Icon className="icon" icon="comfort" />
                                        </div>
                                        <h2 className="head-title">
                                             Istalgan vaqt va joy
                                        </h2>
                                   </div>
                                   <p className="desc">
                                        Sem justo, sollicitudin donec consequat gravida. At ac feugiat diam libero id. Mauris ac turpis ut lacus et aenean orci adipiscing accumsan. Faucibus purus.
                                   </p>
                              </div>

                              <div className="feature-boxes-box">
                                   <div className="head-box">
                                        <div className="icon-wrapper">
                                             <Icon className="icon" icon="star-o" />
                                             <Icon className="icon" icon="comfort" />
                                        </div>
                                        <h2 className="head-title">
                                             Narxni siz belgilaysiz
                                        </h2>
                                   </div>
                                   <p className="desc">
                                        Commodo enim, netus vitae, vel porttitor quisque pharetra vitae sit. Porta sit eget orci et viverra nibh. Consequat fermentum sed sed facilisi tellus lectus.
                                   </p>
                              </div>

                              <div className="feature-boxes-box">
                                   <div className="head-box">
                                        <div className="icon-wrapper">
                                             <Icon className="icon" icon="star-o" />
                                             <Icon className="icon" icon="comfort" />
                                        </div>
                                        <h2 className="head-title">
                                             Shaxsiy o‘sish
                                        </h2>
                                   </div>
                                   <p className="desc">
                                        Vitae tortor neque vulputate sed sed. Ipsum aliquet ac sed facilisis dis ullamcorper. Enim morbi leo vel vitae amet diam enim elit vestibulum aliquet.
                                   </p>
                              </div>

                         </div>


                         <h1 className="title title-black">Natijalarimiz gapirsin<span className='text-primary'>.</span></h1>
                         <p className="title-desc">Ta’lim berishingiz uchun bizda yetarlicha sabablar bor</p>

                         <div className="results" ref={ref}>
                              <div className="results-box">
                                   <span>Darslar soni:</span>
                                   <span><CountUp separator=" " start={inView} end={500} duration={2} />+</span>
                              </div>
                              <div className="results-box">
                                   <span>O‘quvchilar soni:</span>
                                   <span><CountUp separator=" " start={inView} end={14000} duration={2} />+</span>
                              </div>
                              <div className="results-box">
                                   <span>IETS soni:</span>
                                   <span><CountUp separator=" " start={inView} end={250} duration={2} />+</span>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     )
}

export default Results
