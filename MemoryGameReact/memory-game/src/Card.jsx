import React from 'react';
import './card.scss';

const Card = ({onChoose, id, cardState, backColor, data}) => {

    const style = {
        backgroundColor: backColor
    }
    
    if(cardState == 1) {
        style.backgroundColor = backColor
    } else {
        style.backgroundColor = 'grey'
    }
    

    return (

       

       <div className="card" style={style} onClick={() => onChoose(id)} >


       </div>
    )
}

export default Card;