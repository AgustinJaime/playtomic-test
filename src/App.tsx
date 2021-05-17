import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ProtectedRoute from './components/ProtectedRoute'
import Form from './pages/Form/Form'
import Dashboard from './containers/DashboardCt'
import DeathsBoard from './containers/DeathsBoardCt'
import { State } from './store/reducers/reducers'

const App: React.FC = () => {
  const { isVerifying, isAuthenticated } = useSelector(
    (state: State) => state.auth
  )
  return (
    <Switch>
      <Redirect exact from="/" to="/newcases" />
      <ProtectedRoute
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
        path="/newcases"
        component={Dashboard}
        exact
      />
      <ProtectedRoute
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
        path="/newdeaths"
        component={DeathsBoard}
        exact
      />
      <Route path="/login" component={Form} exact />
      <Redirect to="/newCases" />
    </Switch>
  )
}

export default App
