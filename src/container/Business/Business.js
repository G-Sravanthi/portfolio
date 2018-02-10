import React, {Component} from 'react'
import WebProjects from '../../component/WebProjects'
import Menu from '../../UI/Menu'

class Business extends Component {
  state = {

  }
  menuHandler = (id) => {
    this.props.history.push('/'+id)
  }
  chosenHandler = (id) => {
    console.log(id);
  }
  render() {
    return (
      <div style={{color: 'red', width: '100vw'}}>
        <Menu
          one='web'
          two='interests'
          three='about'>
            <WebProjects clicked={(id) =>this.chosenHandler(id)}/>
          </Menu>
      </div>
    )
  }
}

export default Business
