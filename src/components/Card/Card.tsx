import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
})

const CountryCard = (props: any) => {
  const { country } = props
  const classes = useStyles()
  const bull = <span className={classes.bullet}>•</span>
  console.log(country)
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography variant="h5" component="h2">
          {country.Country}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Total cases confirmed: {country.TotalConfirmed}
        </Typography>
        <Typography variant="body2" component="p">
          New Deaths: {country.NewDeaths}
          <br />
          Total Deaths: {country.TotalDeaths}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}

export default CountryCard
