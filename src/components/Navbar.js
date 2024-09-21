import React from 'react'
import { Link } from 'react-router-dom';
import { useTheme } from './ThemeContext';

const Navbar = () => {

    const {theme, toggleTheme} = useTheme();
    console.log(theme);

  return (
    <div>
        <nav className='navbar'>
            <ul>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
            </ul>
            <div className='mode-switch'>
                <label>
                    <input type='checkbox' checked={theme === 'dark'} onChange={toggleTheme} />
                    <span className='slider round'></span>
                </label>
            </div>
        </nav>
    </div>
  )
}

export default Navbar