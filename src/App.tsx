import Navbar from './components/Navbar'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Projects from './pages/Projects'
import About from './pages/About'
import Footer from './components/Footer'
import Contact from './pages/Contact'
import ScrollTop from './utils/ScrollTop'

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <ScrollTop/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
