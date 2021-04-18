import React, { useEffect, useRef, useState } from 'react';
import './css/body.css';
import MapsItem from './mapsItem';

function MapsBody(props){
    let [singleMap, setSingleMap] = useState(null);
    let [mapsAr, setMapsAr] = useState([]);
    let [country, setCountry] = useState("Israel")
    useEffect( () => { 
    let url = "https://restcountries.eu/rest/v2/name/"+country+"?fullText=true";
    if(props.match){
        if(props.match.params.name){
            url = "https://restcountries.eu/rest/v2/name/"+props.match.params.name+"?fullText=true";
        }
        if(props.match.params.countryCode){
            url= "https://restcountries.eu/rest/v2/alpha/"+props.match.params.countryCode;
        }
    }
    doApi(url)
    .then(data => {
        if(props.match.params.countryCode){
            setSingleMap(data);
        }else{
            setSingleMap(data[0])
        }
    })
    .catch(err =>{
        alert(err);
        console.log(err);
    })
    },[props.match]);

    useEffect( () => { 
    let url = "https://restcountries.eu/rest/v2/all";
    doApi(url)
        .then(data => {
            setMapsAr(data);
        })
    },[]);
    

    const doApi = async(url) => {
        // let url = `https://restcountries.eu/rest/v2/all`;
        try{
        let resp = await fetch(url)
        let data = await resp.json();
        console.log(data);
        }catch(err){
        console.log(err);
        alert(`There's a problem, try again later.`)
        }
    }
    return(
        <React.Fragment>
        <main>
            {(singleMap) ? <MapsItem item={singleMap} mapsAr={mapsAr} /> : "Result Not Found"}
        </main>
        </React.Fragment>
    )
}

export default MapsBody