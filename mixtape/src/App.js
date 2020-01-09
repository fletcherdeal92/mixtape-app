import React from 'react';
import logo from './logo.svg';
import './App.css';
import queryString from 'query-string';

function App() {

  let parsed = queryString.parse(window.location.search);
  console.log(parsed);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={()=>window.location='http://localhost:8888/login'}>Sign in with spotify</button>
      </header>
    </div>
  );
}

export default App;
