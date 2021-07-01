import React, { useEffect, useRef, useState } from 'react';
import './css/input.css';
import ExchangeSelect from './exchangeSelect';
import NumberFormat from 'react-number-format';


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
    let input;
    
    const convert = () => {
        input = parseFloat(InputRef.current.value.replace(/,/g, ''));
        if(exAr[FromRef.current.value] == exAr.USDBTC || exAr[ToRef.current.value] == exAr.USDBTC){
            res = (input / exAr[FromRef.current.value]) * exAr[ToRef.current.value];
            setVal(res.toLocaleString('en', {minimumFractionDigits: 7, maximumFractionDigits: 7}));
        }else{
            res = (input / exAr[FromRef.current.value]) * exAr[ToRef.current.value];
            setVal(res.toLocaleString('en', {minimumFractionDigits: 2, maximumFractionDigits: 2}));
        }
        input = InputRef.current.value;
        setMyInput(input);
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
                <NumberFormat getInputRef={InputRef} displayType={'input'} className="shadow form-control" thousandSeparator={true} defaultValue={exAr.USDUSD} renderText={(value, props) => <div {...props}>{value}</div>}/>
            </div>
            <div className="exInput">

            <div className="col-lg-4">
            <label>From</label>
            <select ref={FromRef} onChange={convert} className="d-block shadow form-select">
                <ExchangeSelect/>
            </select>
            </div>
            <button onClick={replace} className="rounded-circle btn btn-dark shadow p-3">
            <i className="fa fa-exchange" aria-hidden="true"></i>
            </button>
            <div className="col-lg-4">
                <label>To</label>
                <select ref={ToRef} onChange={convert} className="d-block shadow form-select">
                <ExchangeSelect/>
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