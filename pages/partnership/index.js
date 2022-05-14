import React, { useEffect, useState } from 'react'
import Header from "../../src/components/PartnersComponents/Header"
import Offers from "../../src/components/PartnersComponents/Offers"
import Form from "../../src/components/PartnersComponents/Form"
import MainLoader from '../../src/components/Loaders/MainLoader'

const Partnership = () => {

     const [loading, setLoading] = useState(true)

     useEffect(() => {
          setTimeout(() => setLoading(false), 300)
     }, [])

     return (
          <div className='partnership'>
               <MainLoader loading={loading} />
               <Header />
               <Offers />
               <Form />
          </div>
     )
}

export default Partnership
