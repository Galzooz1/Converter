import React from 'react';
import { useHistory } from 'react-router-dom';
import MapView from './Leaflet/MapView';

function MapsItem(props){
    let history = useHistory();
    let singleMap = props.singleMap;
    let url = "https://restcountries.eu/rest/v2/alpha/"

    return(
        <div>
        <div className="row col-lg-6 border mx-auto" >
            <img className="float-left mr-2" src={singleMap.flag} alt="Card image cap" height="150" />
            <div className="float-left mr-2 pic" style={{ backgroundImage: `url(${singleMap.flag})` }}></div>

            <div className="col">
                <h3 >{singleMap.name}</h3>
                <div >population: {singleMap.population}</div>
                <div >Region: {singleMap.region}</div>
                <div >Language: {singleMap.languages[0].name} </div>
                <div >Coin: {singleMap.currencies[0].code}, {singleMap.currencies[0].symbol}</div>
                <div >Capital: {singleMap.capital}</div>
            </div>
            <h3>States with borders: {(singleMap.borders).map(item => {
                return(
                    <button className="btn btn-outline-info mt-2" onClick={()=>{
                        // history.push("/country/"+item);
                        props.doApiCode(String(item));
                    }}>{item}</button>
                )
            })}</h3>
        </div>
        <div className="mt-2">
            <MapView loc1={singleMap.latlng[0]} loc2={singleMap.latlng[1]}/>
        </div>
        </div>
    )
}

export default MapsItem