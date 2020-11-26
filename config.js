import firebase from 'firebase';
require('@firebase/firestore');

var firebaseConfig = {
  apiKey: "AIzaSyC2wl-UGo3wggUA5HdkEpzQ4CcTCWVrTVU",
  authDomain: "barter-1da6f.firebaseapp.com",
  databaseURL: "https://barter-1da6f.firebaseio.com",
  projectId: "barter-1da6f",
  storageBucket: "barter-1da6f.appspot.com",
  messagingSenderId: "890638791139",
  appId: "1:890638791139:web:b4e81b96a99d23f92570d6"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();