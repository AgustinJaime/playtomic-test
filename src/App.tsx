import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import ProtectedRoute from './components/ProtectedRoute'

import Form from './containers/FormCt'
import Dashboard from './containers/DashboardCt'
import Settings from './containers/SettingsCt'

const App: React.FC = (props: any) => {
  const { isAuthenticated, isVerifying } = props
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

function mapStateToProps(state: any) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying,
  }
}

export default connect(mapStateToProps)(App)
