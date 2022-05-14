import React, { useEffect, useState } from 'react'
import Comforts from '../../src/components/OurTeam/Comforts'
import Form from '../../src/components/OurTeam/Form'
import Results from '../../src/components/OurTeam/Results'
import Header from '../../src/components/OurTeam/Header'
import MainLoader from '../../src/components/Loaders/MainLoader'

const JoinUs = () => {

     const [loading, setLoading] = useState(true)

     useEffect(() => {
          setTimeout(() => setLoading(false), 300)
     }, [])

     return (
          <div className=''>
               <MainLoader loading={loading} />
               <Header />
               <Results />
               <Comforts />
               <Form />
          </div>
     )
}

export default JoinUs