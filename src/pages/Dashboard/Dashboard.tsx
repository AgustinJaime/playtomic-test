import React, { useEffect } from 'react'
import CountryCard from '../../components/Card/Card'
import { getData } from '../../store/actions/dashboardActions'
import './Dashboard.css'

const Dashboard: React.FC = (props: any) => {
  const { dispatch, countries } = props
  useEffect(() => {
    dispatch(getData())
  }, [])

  return (
    <div className="dashBoard">
      <div className="dashBoard_container">
        <h1>I'm Dashboard</h1>
        {countries.map((country: any) => {
          return <CountryCard country={country} />
        })}
      </div>
    </div>
  )
}

export default Dashboard
