import React from 'react'
import classes from './WebProjects.css'

const WebProjects = (props) => {
  return (
    <div style={{margin: '0 60px'}}>
      <main className="tile is-ancestor">
        <div className="tile is-parent">
          <article className="tile is-child notification" style={{height: '200px', padding: '2.25rem .5rem', background: '#000000', filter: 'drop-shadow(0 3px 5px #3D3D3D)'}}>
            <div className="content" style={{position: 'relative',paddingBottom: '63%'}}>
              <iframe title='recipe-book' style={{position: 'absolute',top: '0', left: '0',width: '100%', height: '100%'}} width="100%" height="100%" src="https://www.youtube.com/embed/aQMWzccmMHk?modestbranding=1&autoplay=1&loop=1&playlist=aQMWzccmMHk&showinfo=0&controls=0&rel=0" frameBorder="0" allowFullScreen>

              </iframe>
            </div>
          </article>
        </div>
        <div className="tile is-parent is-8">
          <article onClick={() => {props.clicked('recipe-book')}} className="tile is-child" style={{background: 'none', color: '#3D3D3D', cursor: 'pointer'}}>
            <p className="title" style={{color: '#551E2B'}}>Recipe Book</p>
            <p className="subtitle" style={{color: '#4A4A4A', fontWeight: '600'}}>Build and Store Recipes</p>
            <div className="content">
              <p><strong>This application allows users to build and store their favorite recipes.  Once ingredients and cooking instructions are saved, a user's recipe is stored alongside other favorite recipes.</strong></p>
            </div>
          </article>
        </div>
      </main>
      <main className="tile is-ancestor">
        <div className="tile is-parent">
          <article
            className="tile is-child notification"
            style={{height: '200px', padding: '2.25rem .5rem', background: '#000000', filter: 'drop-shadow(0 3px 5px #3D3D3D)'}}>
            <div className="content" style={{position: 'relative',paddingBottom: '63%'}}>
              <iframe title='comic-vault' style={{position: 'absolute',top: '0', left: '0',width: '100%', height: '100%'}} width="100%" height="100%" src="https://www.youtube.com/embed/2Fpu8djntc4?modestbranding=1&autoplay=1&loop=1&playlist=2Fpu8djntc4&showinfo=0&controls=0&rel=0" frameBorder="0" allowFullScreen>

              </iframe>
            </div>
          </article>
        </div>
        <div className="tile is-parent is-8">
          <article onClick={() => {props.clicked('comic-vault')}} className="tile is-child" style={{background: 'none', color: '#3D3D3D', cursor: 'pointer'}}>
            <p className="title" style={{color: '#551E2B'}}>Comic Vault</p>
            <p className="subtitle" style={{color: '#4A4A4A', fontWeight: '600'}}>Discover and Archive Comics</p>
            <div className="content">
              <p><strong>This service allows users to search an open-source comic book API for series, volumes, issues, and characters to be stored to a user's vault.  Comic Vault helps users archive their comic collections and share with other Comic Vault users.</strong></p>
            </div>
          </article>
        </div>
      </main>
      <main className="tile is-ancestor">
        <div className="tile is-parent">
          <article  className="tile is-child notification" style={{height: '200px', padding: '2.25rem .5rem', background: '#000000', filter: 'drop-shadow(0 3px 5px #3D3D3D)'}}>
            <div className="content" style={{position: 'relative',paddingBottom: '63%'}}>
              <iframe title='writing-portfolio' style={{position: 'absolute',top: '0', left: '0',width: '100%', height: '100%'}} width="100%" height="100%" src="https://www.youtube.com/embed/qe79XfNexxU?modestbranding=1&autoplay=1&loop=1&playlist=qe79XfNexxU&showinfo=0&controls=0&rel=0" frameBorder="0" allowFullScreen>

              </iframe>
            </div>
          </article>
        </div>
        <div className="tile is-parent is-8">
          <article onClick={() => {props.clicked('writing-portfolio')}} className="tile is-child" style={{background: 'none', color: '#3D3D3D', cursor: 'pointer'}}>
            <p className="title" style={{color: '#551E2B'}}>Writing Portfolio</p>
            <p className="subtitle" style={{color: '#4A4A4A', fontWeight: '600'}}>Showcase of Non-Fiction Creative Writing</p>
            <div className="content">
              <p><strong>This website showcases the work of Miranda Ruby Morgan, a writer specializing in non-fiction.  The portfolio presents Miranda's writing and professional accomplishments through an intuitive, easy to navigate single-page website.</strong></p>
            </div>
          </article>
        </div>
      </main>
    </div>
  )
}

export default WebProjects
