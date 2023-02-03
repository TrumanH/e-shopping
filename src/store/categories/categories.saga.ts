import { all, call, put, takeEvery } from 'typed-redux-saga/macro';
import { getCategoriesMap } from '../../utils/firebase/firebase.utils';
import { setCategories, getCategoriesFailed } from './categories.slice';

export function* fetchCategories() {
    try {
        const categoriesMap = yield* call(getCategoriesMap);
        yield* put(setCategories(categoriesMap));
    } catch (error) {
        yield* put(getCategoriesFailed(error as Error));
    }
};

export function* onFetchCategories() {
    yield takeEvery("categories/getCategoriesStart", fetchCategories);
};

export function* categoriesSaga() {
    yield all([call(onFetchCategories)]);
};