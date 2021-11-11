import { useState, useEffect } from 'react';
import initializeAuthentication from '../Pages/Login/firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";


initializeAuthentication();

const useFirebase = () => {

    const [userInfo, setUserInfo] = useState(null);

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const handleRegistration = (name, email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }




    const handleGoogleLogin = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // The signed-in user info.

                // ...
                //console.log(result);



            }).catch((error) => {
                // Handle Errors here.

            });
    }

    return {
        handleRegistration,
        handleGoogleLogin
    };

};

export default useFirebase;