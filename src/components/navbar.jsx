import React from 'react'
import App from '../App'
import Transactions from '../Transactions'
import './navbar.css'

const Navbar = () => {
  return (
    <>
    <div className="header">
        <div className="header_logo">Transak Exchange</div>
        <nav className="header_items">
           <ul>
               <li>Home</li>
               <li>Transactions</li>
           </ul>
        </nav>
    </div>
    
    
    </>
  )
}

export default Navbar