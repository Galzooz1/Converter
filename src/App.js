import logo from './logo.svg';
import './App.css';
import ExchangeHeader from './comps/exchangeHeader';
import ExchangeBody from './comps/exchangeBody';

function App() {
  return (
    <div className="App">
      <ExchangeHeader />
      <ExchangeBody/>
    </div>
  );
}

export default App;
