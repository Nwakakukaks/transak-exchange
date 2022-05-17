import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Card from './components/card';
import Home from './components/home';
import Transactions from './Transactions';

export const App = () => {
  return <>
  <body>
    <div className="container">
   <Navbar/>
   <Home/>
   <Card/>
   <Transactions/>
   <Footer/>
   </div>
  </body>
  
  </>

}



export default App;
