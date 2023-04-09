import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Header/Navbar'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default App
