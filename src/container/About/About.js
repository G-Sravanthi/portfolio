import React, {Component} from 'react'
import classes from './About.css'

class About extends Component {
  state = {

  }
  menuHandler = (id) => {
    this.props.history.push('/'+id)
  }
  render() {
    return (
      <div className={classes.About}>
        <nav onClick={() => this.menuHandler('home')} style={{marginBottom: '40px', verticalAlign: 'middle'}}>
          <i className="fas fa-home" style={{fontSize: '40px', visibility: 'visible', marginLeft: '15px'}}></i>
          <p className={classes.Link} style={{marginLeft: '18px'}}>{'home'}</p>
        </nav>
        <div className={classes.Images}>
          {/* <h1>I have no special talents. I am only passionately curious.</h1>
          <h2>-Albert Einstein</h2> */}
        </div>
        <div className={classes.InfoTitle}>
          <div className={classes.Arrow}>
            <a href='https://www.linkedin.com/in/jonathon-luckett-1742185a/' target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
            <i className="fas fa-arrow-down"></i>
            <a href='https://github.com/JRLuckett' target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github-square"></i>
            </a>
          </div>
          <p>
            Curiosity and love for learning have lead me to create a life that may be seen as non-traditional.
          </p>
        </div>
        <div className={classes.Info}>
          <p>
             My insistence on ingenuity has resulted in somewhat diverging paths. Yet, each seemingly separate venture has been spurred by the desire to be a part of an ambitious objective, one that transcends myself.
          </p>
          <br/>
          <p>
            The time I spent guiding research, authentication, acquisitions and the sale of globally singular cultural objects in the Southwest, the three years I invested as a cofounder of a technology company in the Bay Area, as well as and the recent formation of a 501(c)(3) focused on the advocacy and research of cultural "Orphaned Objects" to better understand humanity's ancient history and formative belief systems, all revolve around my passion to stimulate growth in myself and positive change in my community.
          </p>
          <br/>
          <p>Last year, I entered the world of web development to further my understanding of aesthetics and intuitive design, while continuing to explore the progressive technologies that shape our modern lives.</p>
          <br/>
          <p>Since graduating from the University of Texas's Full Stack Web Development program, I've continued down the programming rabbit hole.  I've taught myself both React and Vue, and am currently learning Redux, GraphQL, AuthO, Apollo and Thunk. Although I feel the urge to throw my computer at times, my journey into programming has been hugely rewarding and I eagerly anticipate what opportunities lie ahead.</p>
        </div>
      </div>
    )
  }
}

export default About
