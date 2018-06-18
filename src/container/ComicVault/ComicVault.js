import React, {Component} from 'react'
import WebTile from '../../component/WebTile'
import classes from './ComicVault.css'

class ComicVault extends Component {
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
            title='Comic Vault'
            subtitle='Comic book collectors have lacked a system for digitally archiving and managing their collections.  This application queries the open-source API of Comic Vine, allowing users to save designated series, volumes, or issues to a customized archive. Each comic query from Comic Vine returns information that can be further edited by a user, granting collectors the ability to customize comic book attributes (character, summary, artists, ect.).  This project was the brainchild of Jeremy Harmon.'
            videoOne='https://www.youtube.com/embed/2Fpu8djntc4?modestbranding=1&autoplay=1&showinfo=0&controls=0&rel=0'
            videoTwo='https://www.youtube.com/embed/hJ-7zBn6g1A?modestbranding=1&autoplay=1&showinfo=0&controls=0&rel=0'
            link='http://comicvault.cool/'
            mobile='NO'
            gitHub='https://github.com/jharmon141/comic-vault'
            futureOne='Mobile Friendly'
            futureTwo='In App Comic Purchase'
          />
        </div>
      </div>
    )
  }
}

export default ComicVault
