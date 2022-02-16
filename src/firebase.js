// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB-7Xgd5ftD1c7M59rOX0se0tIyA9I4nR0",
  authDomain: "rickandmorty-ba8ca.firebaseapp.com",
  projectId: "rickandmorty-ba8ca",
  storageBucket: "rickandmorty-ba8ca.appspot.com",
  messagingSenderId: "380374538638",
  appId: "1:380374538638:web:fc9c4acf2e44479cffecdf"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
export { auth }
