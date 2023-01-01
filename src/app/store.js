import reducers from '../redux/reducers/index';
import { configureStore } from '@reduxjs/toolkit';
// import { createStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer : reducers,
})

export default store;