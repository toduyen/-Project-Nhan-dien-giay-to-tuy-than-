import { firebasetwo } from '../../Firebase/firebaseconnectio';

const initState5 = {
  Deledata: {},
}

const reducer5 = (state = initState5, action) => {
  switch (action.type) {
    case 'DELETE_DATA':
      firebasetwo.child(action.deteitem).remove();
      return { ...state, Deledata: action.deteitem }
    default:
      return state
  }
}

export default reducer5;
