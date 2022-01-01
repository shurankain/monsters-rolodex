import {Component} from 'react'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      monsters: []
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(usersArr => this.setState({ monsters: usersArr}))
  }

  render() {
    return (
      <div className='App'>
        {
          this.state.monsters.map(monster =>
            <h1 key={monster.id}>{monster.name}</h1>)
        }
      </div>
    )
  }
}

export default App
