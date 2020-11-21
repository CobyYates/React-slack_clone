import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyCbkuxR8ezLD-XN0HzT2QFj5aYH2714Bbs",
  authDomain: "slack-8d379.firebaseapp.com",
  databaseURL: "https://slack-8d379.firebaseio.com",
  projectId: "slack-8d379",
  storageBucket: "slack-8d379.appspot.com",
  messagingSenderId: "701771608592",
  appId: "1:701771608592:web:46e7921210dbab8aad5095",
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db