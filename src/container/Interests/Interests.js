import React, {Component} from 'react'
import Menu from '../../UI/Menu'

class Interests extends Component {
  menuHandler = (id) => {
    this.props.history.push('/'+id)
  }
  render() {
    return (
      <div style={{color: 'red'}}>
        <Menu
          one='web'
          two='business'
          three='about'
          clicked={(id) => this.menuHandler(id)}/>
      </div>
    )
  }
}

export default Interests
