import React from 'react';

function ExchangeSelect(props){
    return(
        <>
                <option value={"USDUSD"}>USD - US Dollar</option>
                <option value={"USDEUR"}>EUR - Euro</option>
                <option value={"USDILS"}>ILS - Israeli Shekel</option>
                <option value={"USDBTC"}>BTC - Bitcoin</option>
                <option value={"USDTHB"}>THB - Thai Baht</option>
        </>
    )
}

export default ExchangeSelect