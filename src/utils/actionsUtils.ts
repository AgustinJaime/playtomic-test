import { CountryData } from './../store/actions/dashboardActions'

export const formatData = (data: CountryData[]) => {
  return data
    .filter((country: CountryData) => country.NewDeaths > 100)
    .sort((a: CountryData, b: CountryData) =>
      a.NewDeaths < b.NewDeaths ? 1 : -1
    )
}
