import * as firebase from 'firebase';
import 'firebase/firestore';
//Firebase config object in your app
let firebaseConfig = {
  apiKey: "AIzaSyCNVST2VGvqHCaLVAK-nSpwaADau8akl1g",
  authDomain: "fundoonotes-3af52.firebaseapp.com",
  databaseURL: "https://fundoonotes-3af52.firebaseio.com",
  projectId: "fundoonotes-3af52",
  storageBucket: "fundoonotes-3af52.appspot.com",
  messagingSenderId: "1078279865392",
  appId: "1:1078279865392:web:275d499cd0a65f17ce19f5",
  measurementId: "G-J2Z8FWNMSX"
};
// Initialize Firebase
let firebaseData = firebase.initializeApp(firebaseConfig);
export default firebaseData;


