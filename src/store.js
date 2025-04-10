import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import rootReducer from 'src/reducers';
import rootSaga from 'src/sagas';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            thunk: false,
        }).concat(sagaMiddleware),
    devTools: {
        name: '憨豆特工 - Johnny English'
    }
});

sagaMiddleware.run(rootSaga);

export default store;