import React from 'react';

function ExchangeFooter(props){
    return(
        <div className="bg-dark text-info text-center p-3">
            &copy; {new Date().getFullYear()} Created By Gal Aluf
        </div>
    )
}

export default ExchangeFooter