import {firebasefor} from '../Firebase/firebaseconnectio';

const initState = {
    getdata: {},
};

const reducerFE = (state = initState, action) => {
    switch (action.type) {
	
        case "SUAQR":
					firebasefor.child(action.getupdate.key).update({
            check : action.getupdate.check
				})
				firebasefor.once('value').then(function(snapshot){
					console.log(snapshot.val());
			})
			console.log(JSON.stringify(action.getupdate));
        return{...state,getdata:action.getitem}
        default:
            return state;
    }
};

export default reducerFE;
