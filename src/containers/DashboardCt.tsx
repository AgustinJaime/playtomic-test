import { connect } from 'react-redux'
import Dashboard from '../pages/Dashboard/Dashboard'
import NavBar from '../pages/NavBar/NavBar'

const mapStateToProps = (state: any) => {
  return {
    countries: state.dashboard.countries,
    error: state.dashboard.error,
    pending: state.dashboard.pending,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    dispatch,
  }
}

const ConnectedDashboard = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard)

const nestedDashboard = () => {
  return (
    <NavBar title={'SETTINGS'} subtitle={'Adjust your information'}>
      <ConnectedDashboard />
    </NavBar>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(nestedDashboard)
