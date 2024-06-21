import React from 'react'
import { Outlet } from 'react-router-dom'
import Structure from './components/Layout'
const Layout = () => {
  return (
    <Structure>
      <Outlet />
    </Structure>
  )
}

export default Layout