import React from 'react'
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Counter from './components/Counter'
import CounterTwo from './components/CounterTwo'

function App() {
  return (
    <div className="App">
      <Counter />
      <CounterTwo />
    </div>
  );
}

export default App;
