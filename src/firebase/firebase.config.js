// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcmu4zU_iMiOdYKpr5noRJ2Npbo52-TQI",
  authDomain: "assignment11-auth.firebaseapp.com",
  projectId: "assignment11-auth",
  storageBucket: "assignment11-auth.appspot.com",
  messagingSenderId: "875208229085",
  appId: "1:875208229085:web:d597ab0505e88d65b6db34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;