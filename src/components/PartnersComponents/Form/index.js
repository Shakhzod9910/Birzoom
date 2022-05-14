import React from 'react'

const Form = () => {
     return (
          <section className='partner-form' id="partner-form">
               <div className="container">
                    <div className="main">
                         <h1 className="title title-black">Bunga tayyormisiz<span className='text-primary'>?</span></h1>
                         <p className="title-desc">Agar javobingiz ha bo‘lsa ushbu formani to‘ldiring</p>

                         <div className="partner-grid">
                              <div className="banner">
                                   <img src='/assets/images/partnership/7.webp' alt="" />
                              </div>
                              <form action="" className="form">

                                   <div className="top">
                                        <p className="form-title">Asosiy ma’lumotlar</p>
                                        <div className="form-input">
                                             <input type="text" placeholder='Ism va familiyangiz' required />
                                        </div>
                                        <div className="form-grid">
                                             <div className="form-input phone">
                                                  <input type="tel" placeholder='(__)-___-__-__' required />
                                                  <span>+998</span>
                                             </div>
                                             <div className="form-input">
                                                  <input type="email" placeholder='Emailingiz' required />
                                             </div>
                                        </div>
                                   </div>

                                   <div className="bottom">
                                        <p className="form-title">Qo‘shimcha ma’lumotlar</p>

                                        <div className="form-grid">
                                             <div className="form-input">
                                                  <input type="text" placeholder='O‘quvchilar soni' required />
                                             </div>
                                             <div className="form-input">
                                                  <input type="text" placeholder='Tilni tanlang' required />
                                             </div>
                                        </div>

                                        <div className="form-input">
                                             <textarea type="text" placeholder='Qanday savollaringiz bor?' />
                                        </div>

                                   </div>

                                   <button className="btn btn-primary">
                                        Ma’lumotlarni yuborish
                                   </button>
                              </form>
                         </div>
                    </div>
               </div>
          </section>
     )
}

export default Form
