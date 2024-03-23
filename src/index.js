import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './settings/reducers/store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HOME from './app/pages/HOME';
import USERS from './app/pages/USERS';
import USER from './app/pages/USERS/USER';
import TODO from './app/pages/TODOS/TODO';
import TODOS from './app/pages/TODOS';
import Photos from './app/pages/PHOTOS';
import PHOTO_PAGE from './app/pages/PHOTOS/PHOTO';
import NOTFOUND from './app/pages/NOTFOUND';
import Header from './components/Header';
import LAYOUT from './app/LAYOUT';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App></App>
    </Provider>
   
);

reportWebVitals();
