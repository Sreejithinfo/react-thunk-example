import { put, takeLatest, all } from "redux-saga/effects";

function* getDataSaga() {
	const data = yield fetch("https://jsonplaceholder.typicode.com/posts")
		.then((response) => response.json())
		.then((d) => d);
	yield put({ type: "GET_DATA", payload: data });
}

function* actionWatcher() {
	yield takeLatest("LOAD_DATA", getDataSaga);
}

export default function* rootSaga() {
	yield all([actionWatcher()]);
}
