import React from 'react';
import Card from './Card';
import './App.scss';


const CardState = {
  HIDING: 0,
  SHOWING: 1,
  MATCHING: 2
}


class App extends React.Component {


  constructor(props) {
    super(props);

  
      const cards = [
        {id: 0, cardState: CardState.HIDING, backgroundColor: 'red'},
        {id: 1, cardState: CardState.HIDING, backgroundColor: 'red'},
        {id: 2, cardState: CardState.HIDING, backgroundColor: 'navy'},
        {id: 3, cardState: CardState.HIDING, backgroundColor: 'navy'},
        {id: 4, cardState: CardState.HIDING, backgroundColor: 'green'},
        {id: 5, cardState: CardState.HIDING, backgroundColor: 'green'},
        {id: 6, cardState: CardState.HIDING, backgroundColor: 'yellow'},
        {id: 7, cardState: CardState.HIDING, backgroundColor: 'yellow'},
        {id: 8, cardState: CardState.HIDING, backgroundColor: 'black'},
        {id: 9, cardState: CardState.HIDING, backgroundColor: 'black'},
        {id: 10, cardState: CardState.HIDING, backgroundColor: 'purple'},
        {id: 11, cardState: CardState.HIDING, backgroundColor: 'purple'},
        {id: 12, cardState: CardState.HIDING, backgroundColor: 'pink'},
        {id: 13, cardState: CardState.HIDING, backgroundColor: 'pink'},
        {id: 14, cardState: CardState.HIDING, backgroundColor: 'lightskyblue'},
        {id: 15, cardState: CardState.HIDING, backgroundColor: 'lightskyblue'}
      ]
    

    this.state = {
      cards: shuffle(cards) 
    }

    function shuffle(x) {
      for (let i = x.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [x[i], x[j]] = [x[j], x[i]];
      }

      return x;
    }

  }


  handleChoose = (elID) => {
    console.log('I was clicked');
    console.log(elID);

    const newCards = this.state.cards.map( (element) => {
      if (element.id === elID && element.cardState == CardState.HIDING) {
       
        element.cardState = CardState.SHOWING;
       
        return {...element}
      }else {
        element.cardState = CardState.HIDING;
        return {...element}
      }

    
    });
    console.log(newCards);


    this.setState({
        cards: [...newCards]
    });
  }




  render() {

    

    const { cards } = this.state;

    return (
      <div className="container mt-4">
        <div className="row justify-content-center">
          
            {cards.map( element => (
              <Card 
              key={element.id}
              onChoose={this.handleChoose}
              id={element.id}
              cardState={element.cardState}
              backColor={element.backgroundColor}
              data={element}
              />
            ))
          }
          
        </div>
      </div>
    );
  }
}

export default App;
