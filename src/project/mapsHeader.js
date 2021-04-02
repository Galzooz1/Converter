import React from 'react';
import './css/header.css';


function MapsHeader(props){
    return(
        <header className="bg-dark">
           <h1 className="text-info">Wave Countries App </h1>
           <nav>
               <a href="#">Home</a> | 
               <a href="#">Contact</a>
           </nav>
        </header>
    )
}

export default MapsHeader