import { useState, useEffect } from "react";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  getIdToken,
} from "firebase/auth";
import { toast } from "react-toastify";

initializeAuthentication();

const useFirebase = () => {
  const [userInfo, setUserInfo] = useState(null);

  const [loading, setLoading] = useState(true);

  const [userLoading, setUserLoading] = useState(true);

  const [role, setRole] = useState("");

  //const [token, setToken] = useState('');

  const auth = getAuth();

  const handleRegistration = (name, email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const handleLogin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        setUserInfo(user);
        // ...

        user.getIdToken(/* forceRefresh */ true).then((idToken) => {
          //setToken(idToken);
          localStorage.setItem("idToken", idToken);
          //console.log(idToken);
        });

        const url = `http://localhost:5000/user?email=${user?.email}`;

        try {
          fetch(url)
            .then((res) => res.json())
            .then((data) => {
              setRole(data?.role);
              setUserLoading(false);
            });
        } catch (e) {
          console.log(e);
        }
      } else {
        // User is signed out
        // ...
        setUserInfo({});
        setRole("");
        localStorage.removeItem("idToken");
      }
      setLoading(false);
    });
    return () => unsubscribed;
  }, []);

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        setLoading(false);
        toast.success("Successfully logged out.");
      })
      .catch((error) => {
        // An error happened.
        console.log("error", error);
        toast.error("Failed to log out.");
      });
  };

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
    //token
  };
};

export default useFirebase;
