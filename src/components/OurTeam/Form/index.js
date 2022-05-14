import React from 'react'

const Form = () => {

     return (
          <section className='team-form' id='team-form'>
               <div className="container">
                    <div className="main">
                         <form className="form">
                              <p className="form-title">Online ta’lim bering<span className='text-primary'>.</span></p>
                              <p className="form-desc">Bu yerda qisqa va ajoyib matn bo‘ladi</p>

                              <div className="form-input phone">
                                   <input type="tel" placeholder='(__)-___-__-__' required />
                                   <span>+998</span>
                              </div>

                              <div className="form-input">
                                   <input type="email" placeholder='Emailingizni kiriting' required />
                              </div>

                              <button className="btn btn-primary">
                                   Yuborish
                              </button>
                              <p className="form-footer">
                                   Qandaydir <span className='text-primary'>mahfiylik</span> sozlamali yoki shunga o‘xshagan textlar.
                              </p>
                         </form>
                    </div>
               </div>
          </section>
     )
}

export default Form
