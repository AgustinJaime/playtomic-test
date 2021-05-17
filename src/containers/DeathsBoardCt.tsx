import { connect } from 'react-redux'
import DeathsBoard from '../pages/DeathsBoard/DeathsBoard'
import NavBar from '../pages/NavBar/NavBar'
import { State } from '../store/reducers/reducers'
import { getData } from '../store/actions/dashboardActions'

const mapStateToProps = (state: State) => {
  return {
    countries: state.dashboard.countries,
    error: state.dashboard.error,
    pending: state.dashboard.pending,
  }
}

const mapDispatchToProps = {
  getData,
}

const ConnectedDeathsBoard = connect(
  mapStateToProps,
  mapDispatchToProps
)(DeathsBoard)

const nestedDeathsBoard = () => {
  return (
    <NavBar
      title={'COVID-19'}
      subtitle={'Countries with the highest number of DEATHS in the last day'}
    >
      <ConnectedDeathsBoard />
    </NavBar>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(nestedDeathsBoard)
