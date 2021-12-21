import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {
  const [pred, setPred] = useState(0)
  useEffect(()=> {
    val()
    console.log(pred)
  },[])

  const getData = async () => {
    var config = { headers: {  
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'}
    }
    const data = {
      "Age": 60,
      "Sex": 0,
      "ChestPainType":1,
      "RestingBP": 190,
      "FastingBS": 1,
      "RestingECG": 1,
      "MaxHR": 100,
      "ExerciseAngina":1,
      "Oldpeak":2.0,
      "ST_Slope":1
  }
    const res = await axios.post('https://heart-disease-ml-api.herokuapp.com/prediction', data, config)
    return res.data
  }
  
  const val = async() => {
    const data = await getData()
    setPred(data)
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
          {pred}
        </a>
      </header>
    </div>
  );
}

export default App;
