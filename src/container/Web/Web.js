import React, {Component} from 'react'
import WebProjects from '../../component/WebProjects'
import Menu from '../../UI/Menu'

class Web extends Component {
  state = {

  }
  menuHandler = (id) => {
    this.props.history.push('/'+id)
  }
  render() {
    return (
      <div style={{color: 'red', width: '100vw'}}>
        <Menu
          one='business'
          two='interests'
          three='about'
          clicked={(id) => this.menuHandler(id)}>
            <WebProjects />
          </Menu>
      </div>
    )
  }
}

export default Web
