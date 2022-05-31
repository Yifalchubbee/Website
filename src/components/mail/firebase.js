import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAwCs4BQyMKrIYvYue08j4mcpKdWpGU-7Q",
  authDomain: "ouroboros-cb36b.firebaseapp.com",
  projectId: "ouroboros-cb36b",
  storageBucket: "ouroboros-cb36b.appspot.com",
  messagingSenderId: "61362019299",
  appId: "1:61362019299:web:39e2374ad4844a80dd5ed6",
  measurementId: "G-8W7VG4DWG8"
});

var db = firebaseApp.firestore();

export { db };