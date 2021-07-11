import React from 'react';
import { useHistory } from 'react-router-dom';
import MapView from './Leaflet/MapView';

function MapsItem(props){
    let history = useHistory();
    let singleMap = props.singleMap;

    return(
        <div>
        <div className="item row col-lg-6 border mx-auto" >
            <img className="float-left mt-4" src={singleMap.flag} alt="Card image cap" height="150" />
            {/* <div className="float-left mr-2 pic" style={{ backgroundImage: `url(${singleMap.flag})` }}></div> */}

            <div className="col">
                <h3 className="info head display-1">{singleMap.name}</h3>
                <div className="info"><span>Population:</span> {singleMap.population}</div>
                <div className="info"><span>Region:</span> {singleMap.region}</div>
                <div className="info"><span>Language:</span> {singleMap.languages[0].name} </div>
                <div className="info"><span>Coin:</span> {singleMap.currencies[0].code}, {singleMap.currencies[0].symbol}</div>
                <div className="info"><span>Capital:</span> {singleMap.capital}</div>
                <div className="info"><span>lang:</span> {singleMap.latlng[0]} loc2={singleMap.latlng[1]}</div>
            </div>
            <h3>States with borders: {(singleMap.borders).map(item => {
                return(
                    <button className="btn btn-outline-info mt-2" onClick={()=>{
                        history.push("/code/"+item);
                        // props.doApiCode(String(item));
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