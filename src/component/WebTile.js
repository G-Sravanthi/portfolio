import React from 'react'

const WebTile = (props) => {
  return (
    <div style={{padding: '10px', margin: '0 auto'}}>
      <div className="tile is-ancestor">
        <div className="tile is-vertical is-7">
          <div className="tile is-parent is-vertical">
            <article className="tile is-child notification">
              <p className="title">{props.title}</p>
              <p className="subtitle">subtitle</p>
            </article>
            <article className="tile is-child notification">
              <div className="content">
                <p className="title">Technologies</p>
                <p className="subtitle">SVG</p>
                <div className="content">
                </div>
              </div>
            </article>
          </div>
        </div>
        <div className="tile is-parent is-vertical">
          <article className="tile is-child notification">
            <div className="content">
              <p className="title">Videos</p>
              <p className="subtitle">iFrame</p>
              <div className="content">
              </div>
              <div className="content">
              </div>
            </div>
          </article>
          <article className="tile is-child notification">
            <div className="content">
              <p className="title">Videos</p>
              <p className="subtitle">iFrame</p>
              <div className="content">
              </div>
              <div className="content">
              </div>
            </div>
          </article>
        </div>
      </div>
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <article className="tile is-child notification">
            <div className="content">
              <p className="title">Link</p>
            </div>
          </article>
        </div>
      </div>
      <div className="tile is-ancestor">
        <div className="tile is-parent is-3">
          <article className="tile is-child notification">
            <div className="content">
              <p className="title">Mobile Friendly</p>
              <p className="subtitle">ICON</p>
              <div className="content">
              </div>
            </div>
          </article>
        </div>
        <div className="tile is-parent is-3">
          <article className="tile is-child notification">
            <div className="content">
              <p className="title">GitHub</p>
              <p className="subtitle">ICON</p>
              <div className="content">
              </div>
            </div>
          </article>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child notification">
            <div className="content">
              <p className="title">Future Iteration</p>
              <p className="subtitle">Changes</p>
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
