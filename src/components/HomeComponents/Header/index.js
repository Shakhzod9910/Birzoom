import React, { useState } from 'react'
import Icon from '../../Icon'
import scrollToElement from 'scroll-to-element'
import Modal from "../../Modal"

const Header = () => {

     const [modal, setModal] = useState(false)

     const scrollToFunc = (el) => {
          scrollToElement(el, {
               offset: 0,
               duration: 500,
               ease: 'linear'
          });
     }

     return (
          <header className='header'>
               <div className="container">
                    <div className="main">
                         <div className="cycle-1"></div>
                         <div className="cycle-2"></div>
                         <div className="scroll-down" onClick={() => scrollToFunc("#features")}>
                              <Icon className="icon" icon="arrow-down" />
                         </div>
                         <div className="header-wrapper">
                              <div className="header-left">
                                   <p className="header-left-intro">
                                        tillar akademiyasi
                                   </p>
                                   <h1 className="header-left-title">
                                        Ish bilganga bir tanga <br />
                                        Til bilganga ming tanga<span className='text-primary'>.</span>
                                   </h1>
                                   <p className="header-left-desc">
                                        O’zingiz uchun til organishning tezkor, qiziqarli
                                        va samarali usulini kashf qiling. Ingliz va rus tillarini
                                        istalgan joyda va vaqtda o‘rganing!
                                   </p>
                                   <div className="header-left-buttons">
                                        <button className="btn btn-primary" onClick={() => setModal(true)}>
                                             Kurs sotib olish
                                        </button>
                                        <button className="btn btn-white" onClick={() => scrollToFunc("#invite")}>
                                             Ochiq darsda qatnashish
                                        </button>
                                   </div>
                              </div>
                              <div className="header-right">
                                   <div className="header-right-img">
                                        <div className="header-right-img-top">
                                             <div className="wrapper">
                                                  <div className="wrapper-text">
                                                       <div className="cycle"></div>
                                                       <span className="text">Audio</span>
                                                  </div>
                                                  <Icon className="icon" icon="headphone" />
                                             </div>
                                        </div>
                                        <div className="header-right-img-left">
                                             <p className="title">IELTS</p>
                                             <p className="count">7.0</p>
                                        </div>
                                        <div className="header-right-img-right">
                                             <Icon className="icon" icon="sound-line" />
                                        </div>
                                        <img src="/assets/images/1.webp" alt="" />
                                        <div className="header-right-img-boxes">
                                             <div className="box">
                                                  <Icon className="icon recorder" icon="recorder" />
                                             </div>
                                             <div className="box">
                                                  <Icon className="icon microphone" icon="microphone" />
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>

                    </div>
               </div>
               <Modal modal={modal} setModal={setModal} />
          </header>
     )
}

export default Header
