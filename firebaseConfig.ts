// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRakYe99RsCqKw9-HrEBbMWaNb-sZvhZY",
  authDomain: "shinobi-chat-f6935.firebaseapp.com",
  projectId: "shinobi-chat-f6935",
  storageBucket: "shinobi-chat-f6935.firebasestorage.app",
  messagingSenderId: "898799783897",
  appId: "1:898799783897:web:04c78e642b04331f8a53c8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);