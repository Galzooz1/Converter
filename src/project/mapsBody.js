import React, { useEffect, useRef, useState } from 'react';
import './css/body.css';
import MapsItem from './mapsItem';
import {doApiGet} from '../services/apiSer';


function MapsBody(props){
    let [singleMap, setSingleMap] = useState();
    // let [isLoading, setIsLoading] = useState({isLoading:true});

    useEffect( () => {
        let url = "https://restcountries.eu/rest/v2/name/Israel?fullText=true";
        doApiLinks(url)
        // let url;
        // setIsLoading({isLoading:false});
    if(props.match){
        if(props.match.params.name){
            url = "https://restcountries.eu/rest/v2/name/"+props.match.params.name+"?fullText=true";
            doApiLinks(url)
            console.log(props.match.params.name);
        }
        else if(props.match.params.countryCode){
            doApiCode(props.match.params.countryCode);
            console.log(props.match.params.countryCode);
        }
    }
    },[props.match]);
    
    const doApiLinks = async(url) => {
        console.log(url);
        try{
        let resp = await fetch(url)
        let data = await resp.json();
        console.log(data[0]);
        setSingleMap(data[0]);
        console.log(singleMap);
        }catch(err){
        console.log(err);
        alert(`There's a problem, try again later.`)
        }
    }

    const doApiCode = async(code) => { 
        let url = "https://restcountries.eu/rest/v2/alpha/"+code;
        try{
        let resp = await fetch(url)
        let data = await resp.json();
        console.log(data);
        setSingleMap(data);
        }catch(err){
        console.log(err);
        alert(`There's a problem, try again later.`)
        }
        
    }

    return(
        <React.Fragment>
        <main>
            {/* {(singleMap) && <MapsItem singleMap={singleMap} mapsAr={mapsAr}/> ? <MapsItem singleMap={singleMap} mapsAr={mapsAr} /> : "Result Not Found"} */}
            {(singleMap) ? <MapsItem singleMap={singleMap} doApiCode={doApiCode} /> : <h2>Result not found!</h2>}
            {/* <MapsItem singleMap={singleMap} mapsAr={mapsAr} /> */}
        </main>
        </React.Fragment>
    )
}

export default MapsBody