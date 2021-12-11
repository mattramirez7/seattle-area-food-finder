import React from 'react';
import firebase from 'firebase/app';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

export function Welcome() {

    const loginBtn = document.querySelector('#login-btn');
    loginBtn.addEventListener('click', e => {
    e.preventDefault();
  
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    const logoutBtn = document.querySelector('#logout-btn');
    logoutBtn.addEventListener('click', e => {
      e.preventDefault();
      auth.signOut();
      console.log('User signed out!');
    })

    auth.onAuthStateChanged(user => {
        if (user) {
          console.log(user.email + " is logged in!");
        } else {
          console.log('User is logged out!');
        }
      });
      //sign in a user
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(err => console.log(err)); //log any errors for debugging

    //sign out a user
    firebase.auth().signOut()
    .catch(err => console.log(err)); //log any errors for debugging

    function handleSignUp() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    if (email.length < 4) {
        alert('Please enter an email address.');
        return;
    }
    if (password.length < 4) {
        alert('Please enter a password.');
        return;
    }

    // Create user with email and pass.
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredentials) => {
            let user = userCredentials.user; //access the newly created user
            console.log('User created: ' + user.uid);
            //...
        })
        .catch((error) => { //report any errors
            console.log(error.message);
        });
    }
}

   
        