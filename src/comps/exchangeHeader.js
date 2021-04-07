import React from 'react';
import './css/header.css';


function ExchangeApp(props){
    return(
        <header className="bg-dark">
           <h1 className="text-info display-6">Wave Currency Converter App </h1>
           <nav>
               <a href="#">Home</a> | 
               <a href="#">Contact</a>
           </nav>
        </header>
    )
}

export default ExchangeApp