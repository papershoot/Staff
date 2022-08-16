import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Home from './Component/Homepage/index';
import './asset/Style/main.css'

import { StoreProvider } from './store';
// import StoreProvider from './store/Provider';
import { Provider } from 'react-redux';

// import StoreProvider from './store/Provider';
import store from './store-redux/store';
import CreateStaff from './Component/Staff/createstaff';

export function LogOut() {
  sessionStorage.clear();
  localStorage.clear();
  window.location.href = '/';
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <Provider store={store}>
    <StoreProvider>
      <BrowserRouter>
        <Routes>
          {
            sessionStorage.getItem("accessToken") != null ?
              (
                <>
                  <Route path='/' element={<Home />}></Route>
                  <Route path='/logout' element={<LogOut />}></Route>
                  <Route path='/home' element={<Home />}></Route>

                </>
              )
              :
              (
                <>
                  <Route path='/home' element={<App />}></Route>
                  <Route path='/' element={<App />}></Route>
                  <Route path='/logout' element={<LogOut />}></Route>
                </>
              )
          }
        </Routes>
      </BrowserRouter>
    </StoreProvider>
  </Provider>
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
