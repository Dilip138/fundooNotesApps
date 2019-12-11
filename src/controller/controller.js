/******************************************************************************************
* @purpose : User Interface -Mobile App design to support multiple resolution for Calling the Api Using React-Native
* @file : router.js
* @module : firebase,createUserWithEmailAndPassword,signInWithEmailAndPassword,sendPasswordResetEmail
* @author : Dilip
* @version : 1.0
* @since : 29-Nov-2019
******************************************************************************************/
import firebaseData from "../configure/firebaseConfig";
import EventEmitter from 'react-native-eventemitter'
let db = firebaseData.firestore();
/**
 * 
 * @param {create emailId and password for authentication} user 
 */
export async function userSignUp(user) {
    try {
        let data = {
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            password: user.password
        }
        let res = await firebaseData.auth().createUserWithEmailAndPassword(user.email, user.password);
        let currentUser = await firebaseData.auth().currentUser.email;
        let addData = await db.collection('user').doc(currentUser).set(data);
        console.warn("user in services ", res);
        //check the Email verification
        function emailVerification() {
            firebaseData.auth().currentUser.sendEmailVerification()
        }
        EventEmitter.on('email verification', emailVerification);
        EventEmitter.emit('email verification');
        return 'success'
    } catch (error) {
        console.log(error.toString(error));
    }
};
/**
 * 
 * @param {check emailId and password for authentication} user 
 */
export async function userLogin(user) {
    try {
        await firebaseData.auth().signInWithEmailAndPassword(user.email, user.password);
        console.log("log in successfully done");
    }
    catch (error) {
        console.log(error.toString())
    }
}
/**
 * 
 * @param {check email for paswwordReset authentication} user 
 */
export async function userForgot(user) {
    try {
        await firebaseData.auth().sendPasswordResetEmail(user.email)
        console.log('Password reset email sent successfully')
    } catch (error) {
        console.log(error.toString())
    }
}
/**
 * 
 * @param {createNotes title and description for authentication} noteData 
 */
export async function createNotes(noteData) {
    let data = {
        title: noteData.title,
        description: noteData.description,
        currentUser: firebaseData.auth().currentUser.email
    }
    try {
        let res;
        await db.collection('notes').add(data)
            .then((value) => {
                console.log("Document written with ID: ", value.id);
                res = value.id;
            })
        return res;
    }
    catch (error) {
        console.log(error.toString());
    }
}
//getNotes for user authentication
export async function getNotes() {
    let note = [];
    await db.collection('notes').get().then((value) => {
        value.forEach((noteData) => {
            //console.warn("notedata in controller", noteData.data())
            note.push(noteData.data())
        })
    })
    // console.warn("res in note", note)
    return note;
}
//check logOut for user authentication
export async function userSignOut() {
    try {
        let res = await firebaseData.auth().signOut();
        console.log("res in signOut", res);
    }
    catch (error) {
        console.log(error.toString())
    }
}
