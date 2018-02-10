import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import LandingTile from '../../component/LandingTile'
import classes from './Home.css'

class Home extends Component {

  render() {
    return (
      <div className={classes.Home}>
        <LandingTile>
          <Link to='/web'>
            <h1 className={classes.Title}>Web</h1>
          </Link>
        </LandingTile>
        <LandingTile>
          <Link to='/business'>
            <h1 className={classes.Title}>Business</h1>
          </Link>
        </LandingTile>
        <LandingTile>
          <Link to='/interests'>
            <h1 className={classes.Title}>Interests</h1>
          </Link>
        </LandingTile>
      </div>
    )
  }
}

export default Home
