import React, {Component} from 'react'
import WebProjects from '../../component/WebProjects'
import classes from './Web.css'

class Web extends Component {
  menuHandler = (id) => {
    this.props.history.push('/'+id)
  }
  chosenHandler = (id) => {
    console.log(this.props.history);
    this.props.history.push('/'+id)
  }
  render() {
    return (
      <div style={{display: 'flex'}}>
        <aside className='menu' style={{marginTop: '100px', width: '80px'}}>
          <ul className='menu-list'>
            <li onClick={() => this.menuHandler('business')} style={{marginBottom: '40px', verticalAlign: 'middle'}}>
              <i className="fas fa-dot-circle" style={{fontSize: '40px', visibility: 'visible'}}></i>
              <p className={classes.Link}>{'business'}</p>
            </li>
            <li onClick={() => this.menuHandler('interests')} style={{marginBottom: '40px', verticalAlign: 'middle'}}>
              <i className="fas fa-dot-circle" style={{fontSize: '40px', visibility: 'visible'}}></i>
              <p className={classes.Link}>{'interests'}</p>
            </li>
            <li onClick={() => this.menuHandler('about')} style={{marginBottom: '40px', verticalAlign: 'middle'}}>
              <i className="fas fa-dot-circle" style={{fontSize: '40px', visibility: 'visible'}}></i>
              <p className={classes.Link}>{'about'}</p>
            </li>
          </ul>
        </aside>
        <div style={{width: '90%', marginTop: '20px'}}>
          <WebProjects clicked={(id) =>this.chosenHandler(id)}/>
        </div>
      </div>
    )
  }
}

export default Web
