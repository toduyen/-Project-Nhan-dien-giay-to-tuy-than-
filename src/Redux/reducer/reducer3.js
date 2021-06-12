import { firebaseDemo } from '../../Firebase/firebaseconnectio';

const initState3 = {
  Dle: {},
}

const reducer3 = (state = initState3, action) => {
  switch (action.type) {
    case 'XOA_CUC_DO':
      firebaseDemo.child(JSON.parse(localStorage.getItem('dataUserNamePush')).key).child('DataCard').child(action.xoa).remove();
      return { ...state, Dle: action.xoa }
    default:
      return state
  }
}

export default reducer3;
