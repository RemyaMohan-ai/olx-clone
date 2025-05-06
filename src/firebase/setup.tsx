import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider,signInWithPopup ,signOut,onAuthStateChanged} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCpAc-CNnPDrJH39Ius8NQcls--bi06IpI",
  authDomain: "olx-clone-99c17.firebaseapp.com",
  projectId: "olx-clone-99c17",
  storageBucket: "olx-clone-99c17.firebasestorage.app",
  messagingSenderId: "561751453603",
  appId: "1:561751453603:web:41c414cde45080d9edf416"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()

const signinWithGoogle= async()=>{
    try {
      const result = await signInWithPopup(auth,googleProvider )
      return result.user; 
  
    } catch (error) {
      console.log(error);
      
    }
  }

  const logout = async()=>{
    await signOut(auth)
  }


export {auth , googleProvider,signinWithGoogle,logout,onAuthStateChanged}
