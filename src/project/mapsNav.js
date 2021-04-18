import React, { useRef } from 'react';
import { Link,useHistory } from "react-router-dom"


function MapsNav(props){
    let searchRef = useRef();
    let history = useHistory();
    const searchCountry = () => { 
        if(searchRef.current.value == ""){
            alert("Please enter Country name!")
        }else{
            // history.push("/country/"+ searchRef.current.value);
            searchRef.current.value = "";
        }
    }
    return(
        <header className="container-fluid bg-dark">
       <nav className="container text-white d-flex align-items-center justify-content-between">
            <div className="row">
                <Link to={"/country/USA"} className="text-decoration-none">USA</Link>
                <Link to={"/country/israel"} className="text-decoration-none">ISRAEL</Link>
                <Link to={"/country/UK"} className="text-decoration-none">UK</Link>
                <Link to={"/country/France"} className="text-decoration-none">FRANCE</Link>
                <Link to={"/country/Thailand"} className="text-decoration-none">THAILAND</Link>
                <Link to={"/country/Japan"} className="text-decoration-none">JAPAN</Link>
                <Link to={"/country/Brazil"} className="text-decoration-none">BRAZIL</Link>
                <Link to={"/country/Ethiopia"} className="text-decoration-none">ETHIOPA</Link>
                <Link to={"/country/China"} className="text-decoration-none">CHINA</Link>
            </div>
            <div className="p-2 d-flex align-items-center">
                <label className="form-label me-2">Search</label>
                <input ref={searchRef} type="text" className="input shadow"/>
            </div>
                <button onClick={searchCountry} className="btn btn-primary ms-1">🔍</button>
        </nav>
        </header>
    )
}

export default MapsNav