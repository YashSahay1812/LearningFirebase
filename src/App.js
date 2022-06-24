import React, {useState} from "react";
import './App.css';
import {app} from './firebaseConfig'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


function App() {

  let auth = getAuth();
  const [data, setData] = useState({});
  const handleInput = (event) => {
    let newInput = {[event.target.name]: event.target.value};
    setData({...data,...newInput});
  }

  // Handling user sign-up
  const handleSignUp = (event) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((response) => {
        console.log(response.user);
      })
      .catch((error) => {
        alert(error.message);
      })
  }
  
  // Handling user sign-in
  const handleSignIn = (event) => {
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((response) => {
        console.log(response.user);
      })
      .catch((error) => {
        alert(error.message);
      })
  }


  return (
    <div className="App">
      <form>
        <input placeholder="Enter email" name="email" type="email" onChange={(event) => handleInput(event)} />
        <input type="password" name="password" onChange={(event) => handleInput(event)} />
        <button onClick={(event) => handleSignUp(event)}>SignUp</button>
        <button onClick={(event) => handleSignIn(event)}>SignIn</button>
      </form>
    </div>
  );
}

export default App;
