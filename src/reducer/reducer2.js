import {firebaseone} from '../Firebase/firebaseconnectio';
const initState2 = {
    Nhandata: {},
}

const reducer2 = (state = initState2, action) => {
    switch (action.type) {
        case 'CHANGE_UPDATE':
        firebaseone.child(action.getupdate.key).update({
            name : action.getupdate.name,
            id : action.getupdate.id,
            dob : action.getupdate.dob,
            home : action.getupdate.home,
            address : action.getupdate.address,
        })
        firebaseone.once('value').then(function(snapshot){
            console.log(snapshot.val());
        })
        console.log(JSON.stringify(action.getupdate));
        return{...state,Nhandata:action.getupdate}
        default:
            return state
    }
}

export default reducer2;
