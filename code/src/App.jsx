import React from 'react'
import NavBar from './components/NavBar'
import MainRoutes from './routes/MainRoutes'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='flex flex-col justify-between h-screen'>
      <NavBar/>
      <MainRoutes/>
      <Footer/>
    </div>
  )
}

export default App