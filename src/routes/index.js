import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
  // Link
} from 'react-router-dom'
import Explore from '../pages/explore/index'
import Tweet from '../pages/tweet'

export default function Routes () {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Explore />
        </Route>
        <Route exact path='/explore'>
          <Explore />
        </Route>
        <Route exact path='/tweet/:id'>
          <Tweet />
        </Route>
      </Switch>
    </Router>
  )
}
