import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './index.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import store, { AppStateType } from './redux/redux-store';

import { GoogleOAuthProvider } from '@react-oauth/google';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


function rerenderEntireTree(state: AppStateType) {

  root.render(
    <GoogleOAuthProvider clientId="613891743871-hp150i76mkm6gs2k03a4kood6kl0he6f.apps.googleusercontent.com">
        <App />
    </GoogleOAuthProvider>

  );

}

rerenderEntireTree(store.getState())



store.subscribe(() => {
  let state = store.getState()

  rerenderEntireTree(state)
})
