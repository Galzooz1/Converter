import React, { useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function MapsSearch(props) {
let searchRef = useRef();
  const classes = useStyles();
    return(
        <form className={classes.root} noValidate>
        <TextField className="text-white" ref={searchRef} onKeyUp={props.searchEnter} id="standard-basic" label="Search..." />
        <button onClick={props.searchCountry} className="btn btn-primary ms-1">🔍</button>
        </form>
    )
}
// export default MapsSearch