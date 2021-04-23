import {firebasetwo} from '../../Firebase/firebaseconnectio';

const initState4 = {
    getdata: {},
};

const reducer4 = (state = initState4, action) => {
    switch (action.type) {
        case 'CHANG_GETDATA':
        firebasetwo.push(action.getitem);
        return{...state,getdata:action.getitem}
        default:
            return state;
    }
};

export default reducer4;
