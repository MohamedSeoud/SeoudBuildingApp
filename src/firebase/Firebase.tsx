// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {addDoc, collection, doc, getFirestore, serverTimestamp, setDoc, updateDoc} from 'firebase/firestore'
import {createUserWithEmailAndPassword, getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, updateProfile} from 'firebase/auth';
import { ForgotPasswordModel, SellOrRent,  SignInFormModel, SignUpDbModel, SignUpModel } from '../helper/types';
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

export async function FirebaseSignIn (formData:SignInFormModel){
  try{
  const auth = getAuth()
  const crendentials = await signInWithEmailAndPassword(auth,formData.email,formData.password);
  if(crendentials.user){
    return true
  }
  toastNotification({text:"Something is wrong with credentials",choice:tostifyVariables.error})
  return false
  }
  catch(err){
    console.log(err)
    toastNotification({text:"Email or Password is wrong",choice:tostifyVariables.error})
    return false
  }
  
}

export async function FirebaseForgetPassword (formData:ForgotPasswordModel){
  try{
    const auth = getAuth();
    await sendPasswordResetEmail(auth,formData.email);
    toastNotification({text:"Email was sent Successfully!",choice:tostifyVariables.success})
  }
  catch(err){
    console.log(err)
    toastNotification({text:"Something went wrong with the Email",choice:tostifyVariables.error})
    return false
  }

}

export async function FirebaseLogout (){
  try{
    const auth = getAuth();
    await auth.signOut();
    toastNotification({text:"Successfully Logged out",choice:tostifyVariables.success})
  }
  catch(err){
    console.log(err)
    toastNotification({text:"Something went wrong with Logging out",choice:tostifyVariables.error})
    return false
  }

}

export async function FirebaseEditEmail (formData:{name:string}){
  try{
    const auth = getAuth();

      auth.currentUser && await updateProfile(auth.currentUser, {
        displayName:formData.name
      })

      auth?.currentUser?.uid && await updateDoc(doc(db,"users",auth.currentUser.uid),{
        name:name
      })
      toastNotification({text:"Successfully Updated!",choice:tostifyVariables.success});
      return true
  }
  catch(err){
    console.log(err)
    toastNotification({text:"Something went wrong with the Updating",choice:tostifyVariables.error})
    return false
  }
  return false;

}

export async function FirebaseAddData (formData:SellOrRent){
  try{

    
     await addDoc(collection(db,"listings"),formData)

      toastNotification({text:"Successfully Added!",choice:tostifyVariables.success});
      return true
  }
  catch(err){
    console.log('ssssss',err)
    toastNotification({text:"Something went wrong with the Adding",choice:tostifyVariables.error})
    return false
  }

}
