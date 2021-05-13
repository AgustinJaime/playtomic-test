import { connect } from 'react-redux'
import Settings from '../pages/Settings/Settings'
import NavBar from '../pages/NavBar/NavBar'

const mapStateToProps = (state: any) => {
  return {
    ...state,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    dispatch,
  }
}

const nestedSettings = () => {
  return (
    <NavBar title={'SETTINGS'} subtitle={'Adjust your information'}>
      <Settings />
    </NavBar>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(nestedSettings)
