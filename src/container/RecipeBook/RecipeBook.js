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
            subtitle='Recipe Book helps users easily record their favorite recipes in a sequential process.  First a user is prompted to add all recipe ingredients, including the amount and unit measurement of each recorded ingredient. Afterwards, step-by-step directions are saved to the recipe along with preparation and cook time.'
            videoOne='https://www.youtube.com/embed/aQMWzccmMHk?modestbranding=1&autoplay=1&showinfo=0&controls=0&rel=0'
            videoTwo='https://www.youtube.com/embed/3UVuNp9ItM8?modestbranding=1&autoplay=1&showinfo=0&controls=0&rel=0'
            link='https://recipe-builder-7bfb0.firebaseapp.com/'
            mobile='Yes'
            gitHub='https://github.com/JRLuckett/recipe-book'
            futureOne='Sign-in through AuthO'
            futureTwo='Add nutrition data from Edmam API'
          />
        </div>
      </div>
    )
  }
}

export default RecipeBook
