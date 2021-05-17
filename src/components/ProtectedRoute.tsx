import React from 'react'
import { Route, Redirect } from 'react-router-dom'

interface ProtectedRouteTypes {
  component: React.ElementType
  isAuthenticated: boolean
  isVerifying: boolean
  path: string
  exact: boolean
}

const ProtectedRoute = ({
  component: Component,
  isAuthenticated,
  isVerifying,
  ...rest
}: ProtectedRouteTypes) => (
  <Route
    {...rest}
    render={(props) =>
      isVerifying ? (
        <div />
      ) : isAuthenticated ? (
        <Component {...props} />
      ) : (
        <Redirect to="/login" />
      )
    }
  />
)
export default ProtectedRoute
