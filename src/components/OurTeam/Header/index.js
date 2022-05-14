import React from 'react'
import scrollToElement from 'scroll-to-element'

const Header = () => {

     const scrollToFunc = () => {
          scrollToElement('#team-form', {
               offset: 0,
               duration: 500,
               ease: 'linear'
          });
     }

     return (
          <header className='team-header'>
               <div className="container">
                    <div className="main">
                         <h1 className="title title-black">Bizning jamoamizga qo‘shiling<span className='text-primary'>.</span></h1>
                         <p className="title-desc">Ta’lim berishingiz uchun bizda yetarlicha sabablar bor</p>
                         <button onClick={scrollToFunc} className="btn btn-primary">Formani to‘ldirish</button>
                         <div className="images">
                              <img src="/assets/images/team/1.webp" alt="" />
                              <img src="/assets/images/team/2.webp" alt="" />
                              <img src="/assets/images/team/3.webp" alt="" />
                              <img src="/assets/images/team/4.webp" alt="" />
                              <img src="/assets/images/team/5.webp" alt="" />
                              <img src="/assets/images/team/6.webp" alt="" />
                              <img src="/assets/images/team/7.webp" alt="" />
                              <img src="/assets/images/team/8.webp" alt="" />
                              <img src="/assets/images/team/9.webp" alt="" />
                              <img src="/assets/images/team/10.webp" alt="" />
                              <img src="/assets/images/team/11.webp" alt="" />
                              <img src="/assets/images/team/12.webp" alt="" />
                         </div>
                    </div>
               </div>
          </header>
     )
}

export default Header
