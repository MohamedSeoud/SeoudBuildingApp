// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {doc, getFirestore, serverTimestamp, setDoc} from 'firebase/firestore'
import {createUserWithEmailAndPassword, getAuth, updateProfile} from 'firebase/auth';
import { SignUpDbModel, SignUpModel } from '../helper/types';
import toastNotification from "../helper/toastNotification";
import { tostifyVariables } from "../helper/enum/tostifyVariables";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOCxWtzMh-Y2_bV5g2UeStmZuW5H5TkEU",
  authDomain: "seoud-building-clone.firebaseapp.com",
  projectId: "seoud-building-clone",
  storageBucket: "seoud-building-clone.appspot.com",
  messagingSenderId: "521863304942",
  appId: "1:521863304942:web:a218acc0cd4cd7680105ff"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();

export  async function FirebaseSignUp(fromData:SignUpModel) {

    try{
        const auth = getAuth();
        const userCredential = await createUserWithEmailAndPassword(auth,fromData.email,fromData.password);
        const user = userCredential.user 
        auth.currentUser && updateProfile(auth.currentUser,{
          displayName:fromData.name
        })
        const formDataCopy:SignUpDbModel = {name:fromData.name,email:fromData.email,password:fromData.password, timeStap :serverTimestamp()}
        console.log(formDataCopy)
        await setDoc(doc(db,"users",user.uid),formDataCopy)
        
        return true
    }
    catch(err){
        console.log(err)
        toastNotification({text:"Something Went wrong with Registeration",choice:tostifyVariables.error})
        return false
    }
}