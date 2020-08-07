import { takeEvery ,put} from "redux-saga/effects"

//worker Saga
function* workerSaga() {
    console.log("hey from worker saga")
    yield put({ type: "ACTION_FROM_WORKER" })
}
//watcher saga
function* rootSaga() {
  yield takeEvery("HELLO", workerSaga)
}
//we have watcher saga => which watches the action =>then invokes the worker saga
export default rootSaga
