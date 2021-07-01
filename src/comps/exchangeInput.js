import React, { useEffect, useRef, useState } from 'react';
import './css/input.css';


function ExchangeInput(props){
    let exAr = props.exAr;
    let [val, setVal] = useState();
    let [myInput, setMyInput] = useState();
    let [myFrom, setMyFrom] = useState();
    let [myTo, setMyTo] = useState();
    let FromRef = useRef();
    let ToRef = useRef();
    let InputRef = useRef();
    let res;
    
    const convert = () => {
        if(exAr[FromRef.current.value] == exAr.USDBTC || exAr[ToRef.current.value] == exAr.USDBTC){
            res = (InputRef.current.value / exAr[FromRef.current.value]) * exAr[ToRef.current.value];
            setVal(res.toLocaleString('en', {minimumFractionDigits: 7, maximumFractionDigits: 7}));
        }else{
            res = (InputRef.current.value / exAr[FromRef.current.value]) * exAr[ToRef.current.value];
            setVal(res.toLocaleString('en', {minimumFractionDigits: 2, maximumFractionDigits: 2}));
        }
        setMyInput(InputRef.current.value);
        setMyFrom(FromRef.current.value.substr(3));
        setMyTo(ToRef.current.value.substr(3));
        document.querySelector(".result").style.display = "block";
    }
    const replace = () => {
        let temp;
        temp = FromRef.current.value;
        FromRef.current.value = ToRef.current.value;
        ToRef.current.value = temp;
        convert();
    }
    return(
        <React.Fragment>

        <div className="p-5">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>
            <div className="col-lg-8 mx-auto">
                <label>Amount</label>
                 <input ref={InputRef} className="shadow form-control" type="number" defaultValue={exAr.USDUSD}/>
            </div>
            <div className="exInput">

            <div className="col-lg-4">
            <label>From</label>
            <select ref={FromRef} onChange={convert} className="d-block shadow form-select">
                <option value={"USDUSD"}>USD - US Dollar</option>
                <option value={"USDEUR"}>EUR - Euro</option>
                <option value={"USDILS"}>ILS - Israeli Shekel</option>
                <option value={"USDBTC"}>BTC - Bitcoin</option>
                <option value={"USDTHB"}>THB - Thai Baht</option>
            </select>
            </div>
            <button onClick={replace} className="rounded-circle btn btn-dark shadow p-3">
            <i className="fa fa-exchange" aria-hidden="true"></i>
            </button>
            <div className="col-lg-4">
                <label>To</label>
                <select ref={ToRef} onChange={convert} className="d-block shadow form-select">
                <option value={"USDUSD"}>USD - US Dollar</option>
                <option value={"USDEUR"}>EUR - Euro</option>
                <option value={"USDILS"}>ILS - Israeli Shekel</option>
                <option value={"USDBTC"}>BTC - Bitcoin</option>
                <option value={"USDTHB"}>THB - Thai Baht</option>
            </select>
            </div>
            </div>
            <button onClick={convert} className="btn btn-outline-success p-3 mt-4">Convert</button>
            <div className="result text-start m-2" style={{display:'none',height:'100px'}}>
            <div className="from">{myInput} {myFrom} =</div>
            <div className="to">{val} {myTo}</div>
            </div>
         </div>
        </React.Fragment>
    )
}

export default ExchangeInput