import { all, call, put, takeEvery } from 'redux-saga/effects';
import { getCollectionAndDocuments } from '../../utils/firebase/firebase.utils';
import { setCategories, getCategoriesFailed } from './categories.slice';

export function* fetchCategories() {
    try {
        const categoriesMap = yield getCollectionAndDocuments();
        yield put(setCategories(categoriesMap));
    } catch (error) {
        yield put(getCategoriesFailed(error.message));
    }
};

export function* onFetchCategories() {
    yield takeEvery("categories/getCategoriesStart", fetchCategories);
};

export function* categoriesSaga() {
    yield all([call(onFetchCategories)]);
};