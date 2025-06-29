import { React } from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className='flex justify-between items-center '>
      <Link to="/home" className='header_logo'>
        <h1 className='text-xs'>DANIEL FLORES</h1>
      </Link>
      <nav className='hidden sm:flex justify-around items-center w-1/2'>
        <Link to="/projects">Selected Projects</Link>
        <Link to="/about">About Me</Link>
      </nav>
    </header>
  )
}
