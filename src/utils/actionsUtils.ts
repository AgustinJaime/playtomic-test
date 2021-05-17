import { CountryData } from './../store/actions/dashboardActions'

export const formatData = (data: CountryData[]) => {
  const deaths = data
    .filter((country: CountryData) => country.NewDeaths > 100)
    .sort((a: CountryData, b: CountryData) =>
      a.NewDeaths < b.NewDeaths ? 1 : -1
    )

  const cases = data
    .filter((country: CountryData) => country.NewConfirmed > 100)
    .sort((a: CountryData, b: CountryData) =>
      a.NewConfirmed < b.NewConfirmed ? 1 : -1
    )

  return { deaths, cases }
}
