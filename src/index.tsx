import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import createStore from './store/store'
import { BrowserRouter } from 'react-router-dom'
import App from './App'

import './index.css'

ReactDOM.render(
  <Provider store={createStore()}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
)
