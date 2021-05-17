import { LinearProgress } from '@material-ui/core'
import React, { useEffect } from 'react'
import CountryCard from '../../components/Card/Card'
import { NewData, CountryData } from '../../store/actions/dashboardActions'
import './CasesBoard.css'

interface DashboardProps {
  countries?: NewData
  pending: boolean
  error: boolean
  getData(): void
}

const CasesBoard: React.FC<DashboardProps> = (props: DashboardProps) => {
  const { countries, pending, getData } = props
  useEffect(() => {
    !(countries?.cases.length || countries?.deaths.length) && getData()
  }, [])

  return pending ? (
    <LinearProgress />
  ) : (
    <div className="casesBoard_container">
      {countries &&
        countries.cases.map((country: CountryData) => {
          const { Country, NewConfirmed, TotalConfirmed, ID } = country
          return (
            <CountryCard
              key={ID}
              name={Country}
              newConfirmed={NewConfirmed}
              totalConfirmed={TotalConfirmed}
            />
          )
        })}
    </div>
  )
}

export default CasesBoard
