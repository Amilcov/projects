import produceData from '../mockData/produce.json';

const POPULATE = 'produce/POPULATE';
const LIKED = 'produce/LIKED';

export const populateProduce = () => {
    return {
      type: POPULATE,
      produce: produceData
    }
};

export const likedProduce= (id) => {
    return {
        type: LIKED,
        id
    }

}

export default function produceReducer(state = {}, action) {
    let stateNew = {};
    switch (action.type) {
        case POPULATE:
        
            action.produce.forEach(product => {
                stateNew[product.id] = product
            });
            return stateNew;

        case LIKED:
            stateNew = {...state};
            stateNew[action.id].liked = !stateNew[action.id].liked;
            return stateNew;

        default:
            return state;
    }

};

