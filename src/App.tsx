import Navbar from './components/Navbar'
import Home from './pages/Home'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Projects from './pages/Projects'
import About from './pages/About'
import Footer from './components/Footer'

function App() {

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
