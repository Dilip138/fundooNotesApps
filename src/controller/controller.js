import firebase from 'firebase'
import database from '../configure/firebaseConfig'
import Firebase from '../configure/firebaseConfig'
//create emial and password to show the authentication
export async function userSignUp(data) {
    try {
        await Firebase.Firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
            .then(() => {
                firebase
                    .firestore()
                    .doc('/userProfile')
                    .set({ data });
                firebase.auth().currentUser.sendEmailVerification()
            })
            .catch(err => {
                console.log("err in register component ", err);
            })
    } catch (error) {
        console.log(error.toString(error));
    }
};
//check emailId and password for authentication
export async function userLogin(data) {
    try {
        await Firebase.Firebase.auth().signInWithEmailAndPassword(data.email, data.password);
        console.log("log in successfully done");

    } catch (error) {
        console.log(error.toString())
    }
}
//check email for paswwordReset authentication
export async function userForgot(data) {
    try {
        await firebase.auth().sendPasswordResetEmail(data.email)
        console.log('Password reset email sent successfully')
    } catch (error) {
        console.log(error.toString())
    }
}
