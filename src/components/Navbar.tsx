import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import dan from '../assets/web-dan.png';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if(menuOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }

    return() => {
      document.body.classList.remove('overflow-hidden');
    }
  }, [menuOpen])

  return (
    <header className='flex justify-between items-center '>
      <Link to="/home" className='header_logo'>
        <h1 className='text-xs'>DANIEL FLORES</h1>
      </Link>
      <nav className='hidden sm:flex justify-around items-center w-1/2'>
        <Link to="/projects">SELECTED PROJECTS</Link>
        <Link to="/about">ABOUT ME</Link> 
      </nav>

      <div className='fixed left-1/2 translate-x-[-50%] bottom-5 z-50 md:hidden
            transition-all 
            duration-500 
            ease-out
            opacity-0 
            translate-y-2 
            animate-fade-in-up'
        >
        <div className='menu_overlay'></div>
        <button 
          className={`menu_toggle md:hidden transition-all duration-300 ease-in-out
            ${menuOpen ? 'border-4 border-[var(--green-phosphor)]':'border-0'}
          `}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24}/>}
        </button>

        {menuOpen && (
          <nav className='mobile_nav flex flex-col justify-around w-64 h-96 sm:w-[25rem] sm:h-[25rem] sm:[top:-450px]'>
            <header className='flex justify-around w-1/2'>
              <Link to="/home">LI ↱</Link>
              <Link to="/home">GH ↱</Link>
            </header>
            <section className='flex flex-col items-center w-full'>
              <img src={dan} alt="Pixelated image of myself" className='w-2/6 rounded-full mb-5'/>
              <h1>Daniel Flores</h1>
              <span className='text-xs text-[var(--dark-green)]'>Frontend Developer</span>
            </section>
            <section className='flex flex-col pl-5 text-left'>
              <Link to="/projects" onClick={() => setMenuOpen(false)}>Select projects</Link>
              <Link className='mt-2' to="/about" onClick={() => setMenuOpen(false)}>About me</Link>
            </section>
          </nav>
        )}
      </div>
    </header>
  )
}
