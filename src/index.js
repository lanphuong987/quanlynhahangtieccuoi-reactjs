import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from 'react-router-dom';
import { createStore } from 'redux';
import mainReducer from "./Reducer/RootReducer"
import { Provider } from 'react-redux';
import { Provider as AlertProvider, transitions } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
const store = createStore(mainReducer)
const alertOptions = {
    timeout: 2000,
    position: 'middle',
    transition: transitions.SCALE,
    offset: '30px',
};
const alertStyle = {
    color: "white",
    backgroundColor: '#ffc107',
    fontFamily: "Arial",
};
ReactDOM.render(
    <Provider store={store}>
        <AlertProvider template={AlertTemplate} {...alertOptions}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </AlertProvider>
    </Provider>
        
, document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
