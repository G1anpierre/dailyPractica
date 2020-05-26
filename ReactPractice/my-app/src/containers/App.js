import React from 'react';

import CardGroup from '../components/CardGroup';
import '../assets/App.scss';



class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      nextPage: 1,
      loading: true,
      error: null,
      data: {
        results: []
      }
    }
  }

  componentDidMount() {
    this.fetchCharacters();
  }

  fetchCharacters = async () => {
    this.setState({ loading: true, error: null});
    
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${this.state.nextPage}`);
      const data = await response.json();

      this.setState({
        nextPage: this.state.nextPage + 1,
        loading: false,
        data: {
          info: data.info,
          // results:[].concat(this.state.data.results, data.results)
          results: [...this.state.data.results, ...data.results]
        },
      })
    
    } catch (error) {
      console.error(error);
      this.setState({
        error: true
      })
      
    }
  }

  render() {

   if(this.state.error) {
     return `Error: ${this.state.error.message}`;
   }

    return (
      <>
        <h1> Hello World</h1>
        <CardGroup results={this.state.data.results}/>
        
        
        {this.state.loading && (
          <h1>Loading ...</h1>
        )}

        {!this.state.loading && (
          <div className="d-flex justify-content-center">
             <button className="btn btn-primary" onClick={() => this.fetchCharacters()}>Load More</button>
          </div>
        )}
      </>
    )
  }

}

export default App;
