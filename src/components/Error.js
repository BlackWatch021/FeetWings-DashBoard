import React from 'react'
import { Link } from 'react-router-dom'
import './Error.css'

const Error = () => {
    return (
        <div className='wrapper'>
            <div className="container">
                <h1>ERROR - 404</h1>
                <h2>Head Back</h2>
                <div className="btn">
                    <Link to="/" className='link_btn'>Home</Link>
                    <Link to='dashboard' className='link_btn'>DashBoard</Link>
                </div>
            </div>
        </div>
    )
}

export default Error