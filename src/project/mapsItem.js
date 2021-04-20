import React from 'react';

function MapsItem(props){
    let singleMap = props.singleMap;


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
        </div>
        
        </div>
    )
}

export default MapsItem