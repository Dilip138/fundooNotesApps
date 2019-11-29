import firebase from 'firebase'
//Firebase config object in your app
const firebaseConfig = {
    apiKey: "AIzaSyC0YWLXl5lDBq9611_i43hgTeXoeBQLO2M",
    authDomain: "fundoonotes-25531.firebaseapp.com",
    databaseURL: "https://fundoonotes-25531.firebaseio.com",
    projectId: "fundoonotes-25531",
    storageBucket: "fundoonotes-25531.appspot.com",
    messagingSenderId: "190303871610",
    appId: "1:190303871610:web:1aaffaaa0de40017d411c3",
    measurementId: "G-9394CQ1Y0Y"
};
// Initialize Firebase
const Firebase=firebase.initializeApp(firebaseConfig);
const database= Firebase.database()
export default {Firebase,database}
