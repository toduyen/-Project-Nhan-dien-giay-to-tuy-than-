import {firebaseone} from '../../Firebase/firebaseconnectio';
const infoUserInitialState = {
	displayName: null,
	email: null,
	uid: null,
	DataCard: null
}
const reducerPushDatauser = (state = infoUserInitialState, action) => {
	switch (action.type) {
		case "INSERT_DATA_USER_OAUTH":
			if(state.uid === null)
			{
				console.log(`rong`);
			}
			else
			{
				firebaseone.push(state);
			}
			return {...state,displayName:action.displayName,email:action.email,uid:action.uid,DataCard:action.DataCard}
		default:
			return state
	}
}
export default reducerPushDatauser;