import { useParams } from 'react-router-dom'
import { useAppContext } from '../../context/AppContext';
import Card from "../Card";

const Deck = () => {

  const { id } = useParams();
  const { applicationState, sellCard } = useAppContext();

  const decks = applicationState.decks;
  const deck = decks[id];

  return (
    <div>
      <h2>{deck.name}</h2>
      {getRows(deck.cards, sellCard)}
    </div>
  );
};

// Helper function(s)

const getRows = (cards, sellCard) => {
  const numCols = 6;
  const numRows = Math.ceil(cards.length/numCols)

  // Pad the card list so it's an exact multiple of the number of columns
  const myCards = [...cards];
  for (let i=0; i<cards.length % numCols; i++) {
    myCards.push(null);
  }

  const rows = [];
  for (let i = 0; i < numRows; i++) {
    // Pull out just the cards for this row
    const nextRow = myCards.slice(i * numCols, (i+1) * numCols)
    rows.push(
      <div key={i} className="columns">
        {nextRow.map((card, index) => (
          <div key={index} className="column is-one-sixth">
            
            {card && ((
               <button className="button" onClick={() => sellCard(card.id)}>
                  <small> Sell (in stock) </small>
                </button> 
            ) )}
            {card && ((
                <Card
                  imgUrl={card.imgUrl}
                  content={card.content}
                /> 
            ) )}
          </div>
        ))}
      </div>
    );
  }
  return rows;
};

export default Deck;