import React from 'react';
import logo from './logo.svg';
import './App.css';
import { count } from 'console';


type AppProps = {
  message:string;
  count: number;
}

function App() {

  let vars : AppProps = {
    message:'Hi luis',
    count:6
  };

  return (
    <div className="App">
      <p>{vars.message}</p>
    </div>
  );
}

export default App;
