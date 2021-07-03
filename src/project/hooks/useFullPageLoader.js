import React, { useState } from 'react';
import MapsLoading from '../mapsLoading';

function useFullPageLoader(props){
    const [loading, setLoading] = useState(false);
    return [
        loading ? <MapsLoading/> : null,
        () => setLoading(true), //Show Loader
        () => setLoading(false) //Hide Loader
     ];
}

export default useFullPageLoader