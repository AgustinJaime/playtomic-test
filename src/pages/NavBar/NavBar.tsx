import React from 'react'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
// import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

import './NavBar.css'
import { Link, useLocation } from 'react-router-dom'

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     root: {
//       width: '90%',
//       padding: '20px',
//       backgroundColor: theme.palette.secondary.dark,
//       borderRadius: '5px',
//     },
//   })
// )

const NavBar = (props: any) => {
  const location = useLocation()
  const [value, setValue] = React.useState(location.pathname)

  const handleChange = (_: React.ChangeEvent<any>, newValue: string) => {
    setValue(newValue)
  }

  return (
    <div className={'navigation_bar'}>
      <Paper square>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
        >
          <Tab
            label="Dashboard"
            component={Link}
            to={'/dashboard'}
            value={'/dashboard'}
          />
          <Tab
            label="Settings"
            component={Link}
            to={'/settings'}
            value={'/settings'}
          />
        </Tabs>
      </Paper>
      <main className="main">
        <div className="main_title_container">
          <h1>{props.title}</h1>
          <h3>{props.subtitle}</h3>
        </div>
        {props.children}
      </main>
    </div>
  )
}

export default NavBar
