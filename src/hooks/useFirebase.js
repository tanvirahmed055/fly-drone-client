import { useState, useEffect } from 'react';
import initializeAuthentication from '../Pages/Login/firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";


initializeAuthentication();

const useFirebase = () => {

    const [userInfo, setUserInfo] = useState(null);

    const auth = getAuth();

    const googleProvider = new GoogleAuthProvider();

    const handleRegistration = (name, email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }


    const handleLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                setUserInfo(user);
                // ...
            } else {
                // User is signed out
                // ...
                setUserInfo({});
            }
        });
    }, [])

    const handleLogOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        });
    }

    return {
        handleRegistration,
        handleLogin,
        userInfo,
        handleLogOut
    };

};

export default useFirebase;