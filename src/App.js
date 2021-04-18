import logo from './logo.svg';
import './App.css';
import MapsHeader from './project/mapsHeader';
import MapsBody from './project/mapsBody';
import { BrowserRouter as Route,Switch, Router } from 'react-router-dom';
import MapsNav from './project/mapsNav';

function App() {
  return (
    <div className="App">
      <Router>
      {/* <MapsHeader/> */}
      <MapsNav/>
      <Route exact path={"/"} component={MapsBody} />
      <Route exact path={"/country/"} component={MapsBody} />
      <Route exact path={"/country/:name"} component={MapsBody} />
      <Route exact path={"/country/:countryCode"} component={MapsBody} />
      </Router>
      <MapsBody/>
    </div>
  );
}

export default App;
