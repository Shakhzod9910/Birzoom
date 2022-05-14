import React, { useState, useEffect } from 'react'
import Features from '../../src/components/HomeComponents/Features'
import Header from '../../src/components/HomeComponents/Header'
import TabSection from '../../src/components/HomeComponents/TabSection'
import Opinions from "../../src/components/HomeComponents/Opinions"
import Invite from "../../src/components/HomeComponents/Invite"
import MainLoader from '../../src/components/Loaders/MainLoader'

const Main = () => {

     const [loading, setLoading] = useState(true)

     useEffect(() => {
          setTimeout(() => setLoading(false), 500)
     }, [])

     return (
          <div className='home'>
               <MainLoader loading={loading} />
               <Header />
               <Features />
               <TabSection />
               <Opinions />
               <Invite />
          </div>
     )
}

export default Main
