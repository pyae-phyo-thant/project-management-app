import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCVdUHKu98BhSvbDqpXUAgvzs33eGLZmUs",
  authDomain: "my-react-app-6658d.firebaseapp.com",
  databaseURL: "https://my-react-app-6658d.firebaseio.com",
  projectId: "my-react-app-6658d",
  storageBucket: "my-react-app-6658d.appspot.com",
  messagingSenderId: "22544862145",
  appId: "1:22544862145:web:469f7f5097bf57d8ef3d40",
  measurementId: "G-1WSSMKY6C3"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase
