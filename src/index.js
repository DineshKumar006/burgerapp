import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware,compose,combineReducers} from 'redux';
import BurgerBuilderReducer from './store/reducer/reducer';

import orderReducer from './store/reducer/order';

import authReducer from './store/reducer/authReducer';


import {BrowserRouter} from 'react-router-dom';
import thunk from 'redux-thunk'

const composeEnhancers =process.env.NODE_ENV==='development'? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null|| compose;

const rootreducer=combineReducers({
    BurgerReducer:BurgerBuilderReducer,
    orders:orderReducer,
    auth:authReducer
})

const store=createStore(rootreducer,composeEnhancers(applyMiddleware(thunk)) );

const app=(
    <Provider store={store}>
    <BrowserRouter>
        <App/>
    </BrowserRouter>
    </Provider>
)



ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
