import React from 'react'
import { Outlet } from 'react-router'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

function Root() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default Root