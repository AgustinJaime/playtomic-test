import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'

interface CardProps {
  name: string
  newConfirmed?: number
  totalConfirmed?: number
  newDeaths?: number
  totalDeaths?: number
}

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  p: {
    margin: 0,
  },
  pos: {
    marginBottom: 12,
  },
})

const CountryCard = (props: CardProps) => {
  const classes = useStyles()
  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography variant="h5" component="h2">
          {props.name}
        </Typography>
        <Typography variant="body2" component="p">
          {props.newConfirmed
            ? `New Cases: ${props.newConfirmed}`
            : `New Deaths: ${props.newDeaths}`}
        </Typography>
        <Typography variant="body2" component="p">
          {props.totalConfirmed
            ? `Total Cases: ${props.totalConfirmed}`
            : `Total Deaths: ${props.totalDeaths}`}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default CountryCard
