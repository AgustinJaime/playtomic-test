import { connect } from 'react-redux'
import Form from '../pages/Form/Form'
import { loginUser } from '../store/actions'
import { State } from '../store/reducers/reducers'

interface StateProps {
  isLoggingIn: boolean
  loginError: boolean
  isAuthenticated: boolean
}

const mapStateToProps = (state: State): StateProps => {
  return {
    isLoggingIn: state.auth.isLoggingIn,
    loginError: state.auth.loginError,
    isAuthenticated: state.auth.isAuthenticated,
  }
}

const mapDispatchToProps = {
  loginUser,
}

export default connect(mapStateToProps, mapDispatchToProps)(Form)
