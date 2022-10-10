import { createContext, useCallback, useContext, useState } from 'react';
import { initialCards, initialInventory, initialDecks } from '../mockdata/CardData';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);
export function AppContextProvider(props) {

    const myDeckRestore = localStorage.getItem('STAR_TREK_MY_DECK');
    const initialInventoryRestore = localStorage.getItem('STAR_TREK_INVENTORY');
    
    let myInitialDeck = initialDecks[0];
    let initialInventoryNew = initialInventory;
    if (myDeckRestore) myInitialDeck.cards = myDeckRestore.split(',').map(e => initialCards[e]); 

    if(initialInventoryRestore) {
      let initialInventoryRestoreArray = initialInventoryRestore.split(',');
      initialInventoryNew = initialInventoryRestoreArray.reduce((acc, elem, idx) => { acc[idx] = elem; return acc}, {});
    }
    const [applicationState, updateApplicationState] = useState({inventory: initialInventoryNew, decks: [ myInitialDeck, initialDecks[1]] })

    const BuyCardForPlayer = useCallback( (cardId) => {
     
      if (applicationState.inventory[cardId] === 0) return;
      let currentInventory = {...applicationState.inventory};
      let currentMyDeck = {...applicationState.decks[0]};
         
      currentInventory[cardId]--;
        
      currentMyDeck.cards.push(initialCards[cardId]);
      updateApplicationState({inventory: currentInventory, decks: [currentMyDeck, applicationState.decks[1]]});
      localStorage.setItem('STAR_TREK_MY_DECK', currentMyDeck.cards.map((e, acc) => e.id ));
      localStorage.setItem('STAR_TREK_INVENTORY', Object.values(currentInventory));
      
    }
    , [applicationState]);


      const sellCardFromPlayer = useCallback((cardId) => {

        let currentInventory = {...applicationState.inventory};
        let currentMyDeck = {...applicationState.decks[0]};
                  
        currentInventory[cardId]++;
        
        let idxCardSell = currentMyDeck.cards.findIndex( cardObject => cardObject.id === cardId);
        currentMyDeck.cards = currentMyDeck.cards.filter((cardObject, idx) => idx !== idxCardSell );
        
        updateApplicationState({inventory: currentInventory, decks: [currentMyDeck, applicationState.decks[1]]});
        localStorage.setItem('STAR_TREK_MY_DECK', currentMyDeck.cards.map((e, acc) => e.id ));
        localStorage.setItem('STAR_TREK_INVENTORY', Object.values(currentInventory));
    }, [applicationState]);
 

    return (
      <AppContext.Provider value={{cards: initialCards, applicationState, buyCard: BuyCardForPlayer, sellCard: sellCardFromPlayer }}>
        {props.children}
      </AppContext.Provider>
    )
}