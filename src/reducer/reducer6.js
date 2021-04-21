const initState6 = {
    getdata: {},
    chang: false
}

const reducer6 = (state = initState6, action) => {
    switch (action.type) {
        case 'GETDATA':
        return{...state,getdata:action.getitem}
        case 'TRANG_THAI':
        return{...state,chang:!state.chang}
        default:
            return state
    }
}

export default reducer6;
