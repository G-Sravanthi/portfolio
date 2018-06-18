import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom'
// import Interests from './container/Interests/Interests'
// import Business from './container/Business/Business'
import Web from './container/Web/Web'
import RecipeBook from './container/RecipeBook/RecipeBook'
import WritingPortfolio from './container/WritingPortfolio/WritingPortfolio'
import ComicVault from './container/ComicVault/ComicVault'
import About from './container/About/About'
import Home from './container/Home/Home'
import classes from './App.css';

class App extends Component {
  render() {
    return (
      <div className={classes.App}>
        <div className={classes.Filter}>
          <Switch>
            {/* <Route path='/interests' component={Interests}/>
            <Route path='/business' component={Business}/> */}
            <Route path='/web' component={Web}/>
            <Route path='/recipe-book' component={RecipeBook} />
            <Route path='/writing-portfolio' component={WritingPortfolio} />
            <Route path='/comic-vault' component={ComicVault} />
            <Route path='/about' component={About}/>
            <Route path='/' component={Home}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
