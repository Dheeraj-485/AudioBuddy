import React from 'react'
import "./App.css"


import { CartCard, Header } from './components'
import {Allroutes}  from "./routes/Allroutes"

const App = () => {
  return (
    <div>
      <Header/>
      <Allroutes/>

      {/* <CartCard/> */}
  </div>
  )
}

export default App