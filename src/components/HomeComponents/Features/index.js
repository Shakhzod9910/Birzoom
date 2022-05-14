import React from 'react'
import Icon from '../../Icon'

const Features = () => {
     return (
          <section className='features' id="features">
               <div className="container">
                    <div className="main">
                         <h1 className="title title-black">Bizning Afzalliklar<span className='text-primary'>.</span></h1>
                         <div className="feature-boxes">

                              <div className="feature-boxes-box">
                                   <div className="head-box">
                                        <div className="icon-wrapper">
                                             <Icon className="icon" icon="star-o" />
                                             <Icon className="icon" icon="comfort" />
                                        </div>
                                        <h2 className="head-title">
                                             Qulaylik
                                        </h2>
                                   </div>
                                   <p className="desc">
                                        Dui dictum elit neque tellus, sit pretium. A eleifend amet, arcu, fermentum sed ultrices commodo. Viverra ante quisque faucibus placerat arcu.
                                   </p>
                              </div>

                              <div className="feature-boxes-box">
                                   <div className="head-box">
                                        <div className="icon-wrapper">
                                             <Icon className="icon" icon="star-o" />
                                             <Icon className="icon" icon="result" />
                                        </div>
                                        <h2 className="head-title">
                                             Tezkor natija
                                        </h2>
                                   </div>
                                   <p className="desc">
                                        At duis enim non, sit auctor penatibus morbi enim magnis. Et amet, condimentum velit interdum integer. Viverra ut tortor arcu.
                                   </p>
                              </div>

                              <div className="feature-boxes-box">
                                   <div className="head-box">
                                        <div className="icon-wrapper">
                                             <Icon className="icon" icon="star-o" />
                                             <Icon className="icon" icon="opportunity" />
                                        </div>
                                        <h2 className="head-title">
                                             Keng imkoniyatlar
                                        </h2>
                                   </div>
                                   <p className="desc">
                                        Eu integer hendrerit felis mattis laoreet lorem et. Vestibulum, nisi, egestas libero sed maecenas maecenas ultrices. Orci faucibus dignissim cras elit.
                                   </p>
                              </div>

                         </div>
                    </div>
               </div>
          </section>
     )
}

export default Features
