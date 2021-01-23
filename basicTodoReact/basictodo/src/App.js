import React from 'react';
import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      oneTodo: '',
      todos: []
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  handleClick = _ => {
    console.log('I was Clicked');
  }



  handleSubmit = (event) => {
    event.preventDefault(); 
    console.log('I was submitet');
    console.log(this.state.oneTodo);
    this.setState({
      todos: [...this.state.todos, this.state.oneTodo],
      oneTodo: ''
    })

  }


  render() {

    
    
    return (
          <div className="App">
            <section>
              <form onSubmit={this.handleSubmit}>
                <h1 className="App__title">Simple Todo App</h1>
                <input className="App__input" 
                  value={this.state.oneTodo} 
                  name="oneTodo" 
                  onChange={this.handleChange} 
                  placeholder="What needs to be done?"
                /> 
                
                <button 
                onClick = {this.handleClick}
                type = "submit"
                className="App__save">SAVE</button>
              </form>
            </section>
            <section>
              <ul>
              {this.state.todos.map( element => (
                <li key={element} >{element}</li>
              ))
              }
              </ul>
            </section>
          </div>
      );
  }
}

export default App;
