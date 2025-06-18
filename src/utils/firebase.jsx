// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDof6Jcfd_KWBRYlplBYBzHf8GsMgWX_t8",
  authDomain: "netflixgpt-54cde.firebaseapp.com",
  projectId: "netflixgpt-54cde",
  storageBucket: "netflixgpt-54cde.firebasestorage.app",
  messagingSenderId: "557220663750",
  appId: "1:557220663750:web:0dae0e29bf261e73c2e2c7",
  measurementId: "G-F8X0KFKMX6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);

export const auth = getAuth();