import { getApp, getApps, initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDm9UDC8oA95Oe9swtfb_ofPFC9oI58_Ss",
  authDomain: "redux-auth-b7599.firebaseapp.com",
  projectId: "redux-auth-b7599",
  storageBucket: "redux-auth-b7599.firebasestorage.app",
  messagingSenderId: "5246984334",
  appId: "1:5246984334:web:9f9f4c56c1aec6f602e9df"
};
// const firebaseConfig = {
//   apiKey: "AIzaSyAadRnxl07Ug_f8tOllNGEVCCp9j1orHuU",
//   authDomain: "auth-f5e79.firebaseapp.com",
//   projectId: "auth-f5e79",
//   storageBucket: "auth-f5e79.firebasestorage.app",
//   messagingSenderId: "142788404610",
//   appId: "1:142788404610:web:08d6fd48345bbbb6551b9b",
// };

const missingConfig = Object.entries(firebaseConfig)
  .filter(([, value]) => !value)
  .map(([key]) => key);

export const firebaseConfigError =
  missingConfig.length > 0
    ? `Faltan variables de entorno de Firebase: ${missingConfig.join(", ")}.`
    : null;

function getFirebaseApp(): FirebaseApp | null {
  if (firebaseConfigError) {
    return null;
  }

  if (getApps().length > 0) {
    return getApp();
  }

  return initializeApp(firebaseConfig);
}

export function getFirebaseClientAuth(): Auth | null {
  const app = getFirebaseApp();

  if (!app) {
    return null;
  }

  return getAuth(app);
}
