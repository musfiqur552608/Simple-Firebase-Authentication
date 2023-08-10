import './App.css';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut} from "firebase/auth";
import app from './firebase/firebase.init';
import { useState } from 'react';
const auth = getAuth(app)

function App() {
  const [user, setUser]= useState({})
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () =>{
    signInWithPopup(auth, provider)
    .then(result=>{
      const user = result.user;
      setUser(user);
    })
    .catch(error=>{
      console.log("error: ", error);
    })
  }

  const handleGoogleSignOut = () =>{
    signOut(auth)
    .then(()=>{
      setUser({})
    })
    .catch(()=>{
      setUser({})
    })
  }

  return (
    <div className="App">
     { user.email?
     <button onClick={handleGoogleSignOut}>Sign Out</button>:
      <button onClick={handleGoogleSignIn}>Google Sign In</button>
     }
     {user.email && <div>
      <h3>User name: {user.displayName}</h3>
      <p>Email address: {user.email}</p>
      <img src={user.photoURL} alt="" />
     </div>}
    </div>
  );
}

export default App;
