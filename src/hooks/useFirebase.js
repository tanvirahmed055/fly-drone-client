import { useState, useEffect } from 'react';
import initializeAuthentication from '../Pages/Login/Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile, getIdToken } from "firebase/auth";


initializeAuthentication();

const useFirebase = () => {

    const [userInfo, setUserInfo] = useState(null);

    const [loading, setLoading] = useState(true);

    const [userLoading, setUserLoading] = useState(true);

    const [role, setRole] = useState('');

    const [token, setToken] = useState('');

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
                //console.log(user?.email);
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                setUserInfo(user);
                // ...

                user.getIdToken(/* forceRefresh */ true).then(idToken => {
                    setToken(idToken);
                    console.log(idToken);
                });

                const url = `http://localhost:5000/user?email=${user?.email}`

                fetch(url)
                    .then(res => res.json())
                    .then(data => {
                        setRole(data?.role)
                        //console.log('checking role', data?.role);
                        //console.log('printing role', role);
                        setUserLoading(false);

                    })


            } else {
                // User is signed out
                // ...
                setUserInfo({});
                setRole('');

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
        setLoading,
        role,
        userLoading,
        token
    };

};

export default useFirebase;