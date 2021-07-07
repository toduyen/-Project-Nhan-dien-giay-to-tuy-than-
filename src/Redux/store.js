import ThemmoiFrontCard from './reducer/ThemmoiFrontCard';
import XoaDuLieuCaHaiMat from './reducer/XoaDuLieuCaHaiMat';
import reducer4 from './reducer/reducer4';
import reducer5 from './reducer/reducer5';
import reducer6 from './reducer/reducer6';
import reducer7 from './reducer/reducer7';
import reducer8 from './reducer/reducer8';
import reducer9 from './reducer/reducer9';
import reducerFE from './reducer/reducerFE';
import reducerFE2 from './reducer/reducerFE2';
import reducerStateLoginAuth from './reducer/reducerStateLoginAuth';
import reducerPushDatauser from './reducer/ReducerPushDataUserNameNew';

var redux = require('redux');

var allreducer = redux.combineReducers({
    updatedata: ThemmoiFrontCard,
    xoa: XoaDuLieuCaHaiMat,
    thuchienluudata: reducer4,
    thuchienxoaaudios: reducer5,
    thongbao: reducer6,
    updatematsau: reducer7,
    nhaplieuapi: reducer8,
    laymaDecode: reducer9,
    suamaQR: reducerFE,
    themmoimotIDs: reducerFE2,
		reducerStateLoginAuth: reducerStateLoginAuth,
		reducerPushDatauser: reducerPushDatauser
})

var store = redux.createStore(allreducer);
export default store;