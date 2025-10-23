import React from 'react'
import { Outlet } from 'react-router'
import Navbar from '../shared/Navbar'
import Footer from '../shared/Footer'

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-urban-noise">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 md:px-6 lg:px-8 py-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
