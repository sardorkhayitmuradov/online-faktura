import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './Home.css'

const Home = () => {
  return (
    <div className="wrapper">
      <Sidebar />
      <Outlet />
    </div>
  )
}

export default Home