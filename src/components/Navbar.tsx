import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import dan from '../assets/web-dan.png';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if(currentScrollY > lastScrollY){
        setShowNavbar(false);
      }else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  },[lastScrollY]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';

    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setMenuOpen(false);
        document.body.style.overflow = '';
      }
    };

    window.addEventListener('resize', handleResize);

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
    <header className='flex justify-between items-center'>
      <div className={`fixed top-0 left-0 flex justify-between w-full mt-6 px-5 transition-transform duration-300 z-50 text-sm md:justify-between md:text-base
        ${showNavbar ? "translate-y-0" : "-translate-y-28"}
      `}>
        <div className='flex items-center'>
          <Link to="/" className='header_logo'>
            <h1 className=''>DANIEL FLORES</h1>
          </Link>
          <nav className='hidden md:flex justify-start items-center ml-7 lg:ml-32'>
            <Link to="/projects">SELECTED PROJECTS</Link>
            <Link className='ml-10' to="/about">ABOUT ME</Link> 
          </nav>
        </div>
        <div className='md:flex'>
          <Link className='hidden md:block md:mr-10' to="Daniel_Flores_CV_EN.pdf" target='_blank' rel='noopener noreferrer'>MY RESUME ↱ </Link>
          <Link className='ml-auto md:ml-0' to="/contact">WORK WITH ME ↱</Link>
        </div>
      </div>

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
          className={`menu_toggle appearance-none [&::-webkit-details-marker]:hidden md:hidden transition-all duration-300 ease-in-out
            ${menuOpen ? 'border-4 border-[var(--green-phosphor)]':'border-0'}
          `}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24}/>}
        </button>

        {menuOpen && (
          <nav className='mobile_nav flex flex-col justify-evenly w-80 sm:w-[30rem] [top:-480px] sm:[top:-490px]'>
            <header className='flex justify-around w-1/2 text-xs sm:justify-start'>
              <Link to="https://www.linkedin.com/in/danielfloca/">LI ↱</Link>
              <Link className='sm:ml-3' to="https://github.com/Devnielote">GH ↱</Link>
            </header>
            <section className='flex flex-col items-center w-full mt-10'>
              <img src={dan} alt="Pixelated image of myself" className='w-2/6 rounded-full mb-5'/>
              <h1>Daniel Flores</h1>
              <span className='mt-1 text-xs text-[var(--dark-green)]'>Frontend Developer</span>
            </section>
            <section className='flex flex-col px-5 py-4 mt-10 border-y border-[var(--dark-green)] sm:mt-2'>
              <div className='flex items-center text-md'>
                <Link to="/projects" onClick={() => setMenuOpen(false)} className='flex justify-between w-full'>Selected projects<span className='text-[var(--green-phosphor)]'>▷</span></Link>
              </div>
              <div className='flex items-center mt-4 pt-2 border-t border-[var(--dark-green)] text-md'>
                <Link className='flex justify-between w-full' to="/about" onClick={() => setMenuOpen(false)}>About me<span className='text-[var(--green-phosphor)]'>▷</span></Link>
              </div>
            </section>
            <div className='flex mb-2 mx-auto mt-5 pb-5 text-xs'>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>WORK WITH ME</Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
