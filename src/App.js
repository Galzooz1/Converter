import logo from './logo.svg';
import './App.css';
import MapsApp from './project/mapsApp';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <MapsApp/>
      </BrowserRouter>
    </div>
  );
}

export default App;
