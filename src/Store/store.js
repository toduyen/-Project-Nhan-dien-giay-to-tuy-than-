import reducer1 from '../reducer/reducer1';
import reducer2 from '../reducer/reducer2';
import reducer3 from '../reducer/reducer3';
import reducer4 from '../reducer/reducer4';
import reducer5 from '../reducer/reducer5';
import reducer6 from '../reducer/reducer6';
import reducer7 from '../reducer/reducer7';
import reducer8 from '../reducer/reducer8';
import reducer9 from '../reducer/reducer9';
import reducerFE from '../reducer/reducerFE';
import reducerFE2 from '../reducer/reducerFE2';

var redux = require('redux');

var allreducer = redux.combineReducers({
    laydata: reducer1,
    updatedata: reducer2,
    xoa: reducer3,
    thuchienluudata: reducer4,
    thuchienxoaaudios: reducer5,
    thongbao: reducer6,
    updatematsau: reducer7,
    nhaplieuapi: reducer8,
    laymaDecode: reducer9,
    suamaQR: reducerFE,
    themmoimotIDs: reducerFE2
})

var store = redux.createStore(allreducer);

store.subscribe(() => {
    console.log(JSON.stringify(store.getState()));
})
export default store;