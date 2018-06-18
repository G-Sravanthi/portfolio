import React from 'react'
import classes from './WebTile.css'

const WebTile = (props) => {
  let techOne = null
  let techTwo = null
  let techThree = null
  if(props.title === 'Comic Vault') {
    techOne = (
      <a href='https://vuejs.org/' target="_blank" rel="noopener noreferrer">
        <img alt='VueJS' style={{width: '170px'}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Vue.js_Logo.svg/1024px-Vue.js_Logo.svg.png'/>
      </a>
    )
    techTwo = (
      <a href='https://www.graph.cool/' target="_blank" rel="noopener noreferrer">
        <img alt='GraphCool' style={{width: '150px'}} src='http://graphcool-random.s3.amazonaws.com/images/logo-green.svg'/>
      </a>
    )
    techThree = (
      <a href='https://www.apollographql.com/' target="_blank" rel="noopener noreferrer">
        <img alt='Apollo' style={{width: '150px'}} src='https://jaydenseric.com/static/logos/apollo.svg'/>
      </a>
    )
  }
  if(props.title === 'Recipe Book') {
    techOne = (
      <a href='https://reactjs.org/' target="_blank" rel="noopener noreferrer">
        <img alt='ReactJS' style={{width: '200px'}} src='https://sandstorm.de/_Resources/Persistent/3285416e8503b2c8354c321bcd690cf550b8b2d3/React-Logo.svg'/>
      </a>
    )
    techTwo = (
      <a href='https://firebase.google.com/' target="_blank" rel="noopener noreferrer">
        <img alt='FireBase' style={{width: '200px'}} src='https://cdn.worldvectorlogo.com/logos/firebase-1.svg'/>
      </a>
    )
  }
  if(props.title === 'Writing Portfolio') {
    techOne = (
      <a href='https://vuejs.org/' target="_blank" rel="noopener noreferrer">
        <img alt='VueJS' style={{width: '200px', display: 'block'}} src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Vue.js_Logo.svg/1024px-Vue.js_Logo.svg.png'/>
      </a>
    )
    techTwo = (
      <a href='https://bulma.io/' target="_blank" rel="noopener noreferrer">
        <img alt='Bulma' style={{width: '300px'}} src='https://bulma.io/images/bulma-logo.png'/>
      </a>
    )
  }
  return (
    <div className={classes.Tile} style={{padding: '10px', margin: '0 auto'}}>
      <div className="tile is-ancestor">
        <div className="tile is-vertical is-7">
          <div className="tile is-parent is-vertical">
            <article className="tile is-child notification" style={{background: 'none', color: '#3D3D3D'}}>
              <p className="title" style={{color: '#551E2B'}}>{props.title}</p>
              <p className="subtitle" style={{color: '#4A4A4A', fontWeight: '600', textAlign: 'left', fontSize: '17px'}}>{props.subtitle}</p>
            </article>
            <article className="tile is-child notification" style={{background: 'none'}}>
              <div className="content">
                <figure style={{display: 'inline-block', margin: '2px'}} className="image is-2by2">
                  {techOne}
                </figure>
                <figure style={{display: 'inline-block', margin: '2px'}} className="image is-2by2">
                  {techTwo}
                </figure>
                <figure style={{display: 'inline-block', margin: '2px'}} className="image is-2by2">
                  {techThree}
                </figure>
              </div>
            </article>
          </div>
        </div>
        <div className="tile is-parent is-vertical">
          <article className="tile is-child notification" style={{background: 'RGBA(74, 74, 74, .5)'}}>
            <div className="content" style={{position: 'relative',paddingBottom: '63%'}}>
              <iframe title='writing-portfolio' style={{position: 'absolute',top: '0', left: '0',width: '100%', height: '100%'}} width="100%" height="100%" src={props.videoOne} frameBorder="0" allowFullScreen>

              </iframe>
            </div>
          </article>
          <article className="tile is-child notification" style={{background: 'RGBA(74, 74, 74, .5)'}}>
            <div className="content">
              <div className="content" style={{position: 'relative',paddingBottom: '63%'}}>
                <iframe title='writing-portfolio' style={{position: 'absolute',top: '0', left: '0',width: '100%', height: '100%'}} width="100%" height="100%" src={props.videoTwo} frameBorder="0" allowFullScreen>

                </iframe>
              </div>
            </div>
          </article>
        </div>
      </div>
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <article className="tile is-child notification" style={{background: 'RGBA(85, 30, 43, .8)'}}>
            <div className="content">
              <a href={props.link} target="_blank" style={{textDecoration: 'none', color: '#F1E3A0'}}>
                <h1 className="title" style={{fontSize: '90px', margin: '0', display: 'inline-block'}}><p style={{display: 'inline-block', fontSize: '40px'}}>www.</p>{props.title}<p style={{display: 'inline-block', fontSize: '40px'}}>.com</p></h1>
              </a>
            </div>
          </article>
        </div>
      </div>
      <div className="tile is-ancestor">
        <div className="tile is-parent is-3">
          <article className="tile is-child notification" style={{background: 'RGBA(19, 125, 143, .5)'}}>
            <div className="content" style={{display: 'inline-block'}}>
              <p className="title" style={{color: '#E04E27'}}>{props.mobile}</p>
              <p className="subtitle"><strong>Mobile Friendly</strong></p>
              <div className="content" >
                  <i className="fas fa-mobile-alt fa-3x" style={{margin: '2px', color: '#E04E27'}}></i>
                  <i className="fas fa-tablet-alt fa-3x" style={{margin: '2px', color: '#E04E27'}}></i>
              </div>
            </div>
          </article>
        </div>
        <div className="tile is-parent is-3">
          <article className="tile is-child notification" style={{background: 'RGBA(19, 125, 143, .5)', color: '#E04E27'}}>
            <div className="content">
              <div className="content">
                <a href={props.gitHub} target="_blank">
                  <i className="fab fa-github fa-8x"></i>
                </a>
              </div>
            </div>
          </article>
        </div>
        <div className="tile is-parent is-6">
          <article className="tile is-child notification" style={{background: 'none', color: '#3D3D3D'}}>
            <div className="content">
              <p className="title" style={{color: '#551E2B'}}>Future Iteration</p>
              <p className="subtitle" style={{color: '#4A4A4A', fontWeight: '600'}}>{props.futureOne}</p>
              <p className="subtitle" style={{color: '#4A4A4A', fontWeight: '600'}}>{props.futureTwo}</p>
              <div className="content">
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}

export default WebTile
