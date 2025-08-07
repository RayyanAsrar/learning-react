import './index.css'
import Header from './components/header/header'
import Home from './components/Home/Home'
import Footer from './components/footer/footer'
import { Outlet } from 'react-router-dom'
function App() {
  

  return (
    <>
      <Header/>
      <Home/>
      <Footer/>
    </>
  )
}

export default App
