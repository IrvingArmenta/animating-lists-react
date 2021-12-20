import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import WebfontLoader from '@dr-kobros/react-webfont-loader';

// webfontloader configuration object. *REQUIRED*.
const config = {
  google: {
    families: ['Roboto Mono:300,600']
  }
};
import 'destyle.css';

ReactDOM.render(
  <React.StrictMode>
    <WebfontLoader config={config}>
      <App />
    </WebfontLoader>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
