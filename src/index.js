import React from 'react';
import ReactDOM from 'react-dom/client';
import 'src/sass/index.scss';
import App from 'src/components/App';
import { Provider } from 'react-redux'
import store from 'src/store'
import { UseEffectExample } from "./examples/react/hooks-example";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
        <UseEffectExample />
    </Provider>
  </React.StrictMode>
);
