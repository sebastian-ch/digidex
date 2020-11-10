import React from 'react'
import logo from './digimon_logo.png'

console.log(logo);


function Header() {
    return <div className='header'><img src={logo} className='logo' alt="Digimon Logo" /></div>
}

export default Header;