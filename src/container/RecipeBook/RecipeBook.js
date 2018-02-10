import React, {Component} from 'react'
import WebTile from '../../component/WebTile'
import classes from './RecipeBook.css'

class RecipeBook extends Component {
  state = {

  }
  menuHandler = (id) => {
    this.props.history.push('/'+id)
  }

  render() {
    return (
      <div style={{display: 'flex'}}>
        <aside className='menu' style={{marginTop: '100px', width: '80px'}}>
          <ul className='menu-list'>
            <li onClick={() => this.menuHandler('home')} style={{marginBottom: '40px', verticalAlign: 'middle'}}>
              <i className="fas fa-home" style={{fontSize: '40px', visibility: 'visible'}}></i>
              <p className={classes.Link}>{'home'}</p>
            </li>
            <li onClick={() => this.menuHandler('web')} style={{marginBottom: '40px', verticalAlign: 'middle'}}>
              <i className="fas fa-arrow-alt-circle-left" style={{fontSize: '40px', visibility: 'visible'}}></i>
              <p className={classes.Link}>{'projects'}</p>
            </li>
          </ul>
        </aside>
        <div style={{width: '90%', marginTop: '20px'}}>
          <WebTile
            title='Recipe Book'
          />
        </div>
      </div>
    )
  }
}

export default RecipeBook
