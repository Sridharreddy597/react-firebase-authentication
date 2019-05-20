import app from "firebase/app";
import "firebase/auth";
const firebaseConfig = {
  apiKey: "key",
  authDomain: "abcd.firebaseapp.com",
  databaseURL: "https://23456789-qwer.firebaseio.com",
  projectId: "abcd-",
  storageBucket: "abcd-efg.appspot.com",
  messagingSenderId: "12345",
  appId: "23456789"
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);

    this.auth = app.auth();
  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.updatePassword(password);
}

export default Firebase;
