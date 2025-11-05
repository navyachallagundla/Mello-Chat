import { initializeApp, getApps, FirebaseApp } from "firebase/app";
import { getAuth, Auth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDuubSCfGidmq6RaGOSx5IYcHIlFMWCRrg",
    authDomain: "mellochat-41fe3.firebaseapp.com",
    projectId: "mellochat-41fe3",
    storageBucket: "mellochat-41fe3.firebasestorage.app",
    messagingSenderId: "940680874552",
    appId: "1:940680874552:web:630f0b04248e4d3f8ff4cd",
    measurementId: "G-YBHPJYEZ9Z"
  };

// Initialize Firebase (client-side only)
const app: FirebaseApp = 
  typeof window !== "undefined" && getApps().length === 0
    ? initializeApp(firebaseConfig)
    : getApps()[0] || ({} as FirebaseApp);

const auth: Auth = typeof window !== "undefined" ? getAuth(app) : ({} as Auth);

export { app, auth };

