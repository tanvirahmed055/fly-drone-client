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
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { toast } from "react-toastify";

initializeAuthentication();

const useFirebase = () => {
  const [userInfo, setUserInfo] = useState(null);

  const [loading, setLoading] = useState(true);

  const [userLoading, setUserLoading] = useState(true);

  const [role, setRole] = useState("");

  //const [token, setToken] = useState('');

  const googleProvider = new GoogleAuthProvider();

  const auth = getAuth();

  const handleRegistration = async (name, email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // Signed in
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then((res) => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
        return result;
      })
      .catch((error) => {
        // An error occurred
        // ...
        // return error;
        toast.error(error?.message || "Failed to sign up");
        console.log(typeof error);
      });
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

  const handleGoogleSignIn = async () => {
    return signInWithPopup(auth, googleProvider)
      .then((result) => {
        // Signed in
        console.log("result", result);

        const fullName = result.user.displayName || "";
        const email = result.user.email;
        updateProfile(auth.currentUser, {
          displayName: fullName,
        })
          .then((res) => {
            // Profile updated!
            // ...
          })
          .catch((error) => {
            // An error occurred
            // ...
          });
        return result;
        // storeUser(fullName, email).then((res) => {
        //   // reset();
        //   // navigate("/");
        //   // toast.success("User sign up is successful.");
        //   console.log("store user responsed", res);
        //   return res;
        // });

        // const userresponse = await storeUser(fullName, email);
        // console.log(userresponse, "userresponse");
      })
      .catch((error) => {
        // An error occurred
        // ...
        // return error;
      });

    // storeUser(data.name, data.email)
    //   reset();
    //   navigate("/");
    //   toast.success("User sign up is successful.");
    // })
    // .catch((error) => {
    //   const errorCode = error.code;
    //   const errorMessage = error.message;
    //   // ..
    //   console.log(errorCode, errorMessage);
    //   toast.success("Failed to sign up.");
    // });
  };

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
    handleGoogleSignIn,
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
