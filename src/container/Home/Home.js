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
            <h1 className={classes.Title}>Projects</h1>
          </Link>
        </LandingTile>
        {/* <LandingTile>
          <Link to='/business'>
            <h1 className={classes.Title}>Business</h1>
          </Link>
        </LandingTile> */}
        <LandingTile>
          <Link to='/about'>
            <h1 className={classes.Title}>About</h1>
          </Link>
        </LandingTile>
      </div>
    )
  }
}

export default Home
