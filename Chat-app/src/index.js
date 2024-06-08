import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from 'react-router-dom';
import Setting from './contexs/setting';
import {Provider} from 'react-redux'
import {store} from './redux/store'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
  {/* Setting is a custom wrapper component Which is used for Maintain Neat and clean Code (CONTEX API CODEBASE)*/}
  <Setting>
  <Provider store={store}>
  <App/>
  </Provider>
    </Setting>
  </React.StrictMode>
  </BrowserRouter>
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
