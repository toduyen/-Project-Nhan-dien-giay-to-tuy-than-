import firebase from 'firebase';
import Rebase from "re-base";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBMuNhWnFCaVvv6rgIyNmk0dnTm6a4fJCI",
    authDomain: "getdataai.firebaseapp.com",
    databaseURL: "https://getdataai.firebaseio.com",
    projectId: "getdataai",
    storageBucket: "",
    messagingSenderId: "368706777855",
    appId: "1:368706777855:web:230bb006041bcf82"
});

export const firebaseone = firebase
    .database()
    .ref('Note');
export const firebasetwo = firebase
    .database()
    .ref('Note1');
export const firebasethree = firebase
    .database()
    .ref('Note3');
export const firebasefor = firebase
    .database()
    .ref('Note4');
export const firebasefive = firebase
    .database()
    .ref('Note5');

const base = Rebase.createClass(firebase.database());
export {firebaseApp};
export default base;
