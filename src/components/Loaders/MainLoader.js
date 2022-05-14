import React, { useEffect, useState } from 'react'
import { SyncLoader } from 'react-spinners'

const MainLoader = ({ loading }) => {

     const [hide, setHide] = useState(false)

     useEffect(() => {
          if (!loading) {
               setTimeout(() => setHide(true), 300)
          } else {
               setHide(false)
          }
     }, [loading])

     return (
          !hide ? <div className={`main-loader ${loading ? '' : 'hide'}`}>
               <SyncLoader color={'#00afff'} size={25} margin={10} speedMultiplier={0.8} />
          </div> : <div></div>
     )
}

export default MainLoader
