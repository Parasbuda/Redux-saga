import { createStore, applyMiddleware, compose } from "redux"
import logger from "redux-logger"
import rootReducer from "./rootReducer"
import createSagaMiddleware from "redux-saga"
import rootSaga from "../Saga/rootSaga"

const sagaMiddleware = createSagaMiddleware()
const middlewares = [logger, sagaMiddleware]

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
)
sagaMiddleware.run(rootSaga)
store.dispatch({type:"HELLO"})
export default store
