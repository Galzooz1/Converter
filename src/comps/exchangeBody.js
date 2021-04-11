import React, { useEffect, useState } from 'react';
import './css/body.css';
import ExchangeInput from './exchangeInput';



function ExchangeBody(props){
    let [exAr, setExAr] = useState({});
    let [date, setDate] = useState(new Date());
    useEffect( () => { 
    doApi();
    let timerID = setInterval( () => setDate(new Date()), 1000);
    return function cleanup(){
        clearInterval(timerID);
    }
    },[]);
        // let today = new Date();
        // let date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
        // let clock = today.getHours() + ':' + (today.getMinutes()) /* + ':' + today.getSeconds()*/;
    
    const doApi = async() => {
        let url = `json/money.json`;
        try{
            let resp = await fetch(url)
            let data = await resp.json();
            console.log(data.quotes);
            setExAr(data.quotes);
        }catch(err){
            console.log(err);
            alert(`There's a problem, try again later.`)
        }
    }
        return(
        <React.Fragment>
        <header className="bg-dark">
           <h1 className="text-info display-6">Wave Currency Converter App </h1>
        </header>
        <main>
            <div className="bg-white rounded-3 col-lg-10 mx-auto border border-dark m-5">
                <ExchangeInput exAr={exAr}/>
            </div>
            <div>
                <h3>{date.toLocaleDateString()}</h3>
                <h3>{date.toLocaleTimeString()}</h3>
            </div>
        </main>
            </React.Fragment>
    )
}

export default ExchangeBody