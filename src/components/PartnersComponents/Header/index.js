import React from 'react'
import scrollToElement from 'scroll-to-element'

const Header = () => {

     const scrollToFunc = () => {
          scrollToElement("#partner-form", {
               offset: 0,
               duration: 500,
               ease: 'linear'
          });
     }

     return (
          <header className='partner-header'>
               <div className="container">
                    <div className="main">
                         <h1 className="title title-black">Jamoangizni o‘qitib beramiz<span className='text-primary'>.</span></h1>
                         <p className="title-desc">Ma’noli qandaydir gap yozing iltimos</p>
                         <img src="/assets/images/partnership/1.webp" alt="" className='banner-image' />
                         <button className="btn btn-primary" onClick={scrollToFunc}>Formani to‘ldirish</button>
                    </div>
               </div>
          </header>
     )
}

export default Header
