import { LinearProgress } from '@material-ui/core'
import React, { useEffect } from 'react'
import CountryCard from '../../components/Card/Card'
import { NewData, CountryData } from '../../store/actions/dashboardActions'
import '../CasesBoard/CasesBoard.css'

interface DashboardProps {
  countries?: NewData
  pending: boolean
  error: boolean
  getData(): void
}

const Dashboard: React.FC<DashboardProps> = (props: DashboardProps) => {
  const { countries, pending, getData } = props
  useEffect(() => {
    !(countries?.cases.length || countries?.deaths.length) && getData()
  }, [])

  return pending ? (
    <LinearProgress />
  ) : (
    <div className="casesBoard_container">
      {countries &&
        countries.deaths.map((country: CountryData) => {
          const { Country, NewDeaths, TotalDeaths } = country
          return (
            <CountryCard
              name={Country}
              newDeaths={NewDeaths}
              totalDeaths={TotalDeaths}
            />
          )
        })}
    </div>
  )
}

export default Dashboard
