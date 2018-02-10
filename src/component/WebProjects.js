import React from 'react'

const WebProjects = (props) => {
  console.log(props);
  return (
    <div style={{margin: '0 60px'}}>
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <article className="tile is-child notification" style={{height: '200px', padding: '2.25rem .5rem', background: '#000000', filter: 'drop-shadow(0 3px 5px #3D3D3D)'}}>
            <div className="content" style={{position: 'relative',paddingBottom: '63%'}}>
              <iframe title='recipe-book' style={{position: 'absolute',top: '0', left: '0',width: '100%', height: '100%'}} width="100%" height="100%" src="https://www.youtube.com/embed/aQMWzccmMHk?modestbranding=1&autoplay=1&loop=1&playlist=aQMWzccmMHk&showinfo=0&controls=0&rel=0" frameBorder="0" allowFullScreen>

              </iframe>
            </div>
          </article>
        </div>
        <div className="tile is-parent is-8">
          <article onClick={() => {props.clicked('recipe-book')}} className="tile is-child box" style={{background: '#551E2B', color: '#89CDD5', filter: 'drop-shadow(0 3px 5px #3D3D3D)', cursor: 'pointer'}}>
            <p className="title" style={{color: '#137D8F'}}>Recipe Book</p>
            <p className="subtitle" style={{color: '#89CDD5'}}>Building and Store Recipes</p>
            <div className="content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
            </div>
          </article>
        </div>
      </div>
      <div className="tile is-ancestor">
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
          <article
            onClick={() => {props.clicked('comic-vault')}}
            className="tile is-child box"
            style={{background: '#551E2B', color: '#89CDD5', filter: 'drop-shadow(0 3px 5px #3D3D3D)', cursor: 'pointer'}}>
            <p className="title" style={{color: '#137D8F'}}>Comic Vault</p>
            <p className="subtitle" style={{color: '#89CDD5'}}>Discover and Archive Comics</p>
            <div className="content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
            </div>
          </article>
        </div>
      </div>
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <article  className="tile is-child notification" style={{height: '200px', padding: '2.25rem .5rem', background: '#000000', filter: 'drop-shadow(0 3px 5px #3D3D3D)'}}>
            <div className="content" style={{position: 'relative',paddingBottom: '63%'}}>
              <iframe title='writing-portfolio' style={{position: 'absolute',top: '0', left: '0',width: '100%', height: '100%'}} width="100%" height="100%" src="https://www.youtube.com/embed/qe79XfNexxU?modestbranding=1&autoplay=1&loop=1&playlist=qe79XfNexxU&showinfo=0&controls=0&rel=0" frameBorder="0" allowFullScreen>

              </iframe>
            </div>
          </article>
        </div>
        <div className="tile is-parent is-8">
          <article onClick={() => {props.clicked('writing-portfolio')}} className="tile is-child box" style={{background: '#551E2B', color: '#89CDD5', filter: 'drop-shadow(0 3px 5px #3D3D3D)', cursor: 'pointer'}}>
            <p className="title" style={{color: '#137D8F'}}>MRM Portfolio</p>
            <p className="subtitle" style={{color: '#89CDD5'}}>Non-Fiction Creative Writing</p>
            <div className="content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}

export default WebProjects
