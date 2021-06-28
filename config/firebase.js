
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import 'firebase/storage'

const config={
    apiKey: "AIzaSyAJ30KoZieVLOs7h9vCadmo6SZkD6kU1gA",
    authDomain: "wootailor.firebaseapp.com",
    projectId: "wootailor",
    storageBucket: "wootailor.appspot.com",
    messagingSenderId: "421016829906",
    appId: "1:421016829906:web:8f91b20ac661c1b092520b",
    measurementId: "G-HMV8FDFZLF"

};


function Apps(){
    if (!firebase.apps.length) {
        return firebase.initializeApp(config)
      }else {
        return firebase.app(); // if already initialized, use that one
      }
}


 const app = Apps()
const storage = firebase.storage()


export{
    app, storage
}
