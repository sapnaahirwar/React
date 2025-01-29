import {configureStore} from  "@reduxjs/toolkit";
import countReducer from './counterSlice';

const store=configureStore({
    reducer:{
        myslice:countReducer
    }

})
export default store;