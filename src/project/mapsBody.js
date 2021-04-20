import React, { useEffect, useRef, useState } from 'react';
import './css/body.css';
import MapsItem from './mapsItem';
import {doApiGet} from '../services/apiSer';


function MapsBody(props){
    let [singleMap, setSingleMap] = useState();
    // let [mapsAr, setMapsAr] = useState({});
    // let [country, setCountry] = useState("Israel");

    useEffect( () => {
        let url = "https://restcountries.eu/rest/v2/name/Israel?fullText=true";
        doApiLinks(url)
    if(props.match){
        if(props.match.params.name){
            url = "https://restcountries.eu/rest/v2/name/"+props.match.params.name+"?fullText=true";
            doApiLinks(url)
            console.log(props.match.params.name);
        }else if(props.match.params.countryCode){
            url = "https://restcountries.eu/rest/v2/alpha/"+props.match.params.countryCode;
            doApiLinks(url);
            console.log(props.match.params.countryCode);
        }
    }
    },[props.match]);
    
    // const doApiLinks = (url) => {
    //     fetch(url)
    //     .then(resp => (resp.json()))
    //     .then(data => {
    //         setSingleMap(data[0])
    //         console.log(singleMap);
    //     }) 
    // }
    const doApiLinks = async(url) => {
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


    // useEffect( () => { 
    // let url = "https://restcountries.eu/rest/v2/name/"+country+"?fullText=true";
    // if(props.match){
    //     if(props.match.params.name){
    //         url = "https://restcountries.eu/rest/v2/name/"+props.match.params.name+"?fullText=true";
    //     }
    //     if(props.match.params.countryCode){
    //         url= "https://restcountries.eu/rest/v2/alpha/"+props.match.params.countryCode;
    //     }
    // }
    // doApi(url)
    // .then(data => {
    //     // if(props.match.params.countryCode){
    //         setMapsAr(data);
    //         console.log(data[0]);
            
    //     // }else{
    //     //     setSingleMap(data);
    //     // }
    // })
    // .catch(err =>{
    //     alert(err);
    //     console.log(err);
    // })
    // },[props.match]);

    // useEffect( () => { 
    // let url = "https://restcountries.eu/rest/v2/all";
    // doApi(url)
    //     .then(data => {
    //         setMapsAr(data[0]);
    //     })
    // },[]);
    

    // const doApi = async(url) => {
    //     // let url = `https://restcountries.eu/rest/v2/all`;
    //     try{
    //     let resp = await fetch(url)
    //     let data = await resp.json();
    //     console.log(data);
    //     }catch(err){
    //     console.log(err);
    //     alert(`There's a problem, try again later.`)
    //     }
    // }
    return(
        <React.Fragment>
        <main>
            {/* {(singleMap) && <MapsItem singleMap={singleMap} mapsAr={mapsAr}/> ? <MapsItem singleMap={singleMap} mapsAr={mapsAr} /> : "Result Not Found"} */}
            {(singleMap) && <MapsItem singleMap={singleMap}/>}
            {/* <MapsItem singleMap={singleMap} mapsAr={mapsAr} /> */}
        </main>
        </React.Fragment>
    )
}

export default MapsBody