import logo from './logo.svg';
import './App.css';
import ExchangeHeader from './comps/exchangeHeader';
import ExchangeBody from './comps/exchangeBody';
import ExchangeFooter from './comps/exchangeFooter';

function App() {
  return (
    <div className="App">
      <ExchangeHeader />
      <ExchangeBody/>
      <ExchangeFooter/>
    </div>
  );
}

export default App;
