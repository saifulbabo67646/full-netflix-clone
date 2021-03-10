import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCxx3BApA-no4KMu7-WYFAX1xFVx1VIZuk",
    authDomain: "full-netflix-clone-744b8.firebaseapp.com",
    projectId: "full-netflix-clone-744b8",
    storageBucket: "full-netflix-clone-744b8.appspot.com",
    messagingSenderId: "524321738420",
    appId: "1:524321738420:web:b569f0cd2bce48667691e1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const Auth = firebase.auth()

  export {Auth};
  export default db;