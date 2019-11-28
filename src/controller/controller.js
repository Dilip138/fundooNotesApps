import firebase from 'firebase'
import Firebase from '../configure/firebaseConfig'
export async function userSignUp(data) {
    try {
        firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
        console.log(" SignUp created");
    } catch (error) {
        console.log(error.toString(error));
    }
};
export async function userLogin(data) {
    try {
        await Firebase.auth().signInWithEmailAndPassword(data.email, data.password);
        console.log("log in successfully done");

    } catch (error) {
        console.log(error.toString())
    }
}
export async function userForgot(data) {
    try {
        await firebase.auth().sendPasswordResetEmail(data.email)
        console.log('Password reset email sent successfully')
    } catch (error) {
        console.log(error.toString())
    }
}
