import {firebaseone} from '../../Firebase/firebaseconnectio';
const infoUserInitialState = {
	newUserName : {}
}
const reducerPushDatauser = (state = infoUserInitialState, action) => {
	switch (action.type) {
		case "INSERT_DATA_USER_OAUTH":
		let tiepNhanDataUserName = {...state,newUserName:action.newItem}
		if(tiepNhanDataUserName.newUserName.uid)
		{
			firebaseone.push(tiepNhanDataUserName.newUserName);
		}
		return state;



		
			case "INSERT_CHILD_FOR_PATHER":
			var newPostKey = firebaseone.push().key;
			var updates = {};
			updates['DataCard/' + newPostKey] = action.ganGiatri;
			firebaseone.child('dan vao day').update(updates);
			return state
		default:
			return state
	}
}
export default reducerPushDatauser;