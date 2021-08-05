import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyANWGf6s_WBwdor8ZNFk8c84f_TOHlJYS0",
  authDomain: "let-s-ride-572e9.firebaseapp.com",
  projectId: "let-s-ride-572e9",
  storageBucket: "let-s-ride-572e9.appspot.com",
  messagingSenderId: "970299768329",
  appId: "1:970299768329:web:709c43093e08cbf52982d8"
 
};
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

