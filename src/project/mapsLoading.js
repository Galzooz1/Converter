import React from 'react';
import Infinity from '../assets/Infinity.gif';
import './css/loading.css';


function MapsLoading(props){
    return(
        <div className="fp-container">
            <img src={Infinity} className="fp-loader" alt="loading" />
        </div>
    )
}

export default MapsLoading