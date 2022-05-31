import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAbInvZUzg2iSmSIgv2FAydxH_2SrcJDuc",
  authDomain: "react-auth-firebase-2fc16.firebaseapp.com",
  projectId: "react-auth-firebase-2fc16",
  storageBucket: "react-auth-firebase-2fc16.appspot.com",
  messagingSenderId: "119523628717",
  appId: "1:119523628717:web:88e3ee8b3b503e2b43d824"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
