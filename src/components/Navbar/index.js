import React, { useState, useEffect, useRef } from 'react'
// import { NavLink, Link } from 'react-router-dom'
import Icon from '../Icon'
import Link from "next/link"
import Image from 'next/image'
import Logo from "../../../public/assets/icons/logo.svg"
import { useRouter } from "next/router";
const Navbar = () => {

     const { pathname } = useRouter();
     const [prevScrollPos, setPrevScrollPos] = useState(0);
     const [visible, setVisible] = useState(true);
     const [fixed, setFixed] = useState(false)
     const [height, setHeght] = useState('large')
     const [ active, setActive] = useState("notactive")
     useEffect(() => {
          window.addEventListener('scroll', scrollFunc)
          return () => {
               window.removeEventListener('scroll', scrollFunc)
          }
     }, [prevScrollPos])

     useEffect(()=>{
          if (pathname === "/about-us") {
               setActive("about")
          } else if (pathname === "/blogs") {
               setActive("blogs")
          } else if  (pathname.includes("/tariffs")){
               setActive("tariffs")
          }else{
               setActive("")
          }
       },[pathname])

     const scrollFunc = () => {
          const currentScrollPos = window.pageYOffset;
          if (currentScrollPos > 0) {
               if (currentScrollPos > 100) {
                    setHeght('small')
                    if (currentScrollPos > prevScrollPos) {
                         setVisible(false)
                    } else {
                         setVisible(true)
                         setFixed(true)
                    }

               }
          } else {
               setVisible(true)
               setFixed(false)
               setHeght('large')
          }
          setPrevScrollPos(currentScrollPos);
     };


     return (
          <nav className={`${visible ? 'show' : 'hide'} ${fixed ? 'fix' : ''} ${height} navbar`}>
               <div className="container">
                    <div className="main">
                         <div className="logo">
                              <Link href={'/'}><a><Image src={Logo} alt="" /></a></Link>
                         </div>
                         <div className="links">
                              <Link activeClassName='active' href={'/about-us'}><a className={ active === "about" ? "active": ""}>Biz haqimizda</a></Link>
                              <Link activeClassName='active' href={'/blogs'}><a className={ active === "blogs" ? "active": ""}>Bloglar</a></Link>
                              <Link activeClassName='active' href={'/tariffs'}><a className={ active === "tariffs" ? "active": ""}>Ta‘riflar</a></Link>
                         </div>
                         <div className="buttons">
                              <button className='btn btn-gray'>O‘z <Icon className="icon" icon="arrow-down" /></button>
                              <a href='https://birzoom-app.netlify.app/sign-in' className='btn btn-primary-light'>Kirish</a>
                         </div>
                    </div>
               </div>
          </nav >
     )
}

export default Navbar
