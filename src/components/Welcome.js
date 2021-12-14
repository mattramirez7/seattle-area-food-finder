import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import { getAuth, GoogleAuthProvider, EmailAuthProvider } from 'firebase/auth';


const firebaseUIConfig = {
  signInOptions: [
    {provider: EmailAuthProvider.PROVIDER_ID, requiredDisplayName: true},
    GoogleAuthProvider.PROVIDER_ID,
  ],
  signInFlow: 'popup',
  credentialHelper: 'none',
  callbacks: {
    signInSuccessWithAuthResult: () => {
      return false;
    }
  }
}

export function Welcome(props) {

  const auth = getAuth();

   return (
    <div>
      <div className="card bg-purple">
        <StyledFirebaseAuth uiConfig={firebaseUIConfig} firebaseAuth={auth}/>
        </div>
      </div>
  )
}
