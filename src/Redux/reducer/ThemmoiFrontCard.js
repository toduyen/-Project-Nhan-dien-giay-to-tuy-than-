import { firebaseDemo } from '../../Firebase/firebaseconnectio';
const initState2 = {
  Nhandata: {},
}

const ThemmoiFrontCard = (state = initState2, action) => {
  switch (action.type) {
    case 'CHANGE_UPDATE':
      firebaseDemo.child(JSON.parse(localStorage.getItem('dataUserNamePush')).key).child('DataCard').child(action.getupdate.key).update({
        name: action.getupdate.name,
        id: action.getupdate.id,
        dob: action.getupdate.dob,
        home: action.getupdate.home,
        address: action.getupdate.address,
        sex: action.getupdate.sex
      })
      return { ...state, Nhandata: action.getupdate }
    default:
      return state
  }
}

export default ThemmoiFrontCard;
