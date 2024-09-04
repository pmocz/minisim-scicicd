import logo from './logo.svg';
import './App.css';

import Plot from 'react-plotly.js';
//import React from 'react';

var my_data = [
  {
    x: [1, 2, 3],
    y: [2, 6, 3],
    type: 'scatter',
    mode: 'lines+markers',
    marker: {color: 'red'},
  },
  {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
]

var my_layout = { width: 320, height: 240, title: 'A Fancy Plot' }

function TPPlot({ data, layout }) {
  return (
    <Plot data={data} layout={layout} />
  );
}

function App() {
  return (
    <div className="App">
      {/*
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/*
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      */}
      <TPPlot data={my_data} layout={my_layout} />
    </div>
  );
}

export default App;
