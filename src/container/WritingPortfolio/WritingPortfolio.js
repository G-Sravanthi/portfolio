import React, {Component} from 'react'
import WebTile from '../../component/WebTile'
import classes from './WritingPortfolio.css'

class WritingPortfolio extends Component {
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
            title='Writing Portfolio'
            videoOne='https://www.youtube.com/embed/qe79XfNexxU?modestbranding=1&end=20&autoplay=1&showinfo=0&controls=0&rel=0'
            videoTwo='https://www.youtube.com/embed/qe79XfNexxU?modestbranding=1&start=21&end=41&autoplay=1&showinfo=0&controls=0&rel=0'
            subtitle='Miranda Ruby Morgan is a Non-Fiction Creative Writing MFA candidate at the University of Montana.  Her writing portfolio website was designed to showcase her current writing in an easy and accessible manner.'
            link='http://miranda-ruby-morgan.s3-website.us-east-2.amazonaws.com/'
            mobile='YES'
            gitHub='https://github.com/JRLuckett/Miranda-Writing-Portfolio'
            futureOne='Allow for PDF Download'
            futureTwo='Update UI such as Modal Design'
          />
        </div>
      </div>
    )
  }
}

export default WritingPortfolio
