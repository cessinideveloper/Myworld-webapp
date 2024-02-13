import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import popUpReducer from './slices/popUp.slice';
const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    popUp: popUpReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);

