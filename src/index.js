import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Timer from './mobx/Store'
import reportWebVitals from './reportWebVitals';

const myTimer = new Timer();

ReactDOM.render(
  <React.StrictMode>
    <App timer={myTimer} />
  </React.StrictMode>,
  document.getElementById('root')
);

setInterval(() => {
  myTimer.increase()
}, 1000)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
