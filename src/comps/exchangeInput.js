import React, { useEffect, useRef, useState } from 'react';
import './css/input.css';


function ExchangeInput(props){
    let doApi = props.doApi;
    let exAr= props.exAr;
    let [val, setVal] = useState("--");
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
        document.querySelector(".test").style.display = "block";
    }
    const replace = () => {
        let temp;
        temp = FromRef.current.value;
        FromRef.current.value = ToRef.current.value;
        ToRef.current.value = temp;
    }
    return(
        <React.Fragment>

        <div className="p-3 exInput">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <div>
                <label>Amount</label>
                 <input ref={InputRef} className="d-block shadow form-control" type="number" defaultValue={exAr.USDUSD}/>
            </div>
            <div>
            <label>From</label>
            <select ref={FromRef} className="d-block shadow form-select">
                <option value={exAr.USDUSD}>USD</option>
                <option value={exAr.USDEUR}>EURO</option>
                <option value={exAr.USDILS}>ILS</option>
                <option value={exAr.USDBTC}>BTC</option>
                <option value={exAr.USDTHB}>THB</option>
            </select>
            </div>
            <button onClick={replace} className="rounded-circle btn btn-warning shadow p-3">
            <i className="fa fa-exchange" aria-hidden="true"></i>
            </button>
            <div>
                <label>To</label>
                <select ref={ToRef} className="d-block shadow form-select">
                <option value={exAr.USDEUR}>EURO</option>
                <option value={exAr.USDUSD}>USD</option>
                <option value={exAr.USDILS}>ILS</option>
                <option value={exAr.USDBTC}>BTC</option>
                <option value={exAr.USDTHB}>THB</option>
            </select>
            </div>
            <button onClick={convert} className="btn btn-danger">Convert</button>
         </div>
            <div className="test" style={{display:'none',height:'50px'}}>
            <h3 className="d-block">Your Amount will be {val}</h3>
            </div>
        </React.Fragment>
    )
}

export default ExchangeInput