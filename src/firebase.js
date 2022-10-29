// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAU4WSlM0OiCz0MD-fkaVSSgNtx8wmMK1Q",
  authDomain: "netflixclone-f375f.firebaseapp.com",
  projectId: "netflixclone-f375f",
  storageBucket: "netflixclone-f375f.appspot.com",
  messagingSenderId: "13779529881",
  appId: "1:13779529881:web:ceb1f168eab782ab528808",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
