import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NavBar from './components/NavBar'
import Collection from './pages/Collection'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/collections' element={<Home />} />
          <Route path='/collections/:colType' element={<Collection />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App