import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
  // Link
} from 'react-router-dom'
import Explore from '../pages/explore/index'
import Search from '../pages/search/index'
import Tweet from '../pages/tweet'
import NotFound from '../pages/404'

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
        <Route exact path='/search'>
          <Search />
        </Route>
        <Route exact path='/tweet/:id'>
          <Tweet />
        </Route>
        <Route exact path='/404'>
          <NotFound />
        </Route>
      </Switch>
    </Router>
  )
}
