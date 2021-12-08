import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

/// change toggle color on reload/first load
try {
  let span = document.querySelector("#theme-switch");
  if (localStorage.theme !== "dark") {
      localStorage.theme = "light";
      span.classList.toggle("before:-translate-x-7", true)
      span.classList.toggle("before:bg-darkElements", false)
      span.classList.toggle("before:bg-white", true)
  } else {
      localStorage.theme = "dark";
      span.classList.toggle("before:-translate-x-7", false)
      span.classList.toggle("before:bg-darkElements", true)
      span.classList.toggle("before:bg-white", false)
  }
}catch{}
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
