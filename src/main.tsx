import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App.tsx';
import './reset.scss';
import { toDoListStore } from './store/store.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router>
      <Provider store={toDoListStore}>
        <App />
      </Provider>
    </Router>
  </React.StrictMode>
);
