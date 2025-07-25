import React from 'react'
import NavBar from './components/NavBar'
import { Route, Routes, useLocation } from 'react-router-dom'
import Home from './pages/Home'
import {Toaster} from "react-hot-toast"
const App = () => {

    const isSellerPath = useLocation().pathname.includes("seller")
  console.log(isSellerPath)
  return (
    <div>
      {isSellerPath ? null : <NavBar />}
      <Toaster />
      <div className={`${isSellerPath} ? "" : "px-6 md:px-16 lg:px-24 xl:px-32"`}>
        <Routes>
          <Route path='/' element={<Home />} /> 
        </Routes>
      </div>
    </div>
  )
}

export default App
