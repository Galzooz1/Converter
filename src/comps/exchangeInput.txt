import React, { useEffect, useRef, useState } from 'react';
import './css/input.css';


function ExchangeInput(props){
    let exAr= props.exAr;
    let [val, setVal] = useState("--");
    let [myInput, setMyInput] = useState();
    let [myFrom, setMyFrom] = useState();
    let FromRef = useRef();
    let ToRef = useRef();
    let InputRef = useRef();
    // useEffect( () => { 
    // convert();
    // },[]);
    
    const convert = () => {
        if(FromRef.current.value == exAr.USDBTC || ToRef.current.value == exAr.USDBTC){
            setVal(((InputRef.current.value / FromRef.current.value) * ToRef.current.value).toFixed(5));
        }else{
            setVal(((InputRef.current.value / FromRef.current.value) * ToRef.current.value).toFixed(2))
        }
        setMyInput(InputRef.current.value);
        document.querySelector(".result").style.display = "block";
        // setMyFrom(Object.keys(FromRef.current.value));
        // console.log(Object.keys(FromRef.current.value));
    }
    const replace = () => {
        let temp;
        temp = FromRef.current.value;
        FromRef.current.value = ToRef.current.value;
        ToRef.current.value = temp;
    }
    return(
        <React.Fragment>

        <div className="p-3">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <div className="col-lg-8 mx-auto">
                <label>Amount</label>
                 <input ref={InputRef} className="shadow form-control" type="number" defaultValue={exAr.USDUSD}/>
            </div>
            <div className="exInput">

            <div className="col-lg-4">
            <label>From</label>
            <select ref={FromRef} className="d-block shadow form-select">
                <option value={exAr.USDUSD}>USD</option>
                <option value={exAr.USDEUR}>EURO</option>
                <option value={exAr.USDILS}>ILS</option>
                <option value={exAr.USDBTC}>BTC</option>
                <option value={exAr.USDTHB}>THB</option>
            </select>
            </div>
            <button onClick={replace} className="rounded-circle btn btn-dark shadow p-3">
            <i className="fa fa-exchange" aria-hidden="true"></i>
            </button>
            <div className="col-lg-4">
                <label>To</label>
                <select ref={ToRef} className="d-block shadow form-select">
                <option value={exAr.USDEUR}>EURO</option>
                <option value={exAr.USDUSD}>USD</option>
                <option value={exAr.USDILS}>ILS</option>
                <option value={exAr.USDBTC}>BTC</option>
                <option value={exAr.USDTHB}>THB</option>
            </select>
            </div>
            </div>
            <button onClick={convert} className="btn btn-danger p-3 mt-4">Convert</button>
            <div className="result text-start m-2" style={{display:'none',height:'50px'}}>
            <h4>{myInput} {myFrom} =</h4>
            <h3>{val}</h3>
            </div>
         </div>
        </React.Fragment>
    )
}

export default ExchangeInput