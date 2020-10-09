import React from 'react'
import logo from './logo.svg'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

function App () {
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default function BasicExample () {
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
            <App />
          </Route>
          <Route exact path='/route/explore'>
            <App />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}