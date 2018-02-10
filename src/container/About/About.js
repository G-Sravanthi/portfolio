import React, {Component} from 'react'
import Menu from '../../UI/Menu'

class About extends Component {
  state = {

  }
  menuHandler = (id) => {
    this.props.history.push('/'+id)
  }
  render() {
    return (
      <div style={{color: 'red', width: '100vw'}}>
        <Menu
          one='web'
          two='business'
          three='interests'
          clicked={(id) => this.menuHandler(id)}>

          </Menu>
      </div>
    )
  }
}

export default About
