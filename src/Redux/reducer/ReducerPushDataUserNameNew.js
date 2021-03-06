import { firebaseDemo } from '../../Firebase/firebaseconnectio';
const nameInitialState = {
  newUserName: {}
}
const reducerPushDatauser = (state = nameInitialState, action) => {
  switch (action.type) {
    case "INSERT_DATA_USER_OAUTH":
      let tiepNhanDataUserName = {
        ...state,
        newUserName: action.newItem
      }
      if (tiepNhanDataUserName.newUserName.uid) {
        firebaseDemo.push(tiepNhanDataUserName.newUserName);
      }
      return state;

    case "THEMMOI_VAO_NUT_CHA":
      var newPostKey = firebaseDemo
        .push()
        .key;
      var updates = {};
      updates['DataCard/' + newPostKey] = action.ganGiatri;
      firebaseDemo
        .child(JSON.parse(localStorage.getItem('dataUserNamePush')).key)
        .update(updates);
      return state
    default:
      return state
  }
}
export default reducerPushDatauser;