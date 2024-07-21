
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDSI4gWWFWJKYv1Toivy1TDWbfTn4j40wk",
  authDomain: "bookstore-7f7da.firebaseapp.com",
  projectId: "bookstore-7f7da",
  storageBucket: "bookstore-7f7da.appspot.com",
  messagingSenderId: "941126195495",
  appId: "1:941126195495:web:c3beac96c56be5c95c7102",
  measurementId: "G-V7MBN6M5BH"
};




// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;