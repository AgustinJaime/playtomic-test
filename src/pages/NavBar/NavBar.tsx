import React, { useState } from 'react'
import Paper from '@material-ui/core/Paper'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { logoutUser } from '../../store/actions'
// import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'

import './NavBar.css'
import { Link, useLocation } from 'react-router-dom'
import { Button } from '@material-ui/core'
import { useDispatch } from 'react-redux'

interface NavBarProps {
  title: string
  subtitle: string
  children: React.ReactNode
}

const NavBar = (props: NavBarProps) => {
  const dispatch = useDispatch()
  const location = useLocation()
  const [value, setValue] = useState(location.pathname)

  const handleChange = (_: React.ChangeEvent<unknown>, newValue: string) => {
    setValue(newValue)
  }

  const handleClick = () => {
    dispatch(logoutUser())
  }

  return (
    <div className={'container'}>
      <div className="navigation_container">
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
        <Button color="primary" variant="contained" onClick={handleClick}>
          Log-out
        </Button>
      </div>
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
