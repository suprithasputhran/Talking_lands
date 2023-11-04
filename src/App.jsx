import React from 'react'
import Map from './components/Map'
import './main.css';
import PolygonMap from './components/PolygonMap';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import NavBar from './components/NavBar';



function App() {
  return (
    <div className='relative h-screen w-screen bg-gradient-to-t bg-blue-300 from-white to-transperent  shadow-inner shadow-black'>
      <BrowserRouter>

        <NavBar />

        <Routes>
          <Route path="/" exact element={<Map />} />
          <Route path="polygonmap" element={<PolygonMap />} />
        </Routes>
      </BrowserRouter >



    </div>
  )
}

export default App