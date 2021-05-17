import { connect } from 'react-redux'
import CasesBoard from '../pages/CasesBoard/CasesBoard'
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

const ConnectedCasesBoard = connect(
  mapStateToProps,
  mapDispatchToProps
)(CasesBoard)

const nestedCasesBoard = () => {
  return (
    <NavBar
      title={'COVID-19'}
      subtitle={'Countries with the highest number of CASES in the last day'}
    >
      <ConnectedCasesBoard />
    </NavBar>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(nestedCasesBoard)
