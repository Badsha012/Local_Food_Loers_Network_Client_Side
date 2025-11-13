// ✅ Import Firebase SDK functions
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// ✅ Firebase configuration (Vite environment variables)
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
  measurementId: import.meta.env.VITE_measurementId,
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);

// ✅ Export initialized services
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// ✅ Analytics (optional, works only in browsers)
let analytics;
if (typeof window !== "undefined") {
  analytics = getAnalytics(app);
}
export { app, analytics };
