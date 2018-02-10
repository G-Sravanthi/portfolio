import React from 'react'
import classes from './LandingTile.css'

const LandingTile = (props) => {
  return (
    <div className={classes.Tile}>
      {props.children}
    </div>
  )
}
export default LandingTile
