import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCoWDupWdzY4TqLoK7p9lwIYKLu66ojz3w",
    authDomain: "slack-clone-3a2db.firebaseapp.com",
    projectId: "slack-clone-3a2db",
    storageBucket: "slack-clone-3a2db.appspot.com",
    messagingSenderId: "560409867913",
    appId: "1:560409867913:web:207bb99bc455848089b858"
  };

  
const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();

const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export {auth, provider}

export default db;