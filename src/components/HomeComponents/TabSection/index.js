import React, { useEffect, useState } from 'react'
import Games from '../Games'
import Lessons from '../Lessons'
import Media from '../Media'
import Teachers from '../Teachers'
import VideoLessons from "../VideoLessons"
import Icon from '../../Icon'
import scrollToElement from 'scroll-to-element'

const TabSection = () => {

     const [current, setCurrent] = useState('teachers')



     useEffect(() => {
          window.scrollTo(0, 0)

          const scrollFunc = () => {
               setHashElement()
          }
          window.addEventListener('scroll', scrollFunc)
          return () => {
               window.removeEventListener('scroll', scrollFunc)
          }
     }, [])

     const setHashElement = () => {
          const tabs = document.getElementById('tabs')
          const windowY = window.scrollY

          const teachers = document.getElementById('teachers').offsetTop + tabs.offsetTop
          const media = document.getElementById('media').offsetTop + tabs.offsetTop
          const lessons = document.getElementById('lessons').offsetTop + tabs.offsetTop
          const videoLessons = document.getElementById('video-lessons').offsetTop + tabs.offsetTop
          const games = document.getElementById('games').offsetTop + tabs.offsetTop
          const summ = tabs.offsetHeight + tabs.offsetTop

          if (summ > windowY) {
               if (windowY >= games) {
                    setCurrent('games')
               } else if (windowY >= videoLessons) {
                    setCurrent('video-lessons')
               } else if (windowY >= lessons) {
                    setCurrent('lessons')
               } else if (windowY >= media) {
                    setCurrent('media')
               } else if (windowY >= teachers) {
                    setCurrent('teachers')
               }
          }
     }

     const scrollToFunc = (el) => {
          scrollToElement(`#${el}`, {
               offset: 0,
               duration: 500,
               ease: 'linear'
          });
          setCurrent(el)
     }

     return (
          <div className='tab-section' id="tabs">
               <div className="tabs">
                    <div className="tabs-wrapper">
                         <div className="container">
                              <ul className="tabs-menu">
                                   <li className={`${current === "media" ? 'active' : ''}`} >
                                        <Icon className="icon" icon="graduate" />O‘qituvchilar
                                   </li>
                                   <li onClick={() => scrollToFunc('media')} className={`${current === "media" ? 'active' : ''}`}>
                                        <Icon className="icon" icon="headphone" />Audiomaterial
                                   </li>
                                   <li onClick={() => scrollToFunc('lessons')} className={`${current === "lessons" ? 'active' : ''}`}>
                                        <Icon className="icon" icon="lesson" />Darsliklar
                                   </li>
                                   <li onClick={() => scrollToFunc('video-lessons')} className={`${current === "video-lessons" ? 'active' : ''}`}>
                                        <Icon className="icon" icon="youtube" />Videodarslar
                                   </li>
                                   <li onClick={() => scrollToFunc('games')} className={`${current === "games" ? 'active' : ''}`}>
                                        <Icon className="icon" icon="game-play" />O‘yinlar
                                   </li>
                              </ul>
                         </div>
                    </div>
               </div>
               <Teachers />
               <Media />
               <Lessons />
               <VideoLessons />
               <Games />
          </div>
     )
}

export default TabSection
