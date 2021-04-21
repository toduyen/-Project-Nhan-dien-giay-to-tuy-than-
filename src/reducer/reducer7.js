import {firebaseone} from '../Firebase/firebaseconnectio';

const initState7 = {
    getdata: {},
};

const reducer7 = (state = initState7, action) => {
    switch (action.type) {
        case "GET_DATA_MASTER_BACK":
        firebaseone.child(action.getitem.key).update({
            namess : action.getitem.namess,
            ethnicity : action.getitem.ethnicity,
            ngayhethan : action.getitem.ngayhethan,
            noicap : action.getitem.noicap,
            tonhiao : action.getitem.tonhiao
        })
        return{...state,getdata:action.getitem}
        default:
            return state;
    }
};

export default reducer7;
