import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//Redux
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducer from '../src/store/reducer';

const store = createStore(reducer)

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
