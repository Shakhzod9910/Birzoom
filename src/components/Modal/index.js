import React, { useState, useEffect } from 'react'
import Icon from '../Icon'
import { useRouter } from 'next/router'

const Modal = ({ modal, setModal }) => {
     const router = useRouter()
     // const history = useHistory()

     const [lang, setLang] = useState('')
     const [status, setStatus] = useState('')

     useEffect(() => {
          if (status) {
               router.push(`/tariffs/${lang}/${status}`)
               setModal(false)
          }
     }, [status])

     useEffect(() => {
          if (modal) {
               setLang('')
               setStatus('')
          }
     }, [modal])

     return (
          <div className={`modal ${modal ? 'show' : ''}`}>
               <div className="modal-wrapper">
                    {
                         lang ?
                              <div className="modal-body">
                                   <div className="top">
                                        <Icon className="icon" icon="arrow-left" onClick={() => setLang('')} />
                                        <Icon className="icon" icon="close" onClick={() => setModal(false)} />
                                   </div>
                                   <p className="title">Qaysi tilni o‘rganishni xohlaysiz?</p>
                                   <ul className="options">
                                        <li onClick={() => setStatus('individual')}>
                                             <Icon className="icon" icon="user" />
                                             <span>Yakka</span>
                                        </li>
                                        <li onClick={() => setStatus('group')}>
                                             <Icon className="icon" icon="users" />
                                             <span>Guruh</span>
                                        </li>
                                   </ul>
                              </div>
                              :
                              <div className="modal-body">
                                   <div className="top">
                                        <div />
                                        <Icon className="icon" icon="close" onClick={() => setModal(false)} />
                                   </div>
                                   <p className="title">Qaysi tilni o‘rganishni xohlaysiz?</p>
                                   <ul className="options">
                                        <li onClick={() => setLang('en')}>
                                             <img src="/assets/images/eng.webp" alt="" />
                                             <span>Ingliz tili</span>
                                        </li>
                                        <li onClick={() => setLang('ru')}>
                                             <img src="/assets/images/ru.webp" alt="" />
                                             <span>Rus tili</span>
                                        </li>
                                   </ul>
                              </div>
                    }
               </div>
          </div>
     )
}

export default Modal
