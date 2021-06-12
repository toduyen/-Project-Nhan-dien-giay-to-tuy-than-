import {firebasefor} from '../../Firebase/firebaseconnectio';

const initState = {
    LuuData2: {},
}

const reducer9 = (state = initState, action) => {
    switch (action.type) {
        case 'LAY_DATA_DECODE':
        firebasefor.push(action.getitem);
        return{...state,LuuData2:action.getitem}
        default:
            return state
    }
}

export default reducer9;
