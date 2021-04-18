import React from 'react';

function MapsItem(props){
    let item = props.item;


    return(
        <div>
        <div className="row " >
            {/* <img className="float-left mr-2" src={item.flag} alt="Card image cap" height="200" /> */}
            <div className="float-left mr-2 pic" style={{ backgroundImage: `url(${item.flag})` }}></div>
            <div className="col">
                <h3 >{item.name}</h3>
                <div >populatio: {item.population}</div>
                <div >Region: {item.region}</div>
                <div >Lenguage: {item.languages[0].iso639_2}, {item.languages[0].name} </div>
                <div >Coin: {item.currencies[0].code}, {item.currencies[0].name}</div>
                <div >Capital: {item.capital}</div>
            </div>
        </div>
        
        </div>
    )
}

export default MapsItem