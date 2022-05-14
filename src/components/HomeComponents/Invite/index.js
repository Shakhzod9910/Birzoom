import React from 'react'

const Invite = () => {
     return (
          <section className='invite' id="invite">
               <div className="container">
                    <div className="main">
                         <img src="/assets/icons/lesson.svg" alt="" className="overflow-img img-1" />
                         <img src="/assets/icons/laptop.svg" alt="" className="overflow-img img-2" />
                         <div className="invite-left">
                              <h2 className="invite-left-title">Bepul ochiq darsga qatnashing<span className='text-primary'>.</span></h2>
                              <p className="invite-left-desc">Bepul darsimizda qatnashib ko’ring, sizga yoqsa o’quvchimizga aylanishingiz mumkin!</p>
                         </div>
                         <form className="invite-right">
                              <div className="form-input">
                                   <input type="text" placeholder='Ism va familiyangiz' required title="Iltimos ism sharifingizni kiriting" />
                              </div>
                              <div className="form-input phone">
                                   <input type="tel" placeholder='(__)-___-__-__' required />
                                   <span>+998</span>
                              </div>
                              <button className="btn btn-primary">
                                   Ochiq darsda qatnashish
                              </button>
                         </form>
                    </div>
               </div>
          </section>
     )
}

export default Invite
