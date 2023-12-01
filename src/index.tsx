import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';

import './app/styles/index.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import store, { AppStateType } from './entities/store/redux-store';

import { GoogleOAuthProvider } from '@react-oauth/google';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


function rerenderEntireTree(state: AppStateType) {

  root.render(
    <Provider store={store}>
      <GoogleOAuthProvider clientId="613891743871-hp150i76mkm6gs2k03a4kood6kl0he6f.apps.googleusercontent.com">
        <App />
      </GoogleOAuthProvider>
    </Provider>

  );

}

rerenderEntireTree(store.getState())



store.subscribe(() => {
  let state = store.getState()

  rerenderEntireTree(state)
})
