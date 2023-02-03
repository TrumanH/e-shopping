import { categoriesSaga } from './categories/categories.saga';
import createSagaMiddleware from 'redux-saga';
import { all, call } from 'redux-saga/effects';

export function* rootSaga() {
    yield all([call(categoriesSaga)]);
  }

// create the saga middleware
export const sagaMiddleware = createSagaMiddleware();