import React, { useState, useEffect } from 'react'
import Header from "../../src/components/Header"
import Liders from "../../src/components/Liders"
import History from "../../src/components/History"
import MainLoader from '../../src/components/Loaders/MainLoader'

const AboutUs = () => {

     const [loading, setLoading] = useState(true)

     useEffect(() => {
          setTimeout(() => setLoading(false), 300)
     }, [])

     return (
          <div className='about-us'>
               <MainLoader loading={loading} />
               <Header />
               <Liders />
               <History />
          </div>
     )
}

export default AboutUs