import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { checkAuth } from './checkAuth'

const Layout = (props) => {
  
  return (
    <>
    <Header/>
    {props.children}
    </>
  )
}

export default Layout