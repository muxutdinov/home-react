import React from 'react'
// import  Hooks  from './Hooks'
// import  Old from './Old'
import { Add } from './Add'
import  Navbar  from './Navbar'
import MuviList from './MuviList'
export const App = () => {
  return (
    <div>
      <Navbar/>
      <Add/>
     <MuviList/>
    </div>
  )
}
