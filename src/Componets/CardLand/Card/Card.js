import React from 'react';
import './Card.css'
const Card = ({srcId,onClickUpdate,keyHolder}) => {
    //let tPath = `${path}/${srcId}`;
    return(
		<div  className = 'dib br3 ma2 pa2 grow bw1 shadow-5'>
			<img 
                alt=""
                src={require(`${srcId}`)}
                width="100"
                height="auto"
                onClick={() => onClickUpdate(keyHolder)}
                />
		</div>
    )
}
export default Card;