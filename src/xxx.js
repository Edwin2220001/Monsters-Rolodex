import { Component } from 'react';

import './App.css';

class App extends Component {

  constructor() {
    super();

    this.state = {
      searchField: '',
      monsters: [],
    };
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return {monsters: users};
          },
          () => {
            console.log(this.state);
          }
        )   
      );
  }

  render() {
  
    return(
      <div className='App'>

        <h1 className='app-title'>Monsters Rolodex</h1>
        <input
          className= 'search-box'
          type= 'search'
          placeholder= 'search monsters'
          onChange= {(event) => {
            console.log(event.target.value);
          }}
        />
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}
export default App;