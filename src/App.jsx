import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'

import Header from './components/Header'
import Product from './components/Product'
import Footer from './components/Footer'
import More_info from './components/More_info'
import Info from './components/Info'

function App() {
  

  return (
    <>
       <Header/> 
       <Product/> 
       <More_info/>
       <Info/>
       <Footer/> 
    </>
  )
}

export default App
