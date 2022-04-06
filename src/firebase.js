// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfnUuO4vegizSoa_q-oHUVRwFmbcXIq3M",
  authDomain: "shopecomm-196a7.firebaseapp.com",
  projectId: "shopecomm-196a7",
  storageBucket: "shopecomm-196a7.appspot.com",
  messagingSenderId: "1064413392113",
  appId: "1:1064413392113:web:d1719f01e8b9e5fa550d50",
  measurementId: "G-SLKKJBELV7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export default app;