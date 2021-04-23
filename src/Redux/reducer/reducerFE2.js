import {firebasefive} from '../../Firebase/firebaseconnectio';

const initState = {
    LuuData2: {},
}

const reducer9 = (state = initState, action) => {
	switch (action.type) {
	
		case "THEM_LAN_THOI":
			firebasefive.child('-M0mOkIPdhmNv2bXua7h').update({
				hienThiThongBao : action.getupdate.hienThiThongBao,
				outtaikhoan : action.getupdate.outtaikhoan,
				treem : action.getupdate.treem,
				nhomatchu : action.getupdate.nhomatchu,
		})
	console.log(JSON.stringify(action.getupdate));
		return{...state,getdata:action.getitem}
		default:
				return state;
}
}

export default reducer9;
