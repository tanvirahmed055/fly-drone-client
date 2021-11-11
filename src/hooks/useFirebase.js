import { useState, useEffect } from 'react';
import initializeAuthentication from '../Pages/Login/firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";


initializeAuthentication();

const useFirebase = () => {

    const [userInfo, setUserInfo] = useState(null);

    const [loading, setLoading] = useState(true);

    const auth = getAuth();



    const handleRegistration = (name, email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)

    }


    const handleLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }


    useEffect(() => {

        const unsubscribed = onAuthStateChanged(auth, (user) => {
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
            setLoading(false);
        });
        return () => unsubscribed;
    }, [])

    const handleLogOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            setLoading(false);
        }).catch((error) => {
            // An error happened.
        });

    }

    return {
        handleRegistration,
        handleLogin,
        userInfo,
        setUserInfo,
        handleLogOut,
        updateProfile,
        auth,
        loading,
        setLoading
    };

};

export default useFirebase;