import {firebaseone} from '../Firebase/firebaseconnectio';

const initState3 = {
    Dle: {},
}

const reducer3 = (state = initState3, action) => {
    switch (action.type) {
        case 'XOA_CUC_DO':
        firebaseone.child(action.xoa).remove();
        return{...state,Dle:action.xoa}
        default:
            return state
    }
}

export default reducer3;
