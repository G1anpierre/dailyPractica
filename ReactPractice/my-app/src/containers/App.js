import React from 'react';

import Card from '../components/Card';
import '../assets/App.css';



class App extends React.Component {
  
  constructor(props) {
    super(props);

    this.state = {
      results: []
    }
  }




  render() {
    return (
      <>
        <h1> Hello World</h1>
        <Card />
      </>
    )
  }

}

export default App;
