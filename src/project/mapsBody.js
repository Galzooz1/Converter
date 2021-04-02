import React, { useEffect, useState } from 'react';
import './css/body.css';


function MapsBody(props){
    let [mapsAr, setMapsAr] = useState({});
    useEffect( () => { 
    doApi();
    },[]);
    
    const doApi = async() => {
        let url = `https://restcountries.eu/rest/v2/alpha?codes=usa;isr;gb;fr;tha`;
        try{
        let resp = await fetch(url)
        let data = await resp.json();
        console.log(data);
        setMapsAr(data);
        }catch(err){
        console.log(err);
        alert(`There's a problem, try again later.`)
        }
        
    }
    return(
        <React.Fragment>
        <main>
        <div className="container border border-dark bg-warning d-flex justify-content-between align-items-center">
            <div className="links p-2 d-flex justify-content-between col-lg-8">
                {mapsAr.map(item => {
                    return(
                        <a href="#">{item.nativeName}</a>
                    )
                })}
                {/* <a href="#">ISRAEL</a> |
                <a href="#">UK</a> |
                <a href="#">FRANCE</a> |
                <a href="#">THAILAND</a> */}
            </div>
            <div className="p-2 d-flex align-items-center">
                <label className="form-label me-2">Search</label>
                <input type="text" className="input shadow"/>
                <button className="btn btn-primary ms-1">🔍</button>
            </div>
        </div>
        <div className="bg-dark col-lg-8 mx-auto">
            <div className="d-flex container justify-content-around">
                {mapsAr.map(item => {
                    return(
                        <div>
                        <img src={item.flag} className="border float-start w-25"/>
                        <div className="bg-info col-lg-8">
                           <h2>{item.name}</h2>
                           <h3>{item.population}</h3>
                           <h4>{item.region}</h4>
                           <h4>{item.language}</h4>
                           <h4>{item.currencies.code}</h4>
                           <h4>{item.capital}</h4>
                        </div>
                        </div>
                    )
                })}
                 {/* <img src="#" className="border"/>
                 <div className="bg-info">
                    <h2>ISRAEL</h2>
                    <h3>POP</h3>
                    <h4>Region</h4>
                    <h4>LAng</h4>
                    <h4>Coin</h4>
                    <h4>Capital</h4>
                 </div> */}
            </div>
        </div>
        </main>
        </React.Fragment>
    )
}

export default MapsBody