import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <div className='h-screen font-Roboto w-56 pl-9 pt-24  bg-blue-400 bg-opacity-50 text-white absolute flex flex-col items-start justify-start gap-10 text-2xl shadow-2xl shadow-black'>
            <NavLink to="/">Multiple Point</NavLink>
            <NavLink to="/polygonmap">Polygon</NavLink>
        </div>
    )
}

export default NavBar