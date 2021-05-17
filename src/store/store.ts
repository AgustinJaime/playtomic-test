import { applyMiddleware, createStore } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { verifyAuth } from './actions/'
import rootReducer from './reducers/reducers'
import { composeWithDevTools } from 'redux-devtools-extension'

export type State = ReturnType<typeof rootReducer>

export default function configureStore() {
  const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
  )
  verifyAuth()(store.dispatch)
  return store
}
