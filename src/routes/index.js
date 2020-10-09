import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Explore from '../pages/explore/index'
import Tweet from '../pages/tweet'

export default function Routes () {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to='/route/explore'>App</Link>
          </li>
        </ul>

        <hr />
        <Switch>
          <Route exact path='/'>
            <Explore />
          </Route>
          <Route exact path='/route/explore'>
            <Explore />
          </Route>
          <Route exact path='/route/tweet/:id'>
            <Tweet />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
