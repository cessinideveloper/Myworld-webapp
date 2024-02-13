import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga'


const sagamiddleware=createSagaMiddleware();
export const store=configureStore({
    reducer:{}
})