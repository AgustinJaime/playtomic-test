import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
import ProtectedRoute from './components/ProtectedRoute'
import Form from './containers/FormCt'
import Dashboard from './containers/DashboardCt'
import Settings from './containers/SettingsCt'
import { State } from './store/reducers/reducers'

const App: React.FC = () => {
  const { isVerifying, isAuthenticated } = useSelector(
    (state: State) => state.auth
  )
  return (
    <Switch>
      <Redirect exact from="/" to="/dashboard" />
      <ProtectedRoute
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
        path="/dashboard"
        component={Dashboard}
        exact
      />
      <ProtectedRoute
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
        path="/settings"
        component={Settings}
        exact
      />
      <Route path="/login" component={Form} exact />
    </Switch>
  )
}

export default App
