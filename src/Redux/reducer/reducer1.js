import {firebaseone} from '../../Firebase/firebaseconnectio';

const initState = {
    LuuData: {},
}

const reducer1 = (state = initState, action) => {
    switch (action.type) {
        case 'LAY_DATA':
        firebaseone.push(action.getitem);
        return{...state,LuuData:action.getitem}
        default:
            return state
    }
}

export default reducer1;
