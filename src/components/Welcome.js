import React from 'react';
import firebase from 'firebase/app';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

export function Welcome(props) {
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;
  //the user's name let name = firebaseUser.displayName; 
  //the user's picturelet pic = firebaseUser.photoURL; 
   
   function signUp() {

      fire.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredentials) => {
      let user = userCredentials.user;
         console.log(UserCreated + user.uid);
      })
      .catch((error) => {
         console.log(error.message);
      })
   }
   
   function login() {
      fire.auth().signInWithEmailAndPassword(email, password)
      .then((userCredentials) => {
      let user = userCredentials.user;
        console.log(UserCreated + user.uid);
      })
      .catch((error) => {
         console.log(error.message);
      })
   }

   /* function updateProfile (name, pic)
     firebaseUser.updateProfile({
       let displayName = name;
       let photoURL = pic;
     }
  } */
   
   return (
    <div style={{ textAlign: 'center' }}>
      <div>
        <div>Email</div>
          <input id="email" placeholder="Enter Email.." type="text"/>
        </div>
      <div>
        <div>Password</div>
          <input id="password" placeholder="Enter Password.." type="text"/>
        </div>
      <button style={{margin: '10px'}} onClick={this.login}>Login</button>
        <button style={{margin: '10px'}} onClick={this.signUp}>Sign Up</button>
      </div>
  )
}

