import { LinearProgress } from '@material-ui/core'
import React, { useEffect } from 'react'
import CountryCard from '../../components/Card/Card'
import { CountryData } from '../../store/actions/dashboardActions'
import './Dashboard.css'

interface DashboardProps {
  countries?: CountryData[]
  pending: boolean
  error: boolean
  getData(): void
}

const Dashboard: React.FC<DashboardProps> = (props: DashboardProps) => {
  const { countries, pending, getData } = props
  useEffect(() => {
    ;(!countries || !countries.length) && getData()
  }, [])

  return pending ? (
    <LinearProgress />
  ) : (
    <div className="dashBoard_container">
      {countries &&
        countries.map((country: CountryData) => (
          <CountryCard country={country} />
        ))}
    </div>
  )
}

export default Dashboard
