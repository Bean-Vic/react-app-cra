import React from 'react';
import ReactDOM from 'react-dom/client';
import 'src/sass/index.scss';
import App from 'src/components/App';
import { Provider } from 'react-redux'
import store from 'src/store'
import { RouterExample } from './examples/react/react-router/RouterExample';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
        <RouterExample />
    </Provider>
  </React.StrictMode>
);
