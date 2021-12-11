import React from 'react';

export function Welcome() {

    const registerWithEmailAndPassword = async (name, email, password) => {
        try {
          const res = await auth.createUserWithEmailAndPassword(email, password);
          const user = res.user;
          await db.collection("users").add({
            uid: user.uid,
            name,
            authProvider: "local",
            email,
          });
        } catch (err) {
          console.error(err);
          alert(err.message);
        }
      };
      
      const signInWithEmailAndPassword = async (email, password) => {
        try {
          await auth.signInWithEmailAndPassword(email, password);
        } catch (err) {
          console.error(err);
          alert(err.message);
        }
      };      
      
    return (
        <section className="welcome">
                <h1>Welcome to the Seattle Area Food Finder</h1>
        </section>
    )
}