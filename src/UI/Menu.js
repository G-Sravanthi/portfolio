import React from 'react'
import classes from './Menu.css'

const Menu = (props) => {
  console.log(props);
  return(
    <div style={{display: 'flex'}}>
      <aside className='menu' style={{marginTop: '100px', width: '80px'}}>
        <ul className='menu-list'>
          <li onClick={() => props.clicked(props.one)} style={{marginBottom: '40px', verticalAlign: 'middle'}}>
            <i className="fas fa-dot-circle" style={{fontSize: '40px', visibility: 'visible'}}></i>
            <p className={classes.Link}>{props.one}</p>
          </li>
          <li onClick={() => props.clicked(props.two)} style={{marginBottom: '40px', verticalAlign: 'middle'}}>
            <i className="fas fa-dot-circle" style={{fontSize: '40px', visibility: 'visible'}}></i>
            <p className={classes.Link}>{props.two}</p>
          </li>
          <li onClick={() => props.clicked(props.three)} style={{marginBottom: '40px', verticalAlign: 'middle'}}>
            <i className="fas fa-dot-circle" style={{fontSize: '40px', visibility: 'visible'}}></i>
            <p className={classes.Link}>{props.three}</p>
          </li>
        </ul>
      </aside>
      <div style={{width: '90%', marginTop: '20px'}}>
        {props.children}
      </div>
    </div>
  )
}

export default Menu
