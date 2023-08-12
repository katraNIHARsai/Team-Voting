import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {

  apiKey: "AIzaSyB6yHPC1reHbqyfLBYS8_fW_0N_2rybuiY",
  authDomain: "class-58project.firebaseapp.com",
  projectId: "class-58project",
  storageBucket: "class-58project.appspot.com",
  messagingSenderId: "204031798408",
  appId: "1:204031798408:web:b10b779c791431ee1ec33d"

};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();
