import React from 'react'
import Map from './components/Map'
import './main.css';
import PolygonMap from './components/PolygonMap';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import NavBar from './components/NavBar';



function App() {
  return (
    <div className='relative h-screen w-screen bg-gradient-to-tl bg-blue-600 to-black from-blue-300  shadow-inner shadow-black'>
      <Router>

        <NavBar />

        <Routes>
          <Route path="/" element={<Map />} />
          <Route path="/polygon" element={<PolygonMap />} />
        </Routes>
      </Router >



    </div>
  )
}

export default App