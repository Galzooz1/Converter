import React, { useEffect, useState } from 'react';
import './css/body.css';
import ExchangeInput from './exchangeInput';
import Lottie from 'react-lottie';
import animationData from '../lotties/exchange.json'



function ExchangeBody(props){
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };
    let [exAr, setExAr] = useState({});
    let [date, setDate] = useState(new Date());
    useEffect( () => { 
    doApi();
    let timerID = setInterval( () => setDate(new Date()), 1000);
    return function cleanup(){
        clearInterval(timerID);
    }
    },[]);
    
    const doApi = async() => {
        let url = `json/money.json`;
        try{
            let resp = await fetch(url)
            let data = await resp.json();
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
        <main className="pt-4">
        <Lottie 
	    options={defaultOptions}
        height={150}
        width={150}
      />
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