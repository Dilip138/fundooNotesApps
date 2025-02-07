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
 * @param {user}  //create emailId and password for user authentication
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
 * @param {user}  //check emailId and password for user authentication
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
 * @param {user}  //check email for paswwordReset authentication
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
 * @param {noteData}  //createNotes title, description and reminder for authentication
 */
export async function createNotes(noteData) {
    let data = {
        title: noteData.title,
        description: noteData.description,
        reminder: noteData.reminder,
        archive: noteData.archive,
        pinned: noteData.pinned,
        color: noteData.color,
        trash: noteData.trash,
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
            note.push(noteData)
        })
    })
    // console.warn("res in note", note)
    return note;
}
/**
 * 
 * @param {editData}  //editNotes for user authentication
 */
export async function editNotes(editData) {
    //console.warn("res in editData", editData);
    try {
        let data = {
            title: editData.title,
            description: editData.description,
            reminder: editData.reminder
        }
        let res = await db.collection('notes').doc(editData.key).update(data)
        console.warn("res in edit", res)
    }
    catch (error) {
        console.log(error.toString());
    }
}
/**
 * 
 * @param {archiveData} //archiveNotes for user authentication
 */
export async function archiveNotes(archiveData) {
    try {
        //console.warn("res in archive", archiveData);
        if (archiveData.archive == false) {
            archiveData.archive = true
        }
        else {
            archiveData.archive = false
        }
        await db.collection('notes').doc(archiveData.key).update(archiveData)
    }
    catch (error) {
        console.log(error.toString());
    }
}
/**
 * 
 * @param {deleteData}  //deleteNotes for user authentication
 */
export async function deleteNotes(deleteData) {
    try {
        //console.warn("res in deleteNotes",deleteData);        
        let res = await db.collection('notes').doc(deleteData).delete()
        console.log("deleteData successfull", res)
    }
    catch (error) {
        console.log(error.toString());
    }
}
/**
 * 
 * @param {trashData}  //trashNotes for user authentication
 */
export async function trashNotes(trashData) {
    try {
        //console.warn("res in trash", trashData);
        if (trashData.trash == false) {
            trashData.trash = true
            trashData.archive = false
            trashData.reminder = ''
        }
        else {
            trashData.trash = false
        }
        await db.collection('notes').doc(trashData.key).update(trashData)
    }
    catch (error) {
        console.log(error.toString());
    }
}
/**
 * 
 * @param {restoreData } //restoreNotes for user authentication
 */
export async function restoreNotes(restoreData) {
    //console.warn("res in restoreNotes",restoreData)
    if (restoreData.trash == true) {
        restoreData.trash = false
    }
    else {
        restoreData.trash = true
    }
    await db.collection('notes').doc(restoreData.key).update(restoreData)
}
/**
 * 
 * @param {colorData}  //updateColor for user authentication
 */
export async function updateColor(colorData) {
    try {
        //console.warn("res in colorData", colorData);
        let data = {
            color: colorData.color,
        }
        console.warn("res in colorData", data);
        await db.collection('notes').doc(colorData.key).update(data)
    }
    catch (error) {
        console.log(error.toString())
    }
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
