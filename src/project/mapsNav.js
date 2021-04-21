import { Button, ButtonGroup } from '@material-ui/core';
import React, { useRef } from 'react';
import { Link,useHistory } from "react-router-dom"


function MapsNav(props){
    let searchRef = useRef();
    let history = useHistory();
    const searchCountry = () => {
        if(searchRef.current.value == ""){
            alert("Please enter Country name!")
        }else{
            history.push("/country/"+ searchRef.current.value);
            searchRef.current.value = "";
        }
    }
    const searchEnter = (e) => { 
        if(e.key === 'Enter'){
            searchCountry();
        }
    }
    return(
        <header className="container-fluid bg-dark">
       <div className="container text-white d-flex align-items-center justify-content-around">
           <h1 className="text-info">Wave Country App</h1>

            <div className="p-2 d-flex align-items-center">
                <label className="form-label m-1">Search</label>
                <input ref={searchRef} onKeyUp={searchEnter} type="text" className="input shadow" placeholder="Search..."/>
                <button onClick={searchCountry} className="btn btn-primary ms-1">🔍</button>
            </div>
        </div>
            <nav className="container-fluid bg-dark rounded-3 d-flex justify-content-center col-lg-6 mt-3 pb-2">
            <div className="d-flex justify-content-between">
                <ButtonGroup size="large" variant="text" color="secondary" aria-label="large secondary button group">
                <Button><Link to={"/country/USA"} className="text-decoration-none text-reset">USA</Link></Button>
                <Button><Link to={"/country/israel"} className="text-decoration-none text-reset">ISRAEL</Link></Button>
                <Button><Link to={"/country/UK"} className="text-decoration-none text-reset">UK</Link></Button>
                <Button><Link to={"/country/France"} className="text-decoration-none text-reset">FRANCE</Link></Button>
                <Button><Link to={"/country/Thailand"} className="text-decoration-none text-reset">THAILAND</Link></Button>
                <Button><Link to={"/country/Japan"} className="text-decoration-none text-reset">JAPAN</Link></Button>
                <Button><Link to={"/country/Brazil"} className="text-decoration-none text-reset">BRAZIL</Link></Button>
                <Button><Link to={"/country/Ethiopia"} className="text-decoration-none text-reset">ETHIOPA</Link></Button>
                <Button><Link to={"/country/China"} className="text-decoration-none text-reset">CHINA</Link></Button>
                </ButtonGroup>
            </div>
            </nav>
        </header>
    )
}

export default MapsNav