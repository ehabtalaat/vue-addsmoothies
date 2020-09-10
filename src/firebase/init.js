import * as firebase from 'firebase/app';
import 'firebase/firestore';
//import firestore from 'firebase/firestore' /* tslint:disable:no-unused-variable */
const config = {
    apiKey: "AIzaSyDYgGro9D2UBHOgWYcpS5_v9tKzMbZEruM",
    authDomain: "smoothies-aad92.firebaseapp.com",
    databaseURL: "https://smoothies-aad92.firebaseio.com",
    projectId: "smoothies-aad92",
    storageBucket: "smoothies-aad92.appspot.com",
    messagingSenderId: "439141338626",
    appId: "1:439141338626:web:b7d167701f4ae3f54f211b",
    measurementId: "G-3MZZP12LXC"
  };
  const firebaseApp = firebase.initializeApp(config);

  export default firebaseApp.firestore()