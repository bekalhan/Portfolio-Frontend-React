import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <div className='Navbar'>
        {/* left side */}
        <div className='navbar-left'>
            <div className='navbar-name'>
                Berat
            </div>
        </div>
        {/* right side */}
        <div className='navbar-opt'>
            <ul>
                <li>Home</li>
                <li>Services</li>
                <li>Experience</li>
                <li>Portfolio</li>
                <li>Testimonial</li>

                <div className='n-button'>
                <button className="navbar-btn">Contact!</button>
            </div>
            </ul>
            
        </div>
    </div>
  )
}

export default Navbar