import logo from './logo.svg';
import './App.css';
import FunctionalGreeting  from './components/FunctionalGreeting';
import FunctionalGreetingWithProps  from './components/FunctionalGreetingWithProps';
import StatefulGreeting from './components/StatefulGreeting';

function App() {
  return (
    <div className="App">
      <FunctionalGreeting/>
      <FunctionalGreetingWithProps greeting = "nice to meet you!"/>
      <StatefulGreeting greeting ="I am a stateful component"/>
    </div>
  );
}

export default App;
