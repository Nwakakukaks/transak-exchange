import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <> 
    <div className="footer">
        <div className="footer_items">
        <div className="contact">
            <form >
                <label >CONTACT SUPPORT</label>
                <div><label htmlFor="name"> Fullname:
                <input type="text" placeholder='Enter fullname' id="name"/>
                </label></div>
              
                <div><label htmlFor="email"> Email:
                 <input type="text" placeholder='Enter email address' id="email"/>
                </label></div>
               
                <div><label htmlFor="name"> Message: 
                  <textarea value='' placeholder='Enter message'/>
                </label></div>
               <button type='submit' onClick={''}>Send </button>
                
            </form>
        </div>
        <div className="links"> 
        <label>Relevant links</label>
            <ul>
                <li>Home</li>
                <li>Transaction History</li>
            </ul>
        </div>
        <div className="address">
          <ul>
             <li>Office address: Owerri Imo state, Nigeria</li>
            <li>Email: transakExchange@gmail.com</li>
            <li>Office hours: Open mon-fri 8:30am - 6pm</li>
            <li>Support lines: +2348064526269, +2349047376826</li>
          </ul>
        </div>
        </div>
        <div className="year"><p>copyright Transak Exchange 2022</p></div>     
    </div>
    
    
    </>
  )
}

export default Footer