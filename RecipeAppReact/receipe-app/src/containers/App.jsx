import React from 'react';
import '../assets/styles/App.scss';
import NavBar from '../components/NavBar';
import ReceipeList from '../components/ReceipeList';


class App extends React.Component {


  constructor(props) {
    super(props);

    this.state = {
      form : {
        title: '',
        instructions: '',
        ingredients: [],
        imageUrl: ''
      },
      GroupReceipe: [],
      isOpen: false
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      GroupReceipe: [].concat(...this.state.GroupReceipe, this.state.form)
    })
  }

  handleChange  = (event) => {
    this.setState({
      form: {...this.state.form, [event.target.name]: event.target.value}
    })
  }

  ingredientsHandleChange = (event) => {
    // split return an array, and where it sees the line makes the brake 
    // we have chosen [1] because we know that the is the index that we are searching for
    // and later casting the to a Number so it gets an integer rather than a string
    const index = Number(event.target.name.split('-')[1])
    const ingredients = this.state.form.ingredients.map((ing, i) => (
      i === index ? event.target.value : ing 
    ))

    this.setState({
      form : {
        // ingredient: event.target.value,
        ...this.state.form,
        ingredients: ingredients
      }
    })
  }

  handleFormOpen = () => {
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  handleAddInput = (e) => {
    console.log('I had Clicked add Imput');
    this.setState({

      

      form: {
        ...this.state.form,
        ingredients: [...this.state.form.ingredients, '']

        // ...this.state.form,
        // ingredients: [...this.state.form.ingredients, this.state.form.ingredient]
      }
    })
  }

  handleDelete = (index) => {
    console.log('I had click delete');
    console.log(index);
    let arr = [...this.state.GroupReceipe]
    arr = arr.filter( (element, i) => {
      return i !== index;
    }) ;
    console.log(arr);
    this.setState({
      GroupReceipe: arr
    })
  }

  render() {
    const {form: {ingredients},  isOpen } = this.state;

    return (
      <div className="App">
        <NavBar isFormOpen={this.handleFormOpen}/>
        <ReceipeList 
          isOpened={isOpen}
          numberInputs={ingredients}
          onSubmit={this.handleSubmit} 
          onChange={this.handleChange} 
          onIngredientsChange={this.ingredientsHandleChange}
          values={this.state.form}
          submitedValues={this.state.GroupReceipe}
          addInput={this.handleAddInput}
          onDelete={this.handleDelete}
          onClose={this.handleFormOpen}
        />
      </div>
    )
  }
}

export default App;
