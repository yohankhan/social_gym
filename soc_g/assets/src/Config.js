import Firebase from 'firebase';

var Config = {
    apiKey: "AIzaSyCzhUMxsSCeXygpHa1noKOeMTP1uANmlAs",
    authDomain: "social-gym-3fd3e.firebaseapp.com",
    databaseURL: "https://social-gym-3fd3e.firebaseio.com",
    projectId: "social-gym-3fd3e",
    storageBucket: "social-gym-3fd3e.appspot.com",
    messagingSenderId: "648752810583",
    appId: "1:648752810583:web:58b1e4a825d59dcf47f112",
    measurementId: "G-DX930WZ1HX"
  };
  // Initialize Firebase
  let app = Firebase.initializeApp(Config);

  export const db = app.database();
  export const auth = app.auth();
  export const storage = app.storage();