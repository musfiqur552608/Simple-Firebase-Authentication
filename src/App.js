import './App.css';
import { GoogleAuthProvider, getAuth, signInWithPopup} from "firebase/auth";
import app from './firebase/firebase.init';
const auth = getAuth(app)

function App() {
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () =>{
    signInWithPopup(auth, provider)
    .then(result=>{
      const user = result.user;
    })
    .catch(error=>{
      console.log("error: ", error);
    })
  }
  return (
    <div className="App">
     <button onClick={handleGoogleSignIn}>Google Sign In</button>
    </div>
  );
}

export default App;
