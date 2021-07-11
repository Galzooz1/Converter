import React, { useEffect, useState } from 'react';
import './css/body.css';
import MapsItem from './mapsItem';
import useFullPageLoader from './hooks/useFullPageLoader';


function MapsBody(props){
    let [singleMap, setSingleMap] = useState();
    // let [isLoading, setIsLoading] = useState({isLoading:true});
    let url;

    const [loader, showLoader, hideLoader] = useFullPageLoader();
    useEffect( () => { 
        url = "https://restcountries.eu/rest/v2/name/Israel?fullText=true";
        doApiLinks(url)
    },[]);
    useEffect( () => {
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
        // doApiLinks(url)
    }
    },[props.match]);
    

    

    const doApiLinks = async(url) => {
        console.log(url);
        try{
        showLoader();
        let resp = await fetch(url)
        let data = await resp.json();
        console.log(data[0]);
        hideLoader();
        setSingleMap(data[0]);
        }catch(err){
        console.log(err);
        alert(`There's a problem, try again later.`)
        }
    }

    const doApiCode = async(code) => { 
        let url = "https://restcountries.eu/rest/v2/alpha/"+code;
        try{
        showLoader();
        let resp = await fetch(url)
        let data = await resp.json();
        console.log(data);
        hideLoader();
        setSingleMap(data);
        }catch(err){
        console.log(err);
        alert(`There's a problem, try again later.`)
        }
        
    }

    return(
        <React.Fragment>
        <main className="bg">
            {/* {(singleMap) && <MapsItem singleMap={singleMap} mapsAr={mapsAr}/> ? <MapsItem singleMap={singleMap} mapsAr={mapsAr} /> : "Result Not Found"} */}
            {(singleMap) ? <MapsItem singleMap={singleMap} doApiCode={doApiCode} /> : <h2 className="mt-5">Result not found!</h2>}
            {/* <MapsItem singleMap={singleMap} mapsAr={mapsAr} /> */}
        </main>
        {loader}
        </React.Fragment>
    )
}

export default MapsBody