import React from 'react'
import img from '../logo.png';
import './Header.css'


const Header = () => {
    return (
        <>
            <div className='header_wrapper'>
                <img className='header_logo' src={img} alt="" />
                <div className="header_options">
                    <h3>Our Products</h3>
                    <h3>Insights</h3>
                    <h3>Smart Yarn</h3>
                    <h3>About</h3>
                    <h3>Contact</h3>
                </div>
            </div>
        </>
    )
}

export default Header